import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFormComponent } from '../components/search-form/search-form.component';

//cli for creating and associating the components withb shared module and declare in declaration module and export section


@NgModule({
  declarations: [
    SearchFormComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SearchFormComponent
  ]
})
export class SharedModuleModule { }
