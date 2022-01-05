import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { Subject } from '../models/subject.model';
import { AppConstants } from '../app.constants';

@Component({
  selector: 'app-teaching-subject',
  templateUrl: './teaching-subject.component.html'
})
export class TeachingSubjectComponent implements OnInit {
  AppConstants = AppConstants;
  subject: Subject = new Subject();

  constructor(private dataService: DataService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.init(params.code);
    });
  }

  private init(subjectCode: string): void {
    this.dataService.getSubject(subjectCode).subscribe(
      subject => {
        this.subject = subject;
      }
    );
  }
}
