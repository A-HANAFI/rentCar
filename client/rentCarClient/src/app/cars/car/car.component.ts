import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   image = 'https://bo.ucar.fr/Medias/Images/Vehicules/U/Location-Renault-Twingo.png'

}
