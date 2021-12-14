import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css']
})
export class FilmDetailsComponent implements OnInit {
  filmDetails: any;
  mapOptions: google.maps.MapOptions = {
    center: { lat: 17.3850, lng: 78.4867 },
    zoom: 14
  };
  marker = {
    position: { lat: 38.9987208, lng: -77.2538699 },
  };
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.filmDetails = this.dataService.selectedFilm;
  }

}
