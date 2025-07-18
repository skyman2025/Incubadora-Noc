
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { sequelizeUsers } = require('./db/database');

//const session = require('express-session');

const passport = require('passport');

const GitHubStrategy = require('passport-github2').Strategy;

const axios = require('axios');
const multer = require('multer');

const verificarToken = require('./middleware/verificarToken');
const {isAuthenticated}  = require('./middleware/autenticacion');
const cookieParser = require('cookie-parser');

const { Op } = require('sequelize');
const { createServer } = require('node:http');
const { Server } = require('socket.io');
const Mensaje = require('./models/chat')

const userRoutes = require('./routes/usersroutes');
const cursosRoutes = require('./routes/cursosroutes');  
const empresasRoutes = require('./routes/empresasroutes'); 
const publicacionesRoutes = require('./routes/publicacionesroutes');  
const entrenamientosRoutes = require('./routes/entrenamientosroutes'); 
const inscripcionesRoutes = require('./routes/inscripcionesroutes');  
const asistenciasRoutes = require('./routes/asistenciasroutes');  
const pagosRoutes = require('./routes/pagosroutes');
const contenidosRoutes = require('./routes/contenidoroutes');
const docentecursoRoutes = require('./routes/docentecursoroutes');


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');  
  },
  filename: (req, file, cb) => {
    const dni = req.body.dni || 'sin_dni'; 
    const ext = path.extname(file.originalname);
    const filename = `${dni}_${Date.now()}${ext}`;
    cb(null, filename);
  }
});

const upload = multer({ 
  storage: storage,
  limits: { fileSize: 2 * 1024 * 1024 }, // 2MB
  fileFilter: (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Tipo de archivo no válido. Solo se permiten JPG y PNG.'));
    }
  }
});

const storage2 = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
    const nombreCurso = req.body.nombre_curso || 'sin_nombre_curso';
    const ext = path.extname(file.originalname);
    cb(null, `${nombreCurso}_${Date.now()}${ext}`);
  }
});

const upload2 = multer({ 
  storage: storage,
  limits: { fileSize: 2 * 1024 * 1024 }, // 2MB
  fileFilter: (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Tipo de archivo no válido. Solo se permiten JPEG o JPG y PNG.'));
    }
  }
});

const jwt = require('jsonwebtoken');

dotenv.config(); 
const app = express();

app.use(cors({
  origin: 'http://localhost:4200', 
  credentials: true
}));

app.use(express.json());
app.use(cors()); 

app.use(passport.initialize())

app.use('/uploads', express.static('uploads'));

app.use('/user', userRoutes);
app.use('/cursos', cursosRoutes);
app.use('/empresas', empresasRoutes);
app.use('/publicaciones', publicacionesRoutes);
app.use('/entrenamientos', entrenamientosRoutes);
app.use('/inscripciones', inscripcionesRoutes);
app.use('/asistencias', asistenciasRoutes);
app.use('/pagos', pagosRoutes);
app.use('/contenidos', contenidosRoutes);
app.use('/docentes', docentecursoRoutes);


//  ******seccion  chat docente alumno ***********
      
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:4200',
    methods: ['GET', 'POST'],
    credentials: true
  },
  connectionStateRecovery: {}
});

io.on('connection', async (socket) => {
  console.log('a user connected');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('chat message', async (msg, clientOffset, callback = () => {}) => {
    let result;
    try {
      result = await Mensaje.create({
        content: msg,
        client_offset: clientOffset
      });
    } catch (e) {
      if (e.errno === 19) {
        // Mensaje duplicado
        callback();
      } else {
        console.error('Error al guardar mensaje:', e);
      }
      return;
    }

    io.emit('chat message', msg, result.id);
    callback();
  });

  if (!socket.recovered) {
    const offset = socket.handshake.auth.serverOffset || 0;

    try {
      const mensajes = await Mensaje.findAll({
        where: {
          id: {
            [Op.gt]: offset
          }
        },
        order: [['id', 'ASC']]
      });

      mensajes.forEach((row) => {
        socket.emit('chat message', row.content, row.id);
      });
    } catch (e) {
      console.error('Error al recuperar mensajes:', e);
    }
  }
});      

// *******fin seccion chat*******************

// *******Inicio Seccion  autenticacion*********
passport.use(new GitHubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: process.env.CALLBACK_URL,
  scope: ['user:email'], 
},

async (accessToken, refreshToken, profile, done) => {
   console.log('AccessToken:', accessToken);
  try {
    const emailsRes = await axios.get('https://api.github.com/user/emails', {
      headers: { Authorization: `token ${accessToken}` }
    });

    const emails = emailsRes.data;
    const primaryEmailObj = emails.find(emailObj => emailObj.primary) || emails[0];
    const email = primaryEmailObj?.email || null;
    
    const nombre = profile._json?.name || profile.displayName || '';
    const avatar = (profile.photos && profile.photos.length > 0) ? profile.photos[0].value : '';


    profile.nombre = nombre;
    profile.avatar = avatar;
    profile.emails = [{ value: email }];

    console.log('Datos de GitHub:', {
      nombre,
      email,
      avatar
    });

    return done(null, profile);
  } catch (err) {
    console.error('Error obteniendo email desde GitHub API', err);
    return done(err, profile);
  }
}));


require('dotenv').config();

app.use(cookieParser());

app.get('/github/callback',
  passport.authenticate('github', { session: false }),
  async (req, res) => {
    if (!req.user) {
      return res.redirect('/user/login');
    }

    try {
      const profile = req.user;

      const nombreCompleto = profile._json?.name || '';
      const partesNombre = nombreCompleto.trim().split(' ');
      const apellido = partesNombre.pop();
      const nombre = partesNombre.join(' ');

      const email = (profile.emails && profile.emails.length > 0) ? profile.emails[0].value : null;
      const foto = (profile.photos && profile.photos.length > 0) ? profile.photos[0].value : profile._json?.avatar_url || null;

      console.log('email:', email);

      if (!email) {
        return res.status(400).send('Email no disponible en perfil GitHub');
      }

      const payload = {
        nombre,
        apellido,
        email,
        foto
      };

      // const queryParams = new URLSearchParams(payload).toString();
      // return res.redirect(`http://localhost:3000/user/github/create?${queryParams}`);
      console.error('procesar login GitHub:', payload);
      await axios.post('http://localhost:3000/user/github/create', payload);
      res.redirect('http://localhost:4200/perfil');

    } catch (error) {
      console.error('Error al procesar login GitHub:', error);
      res.status(500).send('Error interno del servidor');
    }
  }
);

        

sequelizeUsers.authenticate()  // Verifica solo la conexión, no sincroniza ni modifica la base de datos
.then(() => {
    console.log('Conexión exitosa a la base de datos');
    server.listen(3000, () => {
        console.log('Servidor corriendo en el puerto 3000');
    });
})
.catch((error) => {
    console.error('Error al conectar con la base de datos:', error);
});


