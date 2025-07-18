import { Component } from '@angular/core';
import { FormBuilder,  FormGroup, ReactiveFormsModule,  Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { Router,RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth.service'; 

import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, Inject } from '@angular/core';

import { DialogService } from '../services/dialog.service';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,RouterModule, HttpClientModule], 
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})

export class RegistroComponent {

  registroForm: FormGroup;
  registroExitoso: boolean = false;
  mensaje: string = '';
  fotoSeleccionada: File | null = null;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router,
              private dialogService: DialogService,
              private http: HttpClient,
              @Inject(PLATFORM_ID) private platformId: Object
              ) {


    this.registroForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      fechaNacimiento: ['', [Validators.required, this.validarEdad.bind(this)]],
      direccion: ['', Validators.required],
      telefono: ['', [ Validators.required, Validators.pattern(/^[1-9]\d{9}$/)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      dni: ['', [Validators.required, Validators.pattern(/^\d{7,10}$/)]],
      tipo_usuario: ['', Validators.required],
      especialidad: [''],
      foto: [null]  
    });
    this.registroForm.get('tipo_usuario')?.valueChanges.subscribe((valor) => {
      const especialidadControl = this.registroForm.get('especialidad');

      if (valor === 'docente') {
        especialidadControl?.setValidators([Validators.required]);
      } else {
        especialidadControl?.clearValidators();
      }

      especialidadControl?.updateValueAndValidity();
    });
  }
  validarEdad(control: any) {
    const fechaNacimiento = new Date(control.value);

    if (isNaN(fechaNacimiento.getTime())) {
      return { invalidDate: true };
    }

    const edad = this.calcularEdad(fechaNacimiento);
    if (edad < 18) {
      return { menorDeEdad: true };
    }
    return null;
  }

  calcularEdad(fechaNacimiento: Date) {
    const hoy = new Date();
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    const mes = hoy.getMonth();
    if (mes < fechaNacimiento.getMonth() || (mes === fechaNacimiento.getMonth() && hoy.getDate() < fechaNacimiento.getDate())) {
      edad--;
    }
    return edad;
  }

onSubmit() {
  if (this.registroForm.valid) {
    const formValues = this.registroForm.value;
    const formData = new FormData();

    formData.append('nombre', formValues.nombre);
    formData.append('apellido', formValues.apellido);
    formData.append('fecha_nacimiento', formValues.fechaNacimiento);
    formData.append('direccion', formValues.direccion);
    formData.append('telefono', formValues.telefono);
    formData.append('email', formValues.email);
    formData.append('password', formValues.password);
    formData.append('dni', formValues.dni);
    formData.append('tipo_usuario', formValues.tipo_usuario);
    formData.append('especialidad', formValues.especialidad);

    if (this.fotoSeleccionada) {
      formData.append('foto', this.fotoSeleccionada);
      console.log('Foto añadida al formData:', this.fotoSeleccionada);
    }

    this.http.post('http://localhost:3000/user/easy/create', formData).subscribe({
      next: (response) => {
        console.log('Usuario registrado correctamente:', response);
        this.registroExitoso = true;
        this.mensaje = '¡Registro exitoso!';
        this.dialogService.showSuccess('Registro Exitoso.').subscribe(() => { 
          setTimeout(() => this.router.navigate(['/acceso']), 2000);});
      },
      error: (error) => {
        console.error('Error al registrar usuario:', error);
        this.registroExitoso = false;
        this.mensaje = 'Error al registrar usuario. Intenta nuevamente.';
        this.dialogService.showError('Error al registrar usuario. Intenta nuevamente.').subscribe(() => { 
          setTimeout(() => this.router.navigate(['/registro']), 2000);});
      }
    });

    } else {
      console.log('Formulario inválido');
      this.mensaje = 'Formulario inválido. Intenta nuevamente.';
    }
  }

onFileSelected(event: any) {
  console.log('Evento de selección de archivo recibido:', event);

  const file: File = event.target.files[0];
  console.log('Archivo seleccionado:', file);
  
  if (file) {
    const fileType = file.type;
    const maxSize = 2 * 1024 * 1024; // 2 MB

    if (!['image/jpeg', 'image/png', 'image/jpg'].includes(fileType)) {
      this.mensaje = 'Solo se permiten imágenes JPG o PNG';
      this.fotoSeleccionada = null;
      console.log('Tipo de archivo no válido');
      return;
    }

    if (file.size > maxSize) {
      this.mensaje = 'El archivo no debe superar los 2MB';
      this.fotoSeleccionada = null;
      console.log('Archivo demasiado grande');
      return;
    }

    this.fotoSeleccionada = file;
    this.mensaje = '';
   
  } else {
    console.log('No se seleccionó ningún archivo');
  }
}

  irAlAcceso() {
    this.router.navigate(['/acceso']);
  }
  cerrarSesion(): void {
    this.authService.logout();       
    this.router.navigate(['/acceso']);
  }
}
