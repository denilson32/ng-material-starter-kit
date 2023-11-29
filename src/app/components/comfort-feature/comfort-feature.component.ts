import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ComfortFeature } from 'src/app/models/comfortFeature';
import { ComfortFeatureService } from 'src/app/services/comfort-feature.service';

@Component({
  selector: 'app-comfort-feature',
  templateUrl: './comfort-feature.component.html',
  styleUrls: ['./comfort-feature.component.scss']
})
export class ComfortFeatureComponent implements OnInit {
  @Output() selectedComfortFeature = new EventEmitter<ComfortFeature>();
  comfortFeatures: ComfortFeature[] = [];

  constructor(private comfortFeatureService: ComfortFeatureService) { }

  ngOnInit(): void {
    this.init();
  }

  init() {
    this.comfortFeatureService.getComfortFeatures().subscribe((data) => this.comfortFeatures = [...data])
  }

  selectComfortFeature(comfortFeature: ComfortFeature) {
    this.selectedComfortFeature.emit(comfortFeature);
  }
}
