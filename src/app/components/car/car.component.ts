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
  maximumNumberOfSecurityFeatures = 1;
  numberOfSelectedSecurityFeatures = 1;

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

  assignSecurityFeatureNumber(numberOfSecurityFeatures: number) {
    this.maximumNumberOfSecurityFeatures = numberOfSecurityFeatures;
  }

  addNewSecurityFeature() {
    if(this.numberOfSelectedSecurityFeatures < this.maximumNumberOfSecurityFeatures) {
      this.securityFeatureRows.push(new SecurityFeature());
      this.numberOfSelectedSecurityFeatures++;
    }
  }

  newSecurityFeatureAdded(selectedSecurityFeature: SecurityFeature) {
    // if (selectedSecurityFeature && selectedSecurityFeature.id && selectedSecurityFeature.id <= this.securityFeatureRows.length ) {
    //   this.securityFeatureRows[selectedSecurityFeature.id - 1].name = selectedSecurityFeature.name;
    //   this.securityFeatureRows[selectedSecurityFeature.id - 1].id = selectedSecurityFeature.id;
    // }
    this.securityFeaturesFormArray.push(this.formBuilder.control(selectedSecurityFeature));
  }

  newComfortFeatureAdded(selectComfortFeature: ComfortFeature) {
    this.comfortFeaturesFormArray.push(this.formBuilder.control(selectComfortFeature));
  }
}
