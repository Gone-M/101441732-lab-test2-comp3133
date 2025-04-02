import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpacexService } from '../../services/spacex.service';
import { Mission } from '../../models/mission.model';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html'
})
export class MissionDetailsComponent implements OnInit {
  mission?: Mission;

  constructor(private route: ActivatedRoute, private spacexService: SpacexService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.spacexService.getMissionByFlightNumber(id).subscribe(data => this.mission = data);
  }
}