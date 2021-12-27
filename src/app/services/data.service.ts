import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Details } from '../models/details.model';
import { GeneralInformation } from '../models/general-information';
import { Announcement } from '../models/announcement';

@Injectable()
export class DataService {
  constructor(private httpClient: HttpClient) {
  }

  getDetails(): Observable<Details> {
    return this.httpClient.get<Details>('assets/data/details.json');
  }

  getGeneralInformation(): Observable<GeneralInformation> {
    return this.httpClient.get<GeneralInformation>('assets/data/general-information.json');
  }

  getAnnouncements(): Observable<Announcement[]> {
    return this.httpClient.get<Announcement[]>('assets/data/announcements.json');
  }
}
