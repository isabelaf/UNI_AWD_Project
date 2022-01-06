import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data.service';
import { Contact } from '../models/details.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {
  contact: Contact = new Contact();

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getContact().subscribe(
      contact => {
        this.contact = contact;
      }
    );
  }
}
