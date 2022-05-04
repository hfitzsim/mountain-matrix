import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getResortList();

    this.api.getSnowReport();
  }

}
