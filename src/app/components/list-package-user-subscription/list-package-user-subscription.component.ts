import { Component } from '@angular/core';
import { Souscription } from 'src/app/entities';
import { PackageSouscriptionService } from 'src/app/services/package-souscription/package-souscription.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-list-package-user-subscription',
  templateUrl: './list-package-user-subscription.component.html',
  styleUrls: ['./list-package-user-subscription.component.css']
})
export class ListPackageUserSubscriptionComponent {
    dataSource:Souscription[]=[]
    displayedColumns:string[]=["name","period","price"]
    constructor(private packageSouscriptionService:PackageSouscriptionService,public dialog: MatDialog){}
    
    ngOnInit()
    {
      this.packageSouscriptionService.souscriptionData$.subscribe((data)=>{
        this.dataSource=[...data]
      })
    }

    
}
