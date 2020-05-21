
import { createSelector } from '@ngrx/store';
import { AppState } from './app.state';
import { AuthenticationState } from '../authentication/+state/authentication.reducer';

export const selectAuthState = (state: AppState) => state.authState;

export const selectAuthenticationState = createSelector(
    selectAuthState,
    (state: AuthenticationState) => state
);
