import { Component, Inject, PLATFORM_ID, AfterViewInit, Renderer2 } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent implements AfterViewInit {

  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router,
    private authService: AuthService
  ) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const elementos = this.document.querySelectorAll('.fade-in');

      const mostrarElemento = (elemento: Element) => {
        const rect = elemento.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          this.renderer.addClass(elemento, 'aparecer');
        }
      };

      const revisarElementos = () => {
        elementos.forEach(el => mostrarElemento(el));

        const navbar = this.document.querySelector('.navbar');
        if (navbar) {
          if (window.scrollY > 50) {
            this.renderer.addClass(navbar, 'scroll-navbar');
          } else {
            this.renderer.removeClass(navbar, 'scroll-navbar');
          }
        }
      };

      revisarElementos();
      window.addEventListener('scroll', revisarElementos);
    }
  }

  irAlAcceso() {
    this.router.navigate(['/acceso']);
  }

  irACarpinteria() {
    this.router.navigate(['/carpinteria']);
  }

  irADiseno() {
    this.router.navigate(['/diseno']);
  }

  irAInformatica() {
    this.router.navigate(['/informatica']);
  }

  irAMecanica() {
    this.router.navigate(['/mecanica']);
  }

  irAOratoria() {
    this.router.navigate(['/oratoria']);
  }

  irAPintura() {
    this.router.navigate(['/pintura']);
  }

  irAAdministracion() {
    this.router.navigate(['/administracion']);
  }

  irACaligrafia() {
    this.router.navigate(['/caligrafia']);
  }

  irAManicuria() {
    this.router.navigate(['/manicuria']);
  }
  cerrarSesion(): void {
    this.authService.logout();       
    this.router.navigate(['/acceso']);
  }

}