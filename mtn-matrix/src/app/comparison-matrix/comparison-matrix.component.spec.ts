import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparisonMatrixComponent } from './comparison-matrix.component';

describe('ComparisonMatrixComponent', () => {
  let component: ComparisonMatrixComponent;
  let fixture: ComponentFixture<ComparisonMatrixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComparisonMatrixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparisonMatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
