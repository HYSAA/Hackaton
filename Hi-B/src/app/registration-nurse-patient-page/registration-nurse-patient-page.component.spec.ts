import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationNursePatientPageComponent } from './registration-nurse-patient-page.component';

describe('RegistrationNursePatientPageComponent', () => {
  let component: RegistrationNursePatientPageComponent;
  let fixture: ComponentFixture<RegistrationNursePatientPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrationNursePatientPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistrationNursePatientPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
