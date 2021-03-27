import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { ProjConstants } from '../constants/proj.const';
import { environment } from './../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DisplayUserService {

  constructor(
    private httpService: HttpClient
  ) { }

  public getUsersData(): Observable<any> {
    return this.httpService.get<any>(environment.urlMapping.PROJ_API + ProjConstants.GET_USER_DETAILS_URL);
  }
}
