import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComfortFeatureComponent } from './comfort-feature.component';

describe('ComfortFeatureComponent', () => {
  let component: ComfortFeatureComponent;
  let fixture: ComponentFixture<ComfortFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComfortFeatureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComfortFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
