import { Component } from '@angular/core';
import { navItems } from '../../_nav';
import { AppState } from '../../+state/app.state';
import { Store } from '@ngrx/store';
import { logout } from '../../authentication/+state/authentication.actions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  public navItems = navItems;
  constructor(
    private store: Store<AppState>,
  ) { }

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

  logout() {
    this.store.dispatch(logout());
  }
}
