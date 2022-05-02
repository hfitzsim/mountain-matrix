import { Component, OnInit } from '@angular/core';
import { Mountain } from '../mountain';
import { MountainService } from '../services/mountain.service';

import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-mountains',
  templateUrl: './mountains.component.html',
  styleUrls: ['./mountains.component.css']
})
export class MountainsComponent implements OnInit {
  chevronDown = faChevronDown;
  mountains: Mountain[] = [];

  constructor(private mountainService: MountainService) { }

  ngOnInit(): void {
    this.getMountains();
  }

  getMountains(): void {
    this.mountainService.getMountains()
    .subscribe(mountains => this.mountains = mountains);
  }

}
