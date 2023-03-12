import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TgBotButtonComponent } from './tg-bot-button.component';

describe('TgBotButtonComponent', () => {
  let component: TgBotButtonComponent;
  let fixture: ComponentFixture<TgBotButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TgBotButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TgBotButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
