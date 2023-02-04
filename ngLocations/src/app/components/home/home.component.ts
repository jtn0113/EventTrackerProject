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

  addLocationSelected: boolean = false;
  newLocation = new Location();
  selected: null | Location = null;
  editLocation: null | Location = null;

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

  displayLocation(location: Location) {
    this.selected = location;
  }

  setEditLocation() {
    this.editLocation = Object.assign({}, this.selected);
  }

  displayTable() {
    this.selected = null;
  }

  deleteLocation(id: number) {
    this.locationService.destroy(id).subscribe({
      next: () => {
        this.displayTable();
        this.reload();
      },
      error: (fail) => {
        console.error('HomeComponent.deleteLocation: error deleting:');
        console.error(fail);
      }
    });
  }

  addLocation(location: Location) {
    this.locationService.create(location).subscribe({
      next: (data) => {
        this.newLocation = new Location();
        this.changeAddLocationSelected();
        this.reload();
      },
      error: (nojoy) => {
        console.error('HomeComponent.addLocation: error creating location');
        console.error(nojoy);
      }
    });
  }

  updateLocation(location: Location, goToDetail = true): void {
    this.locationService.update(location).subscribe({
      next: (updateLocation) => {
        if (goToDetail) {
          this.selected = updateLocation;
        } else {
          this.selected = null;
        }
        this.editLocation = null;
        this.reload();
      },
      error: (toobad) => {
        console.error('HomeComponent.updateLocation: error updating');
        console.error(toobad);
      }
    });
  }

  changeAddLocationSelected() {
    this.addLocationSelected = ! this.addLocationSelected;
  }

}
