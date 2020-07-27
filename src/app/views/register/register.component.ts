import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  private fb: FormBuilder
  constructor() { }
  ngOnInit(): void {
    this.registerForm = this.fb.group({
      category_id: '',
      category_id_2: '',
      city_id: '',
      ward_id: '',
      price_string: '',
      phone: '',
      body: '',
      subject: ''
    });

  }

}
