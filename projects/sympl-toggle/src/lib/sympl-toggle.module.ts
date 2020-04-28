import { NgModule } from '@angular/core';
import { SymplToggleComponent } from './sympl-toggle.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [SymplToggleComponent],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [SymplToggleComponent]
})
export class SymplToggleModule { }
