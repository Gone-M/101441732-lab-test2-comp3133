import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mission } from '../models/mission.model';

@Injectable({ providedIn: 'root' })
export class SpacexService {
  private baseURL = 'https://api.spacexdata.com/v3/launches';

  constructor(private http: HttpClient) {}

  getAllMissions(): Observable<Mission[]> {
    return this.http.get<Mission[]>(this.baseURL);
  }

  getMissionByFlightNumber(id: number): Observable<Mission> {
    return this.http.get<Mission>(`${this.baseURL}/${id}`);
  }

  getMissionsByYear(year: string): Observable<Mission[]> {
    return this.http.get<Mission[]>(`${this.baseURL}?launch_year=${year}`);
  }
}