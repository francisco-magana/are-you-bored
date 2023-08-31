import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { activity } from "../../types";


@Injectable({
  providedIn: 'root'
})
export class BoredService {

  constructor(private http: HttpClient) { }
  base_api: string = 'https://www.boredapi.com/api';

  public getActivity(): Observable<activity> {
    return this.http.get<activity>(`${this.base_api}/activity`);
  }

}
