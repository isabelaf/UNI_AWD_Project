import { Component, OnInit } from '@angular/core';

import { NavElement } from '../models/nav-element.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  navElements: NavElement[] = [];

  ngOnInit(): void {
    this.navElements = [
      {
        path: '/home',
        name: 'Home'
      },
      {
        path: '/about',
        name: 'About'
      },
      {
        name: 'Teaching',
        children: [
          {
            path: '/subject/oop',
            name: 'Object-Oriented Programming'
          },
          {
            path: '/subject/web',
            name: 'Web Programming'
          }
        ]
      },
      {
        path: '/contact',
        name: 'Contact'
      }
    ];
  }
}
