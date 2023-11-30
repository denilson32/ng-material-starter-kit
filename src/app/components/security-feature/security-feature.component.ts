import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { SecurityFeature } from 'src/app/models/securityFeature';
import { SecurityFeatureService } from 'src/app/services/security-feature.service';

@Component({
  selector: 'app-security-feature',
  templateUrl: './security-feature.component.html',
  styleUrls: ['./security-feature.component.scss']
})
export class SecurityFeatureComponent implements OnInit {
  @Output() selectedSecurityFeature = new EventEmitter<SecurityFeature>();
  @Output() securityFeatureNumber = new EventEmitter<number>();

  securityFeatures: SecurityFeature[] = [];
  constructor(private securityFeatureService: SecurityFeatureService) { }

  ngOnInit(): void {
    this.init();
  }

  init() {
    this.securityFeatureService.getSecurityFeatures().subscribe((data) => {
      this.securityFeatures = [...data]
      this.securityFeatureNumber.emit(this.securityFeatures.length);
    })
  }

  selectSecurityFeature(securityFeature: SecurityFeature) {
    this.selectedSecurityFeature.emit(securityFeature);
  }

}