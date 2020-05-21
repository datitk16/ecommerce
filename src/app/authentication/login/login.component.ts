import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { AppState } from '../../+state/app.state';
import { login } from '../+state/authentication.actions';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: '',
      password: '',
    });
  }

  onSubmit(value) {
    this.store.dispatch(login({
      email: value.email,
      password: value.password
    }));
  }

}
