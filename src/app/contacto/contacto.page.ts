import { Component, OnInit } from '@angular/core';
import * as DOMPurify from 'dompurify';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
})
export class ContactoPage implements OnInit {

  constructor() { }

  nombre: string = "";
  apellido: string = "";
  Correo: string = "";
  Telefono: string = "";
  Genero: string = "";
  Ciudad: string = "";
  Banda: string = "";

  ngOnInit() {
  }

  registrarusuario() {
    const sanitizedNombre = DOMPurify.sanitize(this.nombre);
    const sanitizedApellido = DOMPurify.sanitize(this.apellido);
    const sanitizedCorreo = DOMPurify.sanitize(this.Correo);
    const sanitizedTelefono = DOMPurify.sanitize(this.Telefono);
    const sanitizedGenero = DOMPurify.sanitize(this.Genero);
    const sanitizedCiudad = DOMPurify.sanitize(this.Ciudad);
    const sanitizedBanda = DOMPurify.sanitize(this.Banda);

    console.log("nombre", sanitizedNombre);
    console.log("apellido", sanitizedApellido);
    console.log("correo", sanitizedCorreo);
    console.log("telefono", sanitizedTelefono);
    console.log("Genero", sanitizedGenero);
    console.log("Ciudad", sanitizedCiudad);
    console.log("Banda", sanitizedBanda);

    this.limpiarcampos();
  }

  limpiarcampos() {
    this.nombre = "";
    this.apellido = "";
    this.Correo = "";
    this.Telefono = "";
    this.Genero = "";
    this.Ciudad = "";
    this.Banda = "";
  }
}
