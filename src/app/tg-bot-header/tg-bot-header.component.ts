import { Component } from '@angular/core';

declare global {
  interface Window {
    Telegram: any;
  }
}

@Component({
  selector: 'app-tg-bot-header',
  templateUrl: './tg-bot-header.component.html',
  styleUrls: ['./tg-bot-header.component.scss']
})
export class TgBotHeaderComponent {
  tg = window.Telegram?.WebApp;
  onClose(){
    this.tg?.close();
  }
}
