import { VersionService } from './version.service';
import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <h2>The versions component page</h2>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./versions.component.css']
})
export class VersionsComponent implements OnInit {



  constructor(private service: VersionService) { }

  ngOnInit() {

  }

}
