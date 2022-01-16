import { CarsService } from './../../services/cars.service';
import { Component, OnInit } from '@angular/core';
import {Car} from '../../shared/car';

@Component({
  selector: 'app-new-car',
  templateUrl: './new-car.component.html',
  styleUrls: ['./new-car.component.css'],
  providers: [CarsService]
})
export class NewCarComponent implements OnInit {

  cars: Car[];
  car : Car;
  code : string;
  matricule : string;
  model: string;
  prix : string;
  categorie : string;
  nombre_disponible: number;
  image_url : string;
  description : string;
  title: string;

  constructor(private carsService: CarsService) { }

  ngOnInit(): void {
    this.carsService.getcars()
    .subscribe(cars => 
      this.cars = cars
      );
  }
  addCar(){
    const newCar : Car = {
      code : this.car.code,
      matricule : this.car.matricule,
      model : this.car.model,
      prix : this.car.prix,
      categorie : this.car.categorie,
      nombre_disponible : this.car.nombre_disponible,
      image_url : this.car.image_url,
      description : this.car.description,
      title : this.car.title,
    }
    this.carsService.addCar(newCar)
    .subscribe( car => {
      this.cars.push(car);
    });
  }


}
