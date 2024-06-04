import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  username: string= "";
  password: string= "";

  constructor(private router: Router, private animationCtrl: AnimationController) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.playAnimations();
  }

  onSubmit() {
   
    if (this.username && this.password) {
      // Suponiendo que la autenticación es exitosa, navega a la página principal 
      this.router.navigate(['/tabs']);
    } else {
      // Muestra un mensaje de error 
      alert('Por favor, ingrese un usuario y contraseña válidos.');
    }
  }

  registrarse() {
    // Navega a una página de registro
    this.router.navigate(['/tabs/contacto']);
  }

  playAnimations() {
    const titleElement = document.querySelector('.centrar');
    const formElement = document.querySelector('ion-card');

    if (titleElement) {
      const titleAnimation = this.animationCtrl.create()
        .addElement(titleElement)
        .duration(2000)
        .fromTo('opacity', '0', '1')
        .fromTo('transform', 'translateY(-50px)', 'translateY(0)');
      titleAnimation.play();
    }

    if (formElement) {
      const formAnimation = this.animationCtrl.create()
        .addElement(formElement)
        .duration(2000)
        .fromTo('opacity', '0', '1')
        .fromTo('transform', 'translateY(50px)', 'translateY(0)');
      formAnimation.play();
    }
  }
}