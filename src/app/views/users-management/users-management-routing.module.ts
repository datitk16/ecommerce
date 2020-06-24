import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountComponent } from './account.component';
import { ProductsComponent } from './products.component';
import { UsersComponent } from './users.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Người dùng'
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
          title: 'Xác thực tài khoản'
        }
      },
      {
        path: 'verify-product',
        component: ProductsComponent,
        data: {
          title: 'Xác thực sản phẩm'
        }
      },
      {
        path: 'user',
        component: UsersComponent,
        data: {
          title: 'Danh sách người dùng'
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
