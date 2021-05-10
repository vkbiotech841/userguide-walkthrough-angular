import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardWalkthroughComponent } from './card-walkthrough.component';

describe('CardWalkthroughComponent', () => {
  let component: CardWalkthroughComponent;
  let fixture: ComponentFixture<CardWalkthroughComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardWalkthroughComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardWalkthroughComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
