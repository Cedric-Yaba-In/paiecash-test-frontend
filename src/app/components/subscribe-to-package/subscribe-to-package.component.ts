import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PACKAGE_PRICE, PACKAGE_PERIOD, User, Package } from 'src/app/entities';
import { PackagesService } from 'src/app/services/packages/packages.service';
import { AddPackageComponent } from '../add-package/add-package.component';
import { UsersService } from 'src/app/services/users/users.service';
import { PackageSouscriptionService } from 'src/app/services/package-souscription/package-souscription.service';

@Component({
  selector: 'app-subscribe-to-package',
  templateUrl: './subscribe-to-package.component.html',
  styleUrls: ['./subscribe-to-package.component.css']
})
export class SubscribeToPackageComponent {
  
  users:User[]=[]
  packages:Package[]=[]
  waitForAPI=false;

  formGroup:FormGroup=new FormGroup({
    userId:new FormControl(0,[Validators.min(1)]),
    packageId:new FormControl(0,[Validators.min(1),]),
  });

  constructor(private packageSouscriptionService:PackageSouscriptionService,private usersService:UsersService, private packageService:PackagesService,private snackBar: MatSnackBar,public dialogRef: MatDialogRef<AddPackageComponent>,){
    this.usersService.userData$.subscribe((data)=>this.users=[...data])
    this.packageService.PackageData$.subscribe((data)=>this.packages=[...data])
  }

  submitAddControl()
  {
    this.waitForAPI=true;
    this.packageSouscriptionService.addNewSouscription(this.formGroup.value)
    .then((result)=>{
      this.waitForAPI=false;
      this.snackBar.open(`Souscription ajouté avec succes`,"",{
        horizontalPosition: "right",
        verticalPosition: "top",
        duration: 5000,
      })
      this.dialogRef.close()
    }).catch((error)=>{
      this.waitForAPI=false;
      this.snackBar.open(`Erreur: ${error}`,"",{
        horizontalPosition: "right",
        verticalPosition: "top",
        duration: 5000,
      })
    })
  }
}
