import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data.service';
import { AppConstants } from '../app.constants';
import { About } from '../models/about.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {
  AppConstants = AppConstants;

  about?: About = null;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getAbout().subscribe(
      about => {
        this.about = about;
      }
    );
  }
}
