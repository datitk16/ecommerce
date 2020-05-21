import { Customer } from '../../shared/models/customer.model';
import { Action, createReducer, on } from '@ngrx/store';

export interface AuthenticationState {
  isAuthenticated: boolean;
  customer: Customer;
}

const initialState: AuthenticationState = {
  isAuthenticated: false,
  customer: null,
};

const authenticationReducer = createReducer(
  initialState,

);

export function reducer(state: AuthenticationState | undefined, action: Action) {
  return authenticationReducer(state, action);
}

