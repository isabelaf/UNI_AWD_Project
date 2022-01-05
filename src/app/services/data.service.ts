import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Details } from '../models/details.model';
import { Announcement } from '../models/announcement.model';
import { Subject } from '../models/subject.model';

@Injectable()
export class DataService {
  constructor(private httpClient: HttpClient) {
  }

  getDetails(): Observable<Details> {
    return this.httpClient.get<Details>('assets/data/details.json');
  }

  getAnnouncements(): Observable<Announcement[]> {
    return this.httpClient.get<Announcement[]>('assets/data/announcements.json');
  }

  getSubject(code: string): Observable<Subject> {
    return this.httpClient.get<Subject>('assets/data/subjects/subject-' + code + '.json');
  }
}
