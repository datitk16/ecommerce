import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountComponent } from './account.component';
import { ProductsComponent } from './products.component';
import { UsersComponent } from './users.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Users'
    },
    children: [
      {
        path: '',
        redirectTo: 'user'
      },
      {
        path: 'verify-account',
        component: AccountComponent,
        data: {
          title: 'Veryfy Account'
        }
      },
      {
        path: 'verify-product',
        component: ProductsComponent,
        data: {
          title: 'Verifyproduct'
        }
      },
      {
        path: 'user',
        component: UsersComponent,
        data: {
          title: 'User'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ButtonsRoutingModule {}
