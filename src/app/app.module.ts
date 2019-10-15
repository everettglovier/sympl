import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SymplChatModule} from "../../projects/sympl-chat/src/lib/sympl-chat.module";
import {SymplContextModule} from "../../projects/sympl-context/src/lib/sympl-context.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SymplChatModule,
    SymplContextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
