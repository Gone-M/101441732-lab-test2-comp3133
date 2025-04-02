import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MissionListComponent } from './components/missionlist/missionlist.component';
import { MissionDetailsComponent } from './components/missiondetails/missiondetails.component';

const routes: Routes = [
  { path: '', component: MissionListComponent },
  { path: 'mission/:id', component: MissionDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }