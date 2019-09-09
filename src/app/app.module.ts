import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SymplChatModule} from "../../projects/sympl-chat/src/lib/sympl-chat.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SymplChatModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
