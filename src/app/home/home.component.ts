import { Component, OnInit } from '@angular/core';
import { Announcement } from '../models/announcement';
import { GeneralInformation } from '../models/general-information';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  generalInformation: GeneralInformation = new GeneralInformation();
  announcements: Announcement[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getGeneralInformation().subscribe(
      generalInformation => {
        this.generalInformation = generalInformation;
      }
    );

    this.dataService.getAnnouncements().subscribe(
      announcements => {
        this.announcements = announcements;
      }
    );
  }
}
