import { Component, Input } from '@angular/core';
import { City } from 'src/app/sampleData';


@Component({
  selector: 'app-place-card',
  templateUrl: './place-card.component.html',
  styleUrls: ['./place-card.component.sass']
})
export class PlaceCardComponent {
@Input() sampleData: City[]=[]
}
