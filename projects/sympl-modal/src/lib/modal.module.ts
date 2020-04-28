import { NgModule } from '@angular/core';
import {SymplModalComponent} from './modal.component';
import {SymplModalService} from './modal.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
@NgModule({
  imports: [BrowserAnimationsModule],
  providers: [SymplModalService],
  declarations: [SymplModalComponent],
  exports: [SymplModalComponent],
  entryComponents: [SymplModalComponent]
})
export class SymplModalModule { }
