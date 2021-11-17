import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Post } from '../posts/data.service';
import { FormUserService } from './form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  // static stuticID = 0
  // myForm!: any;
  myForm: FormGroup;
  user: Post;
  btnSubmitted: boolean;
  constructor(private fb: FormBuilder, private FormUserService: FormUserService) {
  }

  ngOnInit(): void {
    this.createMyForm();
  }

  createMyForm() {
    this.myForm = this.fb.group({
      id: ['', [Validators.required, Validators.min(101)]],
      userId: ['', [Validators.required, Validators.min(11)]],
      title: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
      body: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]]
    })
  }

  userData(): Post {
    return this.user = {
      id: this.id.value,
      userId: this.userId.value,
      title: this.title.value,
      body: this.body.value
    }
  }

  get id() {
    return this.myForm.get('id') as FormControl;
  }
  get userId() {
    return this.myForm.get('userId') as FormControl;
  }
  get title() {
    return this.myForm.get('title') as FormControl;
  }
  get body() {
    return this.myForm.get('body') as FormControl;
  }

  onSubmit() {
    console.log(this.myForm.value);
    this.btnSubmitted = true;
    if (this.myForm.valid) {
      this.FormUserService.addUsers(this.userData())
      this.myForm.reset();
      this.btnSubmitted = false;
    }
  }
}


// onSubmit() {
  //   localStorage.setItem(FormComponent.stuticID.toString(), JSON.stringify(this.myForm.value))
  //   console.log(localStorage.length);
  //   FormComponent.stuticID++;
  // }

  // onSubmit() {
  //   localStorage.setItem('form-data', JSON.stringify(this.myForm.value))
  //   let formValue = JSON.parse(localStorage.getItem('form-data') || '{}');
  //   console.log(localStorage.length);
  //   // FormComponent.stuticID++;
// }

// onFetch() {
  //   for (let i = 0; i <= localStorage.length; i++){
  //     let x = localStorage.key(i);
  //     console.log(x)
  //   }
  // }