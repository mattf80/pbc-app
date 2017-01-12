import { PbVersion } from './../../shared/models/pb-version';
import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { Exam, ExamComponent } from './../../shared/models/exam';

@Component({
  selector: 'version-form',
  templateUrl: './version-form.component.html',
  styleUrls: ['./version-form.component.css']
})
export class VersionFormComponent implements OnInit {

  public versionForm: FormGroup;

  exams: Exam[] = [
    {id:1, name: "KET"},
    {id:2, name: "PET"}
  ]

  components: ExamComponent[] = [
    { id:1, name: "Reading & Listening" },
    { id:2, name: "Writing" }
  ]

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.versionForm = this.fb.group({
      exam: ['', Validators.required],
      examComponent: [''],
      versionName: ['foo'],
      isCurrent: [true]
    });
  }

  onExamComponentChange(){
    console.log(this.versionForm.value);
  }

  save(model: PbVersion) {
    console.log(model);
  }

}
