import { NgModule } from '@angular/core';
import { SymplContextComponent } from './sympl-context.component';
import {SymplContextService} from './sympl-context.service';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SymplContextListComponent} from './sympl-context-list.component';
import {SymplTooltipDirective} from './sympl-tooltip.directive';
import {SymplTooltipComponent} from "./sympl-tooltip.component";
@NgModule({
  declarations: [SymplContextComponent, SymplContextListComponent, SymplTooltipDirective, SymplTooltipComponent],
  providers: [ SymplContextService ],
  imports: [CommonModule, BrowserModule, BrowserAnimationsModule],
  exports: [SymplContextComponent, SymplContextListComponent, SymplTooltipDirective, SymplTooltipComponent],
  entryComponents: [SymplContextComponent, SymplContextListComponent, SymplTooltipComponent]
})
export class SymplContextModule { }
