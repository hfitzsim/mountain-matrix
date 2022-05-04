import { Component, OnInit } from '@angular/core';
import { MapService } from '../services/map.service';
import { Mountain } from '../mountain';
import { MountainService } from '../services/mountain.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  mountains: Mountain[] = [];
  panelOpenState = false;


  constructor(private mapService: MapService, private mountainService: MountainService) { }

  ngOnInit(): void {
    this.mapService.createMap();
    this.getMountains();
  }

  getMountains(): void {
    this.mountainService.getMountains()
    .subscribe(mountains => this.mountains = mountains.slice(0,10));
  }

}
