import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatDatepickerModule,MatNativeDateModule} from '@angular/material';

import { AppComponent } from './app.component';
import { DatepickerOverviewExample } from './datepicker.component';



@NgModule({
  declarations: [
    AppComponent,
    DatepickerOverviewExample
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    FormsModule,
    MatButtonModule, MatCheckboxModule, MatDatepickerModule,MatNativeDateModule   
  ],
  exports: [],
  bootstrap: [
    AppComponent,
    DatepickerOverviewExample
  ]
})
export class AppModule { }
