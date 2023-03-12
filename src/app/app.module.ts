import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TgBotButtonComponent } from './tg-bot-button/tg-bot-button.component';
import { TgBotHeaderComponent } from './tg-bot-header/tg-bot-header.component';

@NgModule({
  declarations: [
    AppComponent,
    TgBotButtonComponent,
    TgBotHeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
