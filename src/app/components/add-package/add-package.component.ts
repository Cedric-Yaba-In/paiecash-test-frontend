import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PackagesService } from 'src/app/services/packages/packages.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {PACKAGE_PRICE, PACKAGE_PERIOD} from "src/app/entities"

@Component({
  selector: 'app-add-package',
  templateUrl: './add-package.component.html',
  styleUrls: ['./add-package.component.css']
})
export class AddPackageComponent {
  constructor(private packageService:PackagesService,private snackBar: MatSnackBar,public dialogRef: MatDialogRef<AddPackageComponent>,){}
  waitForAPI=false;
  priceList = Object.values(PACKAGE_PRICE);
  periodList = Object.values(PACKAGE_PERIOD);

  formGroup:FormGroup=new FormGroup({
    name:new FormControl("",[Validators.required]),
    period:new FormControl("",[Validators.required,]),
    price:new FormControl("",[Validators.required])
  });

  submitAddControl()
  {
    this.waitForAPI=true;
    this.packageService.addNewPackage(this.formGroup.value)
    .then((result)=>{
      this.waitForAPI=false;
      this.snackBar.open(`Package ajouté avec succes`,"",{
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
