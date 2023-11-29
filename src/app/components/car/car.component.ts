import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car.service';
import { Car } from 'src/app/models/car';
import { SecurityFeature } from 'src/app/models/securityFeature';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  FormArray,
} from '@angular/forms';
import { ComfortFeature } from 'src/app/models/comfortFeature';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  securityFeatureRows: SecurityFeature[] = [new SecurityFeature()];

  carForm: FormGroup = new FormGroup({
    model: new FormControl(''),
    description: new FormControl(''),
    brand: new FormControl(''),
    securityFeatures: new FormControl(''),
    comfortFeatures: new FormControl('')
  })

  constructor(private formBuilder: FormBuilder, private carService: CarService) { }

  ngOnInit(): void {
    this.buildFormGroup();
    this.init();
  }
  init() {
    this.carService.getBrands().subscribe((data) => {
      this.cars = data;
    }
    );
  }
  buildFormGroup() {
    this.carForm = this.formBuilder.group({
      model: [''],
      description: [''],
      brand: [''],
      securityFeatures: this.formBuilder.array([]),
      comfortFeatures: this.formBuilder.array([])
    })
  }

  get securityFeaturesFormArray() {
    return this.carForm.get('securityFeatures') as FormArray;
  }

  get comfortFeaturesFormArray() {
    return this.carForm.get('comfortFeatures') as FormArray;
  }

  addNewSecurityFeature() {
    this.securityFeatureRows.push(new SecurityFeature());
  }

  newSecurityFeatureAdded(selectedSecurityFeature: SecurityFeature) {
    this.securityFeaturesFormArray.push(this.formBuilder.control(selectedSecurityFeature));
    console.log(this.carForm);
  }

  newComfortFeatureAdded(selectComfortFeature: ComfortFeature) {
    this.comfortFeaturesFormArray.push(this.formBuilder.control(selectComfortFeature));
    console.log(this.carForm);
  }
}
