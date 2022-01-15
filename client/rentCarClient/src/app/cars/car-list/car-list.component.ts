import { Component, OnInit } from '@angular/core';
import {CarsService} from '../../services/cars.service';
import {Car} from 'src/app/shared/car';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css'],
  providers:[CarsService]
})
export class CarListComponent implements OnInit {

  cars : Car[];
  car : Car;

  constructor(private carsService: CarsService) { }

  ngOnInit(): void {
    this.carsService.getcars()
      .subscribe(
        cars => this.cars = cars
      );
  }

}
