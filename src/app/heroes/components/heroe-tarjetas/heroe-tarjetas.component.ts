import { Component, Input } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-heroe-tarjetas',
  templateUrl: './heroe-tarjetas.component.html',
  styles: [`
    mat-card{
      margin: 10px;
    }
  `]
})
export class HeroeTarjetasComponent {

    @Input() heroe!: Heroe;

}
