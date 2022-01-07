import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';

import { NavElement } from '../models/nav-element.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  activeParentElementName: string = null;
  navElements: NavElement[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.initNavElements();

    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(event => (event as NavigationEnd).url)
      )
      .subscribe(path => {
        this.activeParentElementName = this.navElements
        .filter(e => e.children)
        .find(e => e.children.find(c => c.path && c.path === path))?.name;
      });
  }

  private initNavElements(): void {
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
