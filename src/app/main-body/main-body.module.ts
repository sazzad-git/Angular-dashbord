import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTabsModule } from '@angular/material/tabs';

import { MainBodyRoutingModule } from './main-body-routing.module';
import { MainBodyComponent } from './main-body.component';

@NgModule({
  declarations: [MainBodyComponent],
  imports: [
    CommonModule,
    BrowserModule,
    MainBodyRoutingModule,
    NgApexchartsModule,
    MatSlideToggleModule,
    MatButtonToggleModule,
    MatTabsModule,
  ],
  exports: [MainBodyComponent],
})
export class MainBodyModule {}
