import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityFeatureComponent } from './security-feature.component';

describe('SecurityFeaturesComponent', () => {
  let component: SecurityFeatureComponent;
  let fixture: ComponentFixture<SecurityFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecurityFeatureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecurityFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
