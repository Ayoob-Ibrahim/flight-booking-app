import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FlightsComponent } from './flights.component';
import { FlightcompComponent } from '../components/flightcomp/flightcomp.component';
 
//comment for generating module 
//ng generate module flight

//TO ASSOCIATE THE NEW COMPONENT WITH THIS MODULE TO USE THIS CLI
//  ng g c flights --module=flights

//to avoid selector prefix while doing component generation
//ng g c flights --module=flights --p=false

@NgModule({
  declarations: [FlightsComponent,FlightcompComponent     
  ],
  imports: [
    CommonModule
  ],
  exports:[
    FlightcompComponent
  ]
})
export class FlightsModule { }
