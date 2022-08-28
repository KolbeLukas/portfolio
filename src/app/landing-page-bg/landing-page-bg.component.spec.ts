import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageBgComponent } from './landing-page-bg.component';

describe('LandingPageBgComponent', () => {
  let component: LandingPageBgComponent;
  let fixture: ComponentFixture<LandingPageBgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingPageBgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingPageBgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
