import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  static stuticID = 0
  myForm!: any
  constructor() {
  }

  ngOnInit(): void {
   this.myForm = new FormGroup({
     id: new FormControl(''),
     userId: new FormControl(''),
     title: new FormControl(''),
     body: new FormControl('')
   })
  }

  onSubmit() {
    localStorage.setItem(FormComponent.stuticID.toString(), JSON.stringify(this.myForm.value))
    console.log(localStorage.length);
    FormComponent.stuticID++;
  }

}
