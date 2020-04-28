import { NgModule } from '@angular/core';
import { SymplSpinnerComponent } from './sympl-spinner.component';
import {CommonModule} from "@angular/common";



@NgModule({
  declarations: [SymplSpinnerComponent],
  imports: [ CommonModule],
  exports: [SymplSpinnerComponent],
  entryComponents: [SymplSpinnerComponent]
})
export class SymplSpinnerModule { }
