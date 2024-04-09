import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationNurseAddDetailsComponent } from './registration-nurse-add-details.component';

describe('RegistrationNurseAddDetailsComponent', () => {
  let component: RegistrationNurseAddDetailsComponent;
  let fixture: ComponentFixture<RegistrationNurseAddDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrationNurseAddDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistrationNurseAddDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
