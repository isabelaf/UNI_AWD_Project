import { Component, OnInit } from '@angular/core';
import { Announcement } from '../models/announcement.model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  announcements: Announcement[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getAnnouncements().subscribe(
      announcements => {
        this.announcements = announcements;
      }
    );
  }
}
