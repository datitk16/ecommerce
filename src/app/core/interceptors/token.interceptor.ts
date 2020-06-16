import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

import { Observable } from 'rxjs';
import { UserService } from '../../services/user.service';
import { Utils } from '../utils';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  private jwtHelper = new JwtHelperService();
  constructor(
    private userService: UserService
  ) { }

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token: string = this.userService.getToken;
    // if (!token) {
    //   // Prevent infinite intercept loop!
    //   return next.handle(req);
    // }
    return next.handle(Utils.addValuesToHeader(req, this.userService.getToken));
  }
}
