import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AddUserAccountComponent } from "./components/add-user-account/add-user-account.component"
import { AddPackageComponent } from "./components/add-package/add-package.component"
import { SubscribeToPackageComponent } from './components/subscribe-to-package/subscribe-to-package.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  constructor(public dialog: MatDialog) {}


  openAddUserModal()
  {
    this.dialog.open(AddUserAccountComponent);
  }

  openAddPackageModal()
  {
    this.dialog.open(AddPackageComponent);
  }

  openAddSoubscriptionModal()
    {
      this.dialog.open(SubscribeToPackageComponent);
    }
}
