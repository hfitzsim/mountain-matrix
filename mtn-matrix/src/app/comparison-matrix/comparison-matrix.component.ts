import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-comparison-matrix',
  templateUrl: './comparison-matrix.component.html',
  styleUrls: ['./comparison-matrix.component.css']
})
export class ComparisonMatrixComponent implements OnInit {

  constructor(
    private location: Location) { }

  ngOnInit(): void {
  }

  goBack(): void {
    this.location.back();
  }

}
