import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicWalkthroughComponent } from './basic-walkthrough.component';

describe('BasicWalkthroughComponent', () => {
  let component: BasicWalkthroughComponent;
  let fixture: ComponentFixture<BasicWalkthroughComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicWalkthroughComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicWalkthroughComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
