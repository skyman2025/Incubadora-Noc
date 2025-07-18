# IncubadoraBackend

Proyecto Xacademy 2025

## Caracteristicas nuevas

  * **la carga de usuario ahora tiene la contraseña encriptada deberan recordar la contraseña si cargan usuarios nuevos para reingresar de ser nesesario**
  * **la pagina tiene precargada las imagenes de los cursos basicos y de usuario: alumno,docente y un admin**
  * **traten de probar todos los resultados esperados o no y avisar (BUG)**

## Instrucciones Creacion base de datos y back End en sus Entornos

  1. configurar sus archivos .env
  
```markdown
DB_HOST=localhost
DB_USER=
DB_PASS=
DB_NAME=NOC
DB_PORT=3307


# Si usaran y probaran el login con git hub  deberan registrarse en sus 
# cuentas y obtener sus #secretkey y demas datos propios de github  


GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
CALLBACK_URL=http://localhost:3000/github/callback

```

  2. Correr el comando siguiente en consola (el mismo creara y cargara la base de datos)

                                    npm run db:reset

  3. Luego correr el servidor normalmente

                                    npm run dev


Valores devueltos ejemplo( http://localhost:3000/user/findById/4 )

```markdown
{
  "id_usuario": 4,
  "nombre": "Carlos",
  "apellido": "Gómez",
  "fecha_nacimiento": "2004-10-22",
  "direccion": "Av. Rivadavia 456",
  "telefono": "1134567890",
  "email": "carlosGomez@gmail.com",
  "password": "carlos123",
  "dni": 40234567,
  "especialidad": null,
  "tipo_usuario": "alumno"
}
```

*Si es un docente deben incluir su especialidad:"Biologia" etc, y tipo_usuario :"docente" en el back esta contemplado que puede ser un campo vacio la especialidad por el alumno deben realizar validaciones para que los datos sean los esperados en el BackEnd.*


 ![Base de datos Estructura](https://github.com/acostanoeliacba/IncubadoraBackend/blob/main/assets/Xacademy-Noc-Usuarios.png)




### Seccion Login con la autorizacion de GitHub

 Intrucciones GitHub OAuth2 - Autenticación: 
   1. https://github.com/settings/developers  ,    Crear una nueva OAuth App
   2. Instalar (si se los solicita o surjen errores) : npm install passport passport-github2 connect-session-sequelize

   3. Configurar el archivo .env (en sus carpetas de backend del proyecto con los datos de la app que configuran en git hub)
```Markdown

GITHUB_CLIENT_ID=client_id_de_github  
GITHUB_CLIENT_SECRET=client_secret_de_github
CALLBACK_URL=http://localhost:3000/github/callback

```
   4. Ingresar en homepage url: http://localhost:3000/user
   5. Ingresar en authorization callback url: http://localhost:3000/github/callback


```Markdown
| Método | Descripción                    | URL completa (HTTP)                                             |
| ------ | -------------------------------| ------------------------------------------------------------------------------- |

| GET    | Logearse con Github             | `http://localhost:3000/user/login
| GET    | Cerrar Session con Github       | `http://localhost:3000/user/logout
```
### Seccion Pagos(acceso unicamente si estas autenticado)
```Markdown
| Método | Descripción                      | URL completa (HTTP)                                             |
| ------ | -------------------------------  | -------------------------------------------------------------------------------
| GET    | Obtener todos los pagos          | `http://localhost:3000/user/pagos
| GET    | Obtener los pagos por usuario id | `http://localhost:3000/user/pagos/2
```
