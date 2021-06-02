import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  exampleForm = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl()
  });

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {}
  createForm() {
    this.exampleForm = this.fb.group({
      firstName: '',
      lastName: ''
    });
    console.log(this.exampleForm.value);
  }
}
