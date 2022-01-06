import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { Subject } from '../models/subject.model';
import { AppConstants } from '../app.constants';
import { Announcement } from '../models/announcement.model';

@Component({
  selector: 'app-teaching-subject',
  templateUrl: './teaching-subject.component.html'
})
export class TeachingSubjectComponent implements OnInit {
  AppConstants = AppConstants;
  subject: Subject = new Subject();
  announcements: Announcement[] = [];

  constructor(private dataService: DataService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.init(params.code);
    });
  }

  private init(subjectCode: string): void {
    const annountcementsToggle = document.getElementById('buttonAnnouncementsToggle');
    if (annountcementsToggle.attributes.getNamedItem('aria-expanded').value === 'false')
    annountcementsToggle.click();

    this.dataService.getSubject(subjectCode).subscribe(
      subject => {
        this.subject = subject;
      }
    );

    this.dataService.getAnnouncements(subjectCode).subscribe(
      announcements => {
        this.announcements = announcements.sort((a1, a2) => (-1) * (new Date(a1.date).getTime() - new Date(a2.date).getTime()));
      }
    );
  }
}
