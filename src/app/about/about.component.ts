import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data.service';
import { Details } from '../models/details.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {
  details: Details = new Details();

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getDetails().subscribe(
      details => {
        this.details = details;
        this.formatAboutText();
      }
    );
  }

  private formatAboutText(): void {
    this.details.about.text = this.details.about.text.replace(/\r\n/g, '<br>');
  }
}
