import { Store } from '@ngrx/store';
import { AppState } from '../../+state/app.state';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { login, loginFailed, customerProfileLoaded, authenticated, loadCustomerProfile, logout } from './authentication.actions';
import { mergeMap, switchMap, tap, throttleTime } from 'rxjs/operators';
import { of } from 'rxjs';
import Swal from 'sweetalert2';
@Injectable()
export class AuthenticationEffects {

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      mergeMap(({ email, password }) => this.userService.login(email, password)),
      switchMap(customer => {
        if (customer.token) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Đăng nhập thành công!',
            showConfirmButton: false,
            timer: 1500
          });
          this.userService.setCustomer(customer);
          return [
            customerProfileLoaded({ customer }),
            authenticated(),
          ];
        } else {
          return [loginFailed()];
        }
      })
    )
  );

  authenticated$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authenticated),
      tap(() => {
        this.router.navigateByUrl('/dashboard');
      }),
      switchMap(() => [
        loadCustomerProfile(),
      ])
    )
  );

  logout$ = createEffect(() => this.actions$.pipe(
    ofType(logout),
    throttleTime(1000),
    switchMap(() => {
      this.userService.logout();
      return of(null);
    })
  ), { dispatch: false });

  constructor(
    private store: Store<AppState>,
    private actions$: Actions,
    private userService: UserService,
    private router: Router,
  ) { }
}
