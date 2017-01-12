import { PbVersion } from './../../shared/models/pb-version';
import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { Exam } from './../../shared/models/exam';

@Component({
  selector: 'version-form',
  templateUrl: './version-form.component.html',
  styleUrls: ['./version-form.component.css']
})
export class VersionFormComponent implements OnInit {

  public versionForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  save(model: PbVersion) {
    
  }

}
