import { NgModule } from '@angular/core';
import { SymplFormComponent } from './sympl-form.component';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {MbscModule} from '@mobiscroll/angular';
import {QuillModule} from 'ngx-quill';
@NgModule({
  declarations: [SymplFormComponent],
  imports: [
    FormsModule, CommonModule, MbscModule, QuillModule
  ],
  exports: [SymplFormComponent],
  entryComponents: [SymplFormComponent]
})
export class SymplFormModule { }
