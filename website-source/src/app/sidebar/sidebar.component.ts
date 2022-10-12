import { Component, OnInit } from '@angular/core';

import { internallinks } from './internallinks';
import { externallinks } from './externallinks';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  internallinks = internallinks;
  externallinks = externallinks;

  constructor() { }

  ngOnInit(): void {
  }

}
