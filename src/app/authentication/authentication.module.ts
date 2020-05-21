import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import {  AuthenticationEffects } from './+state/authentication.effects';
import { EffectsModule } from '@ngrx/effects';
import { reducer } from './+state/authentication.reducer';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('authState', reducer),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([AuthenticationEffects])
  ]
})
export class AuthenticationModule { }
