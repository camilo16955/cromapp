import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
})
export class ContactoPage implements OnInit {

  constructor() { }

  nombre    : string="";
  apellido  : string="";
  Correo    : string="";
  Telefono  : string="";
  Genero    : string="";
  Ciudad    : string="";
  Banda     : string="";

  ngOnInit() {
  }

  registrarusuario(){
    console.log("nombre"  ,   this.nombre);
    console.log("apellido", this.apellido);
    console.log("correo"  ,   this.Correo);
    console.log("telefono", this.Telefono);
    console.log("Genero"  ,   this.Genero);
    console.log("Ciudad"  ,   this.Ciudad);
    console.log("Banda"   ,    this.Banda);

    this.limpiarcampos();
  }
limpiarcampos(){
  this.nombre   ="";
  this.apellido ="";
  this.Correo   ="";
  this.Telefono ="";
  this.Genero   ="";
  this.Ciudad   ="";
  this.Banda    ="";
}


}
