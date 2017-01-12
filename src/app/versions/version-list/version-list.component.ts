import { VersionService } from './../version.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-version-list',
  templateUrl: './version-list.component.html',
  styleUrls: ['./version-list.component.css']
})
export class VersionListComponent implements OnInit {

    versions: any[]

  constructor(private service: VersionService) { }

  ngOnInit() {
        this.service.getVersions()
      .subscribe(data => {
        this.versions = data;
        console.log(this.versions);
      }) 
  }

}
