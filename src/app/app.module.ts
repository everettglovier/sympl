import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SymplChatModule} from "../../projects/sympl-chat/src/lib/sympl-chat.module";
import {SymplContextModule} from "../../projects/sympl-context/src/lib/sympl-context.module";
import {SymplFormModule} from "../../projects/sympl-form/src/lib/sympl-form.module";
import {SymplSpinnerModule} from "../../projects/sympl-spinner/src/lib/sympl-spinner.module";
import {SymplToggleModule} from "../../projects/sympl-toggle/src/lib/sympl-toggle.module";
import {SymplModalModule} from "../../projects/sympl-modal/src/lib/modal.module";
import {BlockComponent, ColorBlockModule} from "ngx-color/block";
import {ColorSketchModule, SketchComponent} from "ngx-color/sketch";
import {ChromeComponent, ColorChromeModule} from "ngx-color/chrome";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SymplChatModule,
    SymplContextModule,
    SymplFormModule,
    SymplSpinnerModule,
    SymplToggleModule,
    SymplModalModule,
    ColorBlockModule,
    ColorChromeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [BlockComponent, ChromeComponent]
})
export class AppModule { }
