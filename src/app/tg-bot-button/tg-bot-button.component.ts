import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tg-bot-button',
  templateUrl: './tg-bot-button.component.html',
  styleUrls: ['./tg-bot-button.component.scss']
})
export class TgBotButtonComponent {
  @Input() textBtn: string = '';
  constructor(){

  }
}
