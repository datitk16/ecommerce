import { Component, OnInit } from '@angular/core';
import { navItems } from '../../_nav';
import { AppState } from '../../+state/app.state';
import { Store } from '@ngrx/store';
import { logout } from '../../authentication/+state/authentication.actions';
import { UserService } from '../../services/user.service';
import { CustomerProfile } from '../../shared/models/customerProfile.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnInit {
  public sidebarMinimized = false;
  public navItems = navItems;
  user: CustomerProfile;
  constructor(
    private store: Store<AppState>,
    private userService: UserService

  ) { }

  ngOnInit() {
    this.user = this.userService.getCustomer().user;
  }
  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

  logout() {
    this.store.dispatch(logout());
  }
}
