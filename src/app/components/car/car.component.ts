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
  brands: Car[] = [];
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
      this.brands = data;
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
    this.securityFeaturesFormArray.push(this.formBuilder.control(selectedSecurityFeature));
    console.log(this.carForm);
  }

  newComfortFeatureAdded(selectComfortFeature: ComfortFeature) {
    this.comfortFeaturesFormArray.push(this.formBuilder.control(selectComfortFeature));
    console.log(this.carForm);
  }

  onSubmit() {
    this.carService.createCarConfiguration(this.carForm.value).subscribe((response) => console.log(response));
  }
}
