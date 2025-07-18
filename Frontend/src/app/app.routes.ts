import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { AccesoComponent } from './acceso/acceso.component';
import { RegistroComponent } from './registro/registro.component';
import { DashboardProfeComponent } from './dashboard-profe/dashboard-profe.component';
import { FormularioInscripcionComponent } from './formulario-inscripcion/formulario-inscripcion.component';
import { InscripcionesPorCursoComponent } from './inscripciones-por-curso/inscripciones-por-curso.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ListaInscripcionesComponent } from './lista-alumnos/lista-alumnos.component';
import { PagoComponent } from './pago/pago.component';
import { GraciasComponent } from './gracias/gracias.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { CursosDinamicosComponent } from './cursos-dinamicos/cursos-dinamicos.component';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';
import { PagosAdminComponent } from './pagos-admin/pagos-admin.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';



export const routes: Routes = [
    { path: '', component: InicioComponent },
    { path: 'acceso', component: AccesoComponent},
    { path: 'registro', component: RegistroComponent},
    { path: 'dashboard-profe', component: DashboardProfeComponent},
    { path: 'formulario-inscripcion', component: FormularioInscripcionComponent},
    { path: 'inscripciones-por-curso', component: InscripcionesPorCursoComponent},
    { path: 'perfil', component: PerfilComponent},
    { path: 'lista-alumnos', component: ListaInscripcionesComponent},
    { path: 'pago', component: PagoComponent},
    { path: 'gracias/:id_curso', component: GraciasComponent},
    { path: 'curso/contenido/:id', component: ContenidoComponent},
    { path: 'cursoDinamico', component: CursosDinamicosComponent},
    { path: 'publicaciones', component: PublicacionesComponent},
    { path: 'pagos-admin', component: PagosAdminComponent},
    { path: 'navbar', component: NavbarComponent},
    { path: 'footer', component: FooterComponent},
];
