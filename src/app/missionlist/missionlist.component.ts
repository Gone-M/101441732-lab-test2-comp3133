import { Component, OnInit } from '@angular/core';
import { SpacexService } from '../../services/spacex.service';
import { Mission } from '../../models/mission.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html'
})
export class MissionListComponent implements OnInit {
  missions: Mission[] = [];

  constructor(private spacexService: SpacexService, private router: Router) {}

  ngOnInit() {
    this.spacexService.getAllMissions().subscribe(data => this.missions = data);
  }

  goToDetails(id: number) {
    this.router.navigate(['/mission', id]);
  }
}