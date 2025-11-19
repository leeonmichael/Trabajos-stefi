import { Component } from '@angular/core';

@Component({
  selector: 'app-clima',
  standalone: false,
  templateUrl: './clima.html',
  styleUrl: './clima.css',
})
export class Clima {
    temperatura: any = null;  

  obtenerEstadoClima() {
    const temp = Number(this.temperatura);

    if (isNaN(temp)) {
      return 'noValido';
    } else if (temp > 30) {
      return 'caliente';
    } else if (temp >= 15 && temp <= 30) {
      return 'templado';
    } else if (temp < 15) {
      return 'frio';
    }
    return 'noValido';
  }
}


