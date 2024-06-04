import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import * as moment from 'moment';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
})
export class AgendaPage {
  fechaSeleccionada: string = ''; 
  horaInicio: string | null = null; 
  horaFin: string | null = null; 
  minDate: string;
  maxDate: string;
  horasDisponibles: string[] = [];

  constructor(private alertController: AlertController) {
    // Definir fecha mínima y máxima
    this.minDate = moment().format('YYYY-MM-DD');
    this.maxDate = moment().add(1, 'years').format('YYYY-MM-DD');

    // Generar horas disponibles
    const horaInicio = moment('09:00', 'HH:mm');
    const horaFin = moment('22:00', 'HH:mm');
    while (horaInicio.isBefore(horaFin)) {
      this.horasDisponibles.push(horaInicio.format('HH:mm'));
      horaInicio.add(1, 'hour');
    }
  }

  abrirOpcionesHoraInicio() {
    // Si se selecciona una fecha, mostrar las opciones de hora de inicio
    this.horaInicio = null; // 
    this.horaFin = null; // 
  }

  abrirOpcionesHoraFin() {
    // Si se selecciona la hora de inicio, mostrar las opciones de hora de fin
    this.horaFin = null; 
  }
}
