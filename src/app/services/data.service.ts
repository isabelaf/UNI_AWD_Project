import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Contact } from '../models/details.model';
import { Announcement } from '../models/announcement.model';
import { Subject } from '../models/subject.model';
import { About } from '../models/about.model';

@Injectable()
export class DataService {
  constructor(private httpClient: HttpClient) {
  }

  getContact(): Observable<Contact> {
    return this.httpClient.get<Contact>('./assets/data/contact.json');
  }

  getAbout(): Observable<About> {
    return this.httpClient.get<About>('./assets/data/about.json');
  }

  getAnnouncements(): Observable<Announcement[]> {
    return this.httpClient.get<Announcement[]>('./assets/data/announcements.json');
  }

  getSubject(code: string): Observable<Subject> {
    return this.httpClient.get<Subject>('./assets/data/subjects/subject-' + code + '.json');
  }
}
