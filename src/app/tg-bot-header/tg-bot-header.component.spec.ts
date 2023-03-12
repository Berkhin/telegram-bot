import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TgBotHeaderComponent } from './tg-bot-header.component';

describe('TgBotHeaderComponent', () => {
  let component: TgBotHeaderComponent;
  let fixture: ComponentFixture<TgBotHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TgBotHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TgBotHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
