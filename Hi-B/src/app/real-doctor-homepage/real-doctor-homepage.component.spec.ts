import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealDoctorHomepageComponent } from './real-doctor-homepage.component';

describe('RealDoctorHomepageComponent', () => {
  let component: RealDoctorHomepageComponent;
  let fixture: ComponentFixture<RealDoctorHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RealDoctorHomepageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RealDoctorHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
