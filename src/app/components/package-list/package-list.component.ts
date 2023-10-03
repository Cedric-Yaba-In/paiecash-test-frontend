import { Component } from '@angular/core';
import { Package } from 'src/app/entities';
import { PackagesService } from 'src/app/services/packages/packages.service';

@Component({
  selector: 'app-package-list',
  templateUrl: './package-list.component.html',
  styleUrls: ['./package-list.component.css']
})
export class PackageListComponent {
  dataSource:Package[]=[]
  displayedColumns:string[]=["name","period","price"]
  constructor(private PackageService:PackagesService){}
  
  ngOnInit()
  {
    this.PackageService.PackageData$.subscribe((data)=>this.dataSource=data)
  }

}
