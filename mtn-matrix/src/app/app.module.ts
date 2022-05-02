// MODULES
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';

// Angular Material Modules
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatCard, MatCardModule } from '@angular/material/card';

// COMPONENTS
import { AppComponent } from './app.component';
import { MountainDetailComponent } from './mountain-detail/mountain-detail.component';
import { MountainsComponent } from './mountains/mountains.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MapComponent } from './map/map.component';

import { ComparisonMatrixComponent } from './comparison-matrix/comparison-matrix.component';


@NgModule({
  declarations: [
    AppComponent,
    MountainDetailComponent,
    MountainsComponent,
    DashboardComponent,
    MapComponent,
    ComparisonMatrixComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FontAwesomeModule,
    // Material Imports
    MatSidenavModule,
    MatToolbarModule, 
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
