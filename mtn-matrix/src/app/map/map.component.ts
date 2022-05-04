import { Component, OnInit } from '@angular/core';
import { MapService } from '../services/map.service';
import { Mountain } from '../mountain';
import { MountainService } from '../services/mountain.service';
import { Location } from '@angular/common';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  mountains: Mountain[] = [];
  searched: string = "";
  chevronLeft=faChevronLeft;


  constructor(private mapService: MapService, private mountainService: MountainService,
    private location: Location) { }

  ngOnInit(): void {
    this.mapService.createMap();
    this.getMountains();
  }

  getMountains(): void {
    this.mountainService.getMountains()
    .subscribe(mountains => this.mountains = mountains);
  }

  goBack(): void {
    this.location.back();
  }

  addMarker() {
    console.log('add marker for the clicked mountain card');
  }

}
