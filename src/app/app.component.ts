import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AddUserAccountComponent } from "./components/add-user-account/add-user-account.component"
import { AddPackageComponent } from "./components/add-package/add-package.component"
import { SubscribeToPackageComponent } from './components/subscribe-to-package/subscribe-to-package.component';
import { AddProductComponent } from './components/add-product/add-product.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Stock';
  constructor(public dialog: MatDialog) {}


  openAddUserModal()
  {
    this.dialog.open(AddUserAccountComponent);
  }

  openAddPackageModal()
  {
    this.dialog.open(AddPackageComponent);
  }

  openAddProductModal()
  {
    this.dialog.open(AddProductComponent);
  }

  openAddSoubscriptionModal()
    {
      this.dialog.open(SubscribeToPackageComponent);
    }
}
