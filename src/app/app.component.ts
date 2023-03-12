import { Component } from '@angular/core';

declare global {
  interface Window {
    Telegram: any;
  }
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'telegram-bot-web';
    tg = window.Telegram?.WebApp;

  onClose(){
    this.tg.close();
  }
}
