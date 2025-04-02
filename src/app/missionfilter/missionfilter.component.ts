import { Component } from '@angular/core';
import { SpacexService } from '../../services/spacex.service';
import { Mission } from '../../models/mission.model';

@Component({
  selector: 'app-missionfilter',
  templateUrl: './missionfilter.component.html'
})
export class MissionFilterComponent {
  year = '';
  missions: Mission[] = [];

  constructor(private spacexService: SpacexService) {}

  filterByYear() {
    this.spacexService.getMissionsByYear(this.year).subscribe(data => this.missions = data);
  }
}