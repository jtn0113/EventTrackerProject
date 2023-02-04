import { LocationService } from './../../services/location.service';
import { Component, OnInit } from '@angular/core';
import { Location } from 'src/app/models/location';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  locations: Location[] = [];

  selected: null | Location = null;
  editTodo: null | Location = null;

  constructor(private locationService:LocationService){}

  ngOnInit() {
    this.reload();
  }

  reload() {
    this.locationService.index().subscribe({
      next: (locations) => {
        this.locations = locations;
      },
      error: (oof) => {
        console.error('Error loading locations:');
        console.error(oof);
      }
    });
  }

}
