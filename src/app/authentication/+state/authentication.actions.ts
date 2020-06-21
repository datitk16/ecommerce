import { createAction, props } from '@ngrx/store';
import { Customer } from '../../shared/models/customer.model';

export const login = createAction(
  '[Authentication] Login',
  props<{ email: string; password: string }>()
);

export const authenticated = createAction(
  '[Authentication] Authenticated'
);

export const loadCustomerProfile = createAction(
  '[Catalog] Load Customer Profile'
);

export const loginFailed = createAction(
  '[Authentication] Login Failure'
);

export const customerProfileLoaded = createAction(
  '[Authentication] Customer Profile Loaded',
  props<{ customer: Customer }>()
);

export const logout = createAction(
  '[Authentication] Logout',
);
