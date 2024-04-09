import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorViewPatientComponent } from './doctor-view-patient.component';

describe('DoctorViewPatientComponent', () => {
  let component: DoctorViewPatientComponent;
  let fixture: ComponentFixture<DoctorViewPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoctorViewPatientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoctorViewPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
