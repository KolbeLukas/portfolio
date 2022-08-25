import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowAnimationComponent } from './arrow-animation.component';

describe('ArrowAnimationComponent', () => {
  let component: ArrowAnimationComponent;
  let fixture: ComponentFixture<ArrowAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrowAnimationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrowAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
