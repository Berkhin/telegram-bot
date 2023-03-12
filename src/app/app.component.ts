import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  title = 'telegram-bot-web';
  tg = window.Telegram?.WebApp;

  ngOnInit(): void {
    this.tg?.ready();
  }
}
