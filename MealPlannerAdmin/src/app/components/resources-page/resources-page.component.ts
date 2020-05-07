import { AfterViewInit, Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ResourcesTableDataSource, ResourcesTableItem } from './resources-datasource'

// import { ActivatedRoute } from '@angular/router';
import { ApiResourcesService } from '../../services/api-resources/api-resources.service'

@Component({
  selector: 'app-resources-page',
  templateUrl: 'resources-page.component.html',
  styleUrls: ['./resources-page.component.scss']
})
export class ResourcesPageComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<ResourcesTableItem>;

  dataSource: ResourcesTableDataSource;
  resourcesArray: any[] = [];
  displayedColumns = ["name", "carb", "prot", "fat", "fib", "energy", "units", "allergens", "category"]

  constructor(private api: ApiResourcesService) { }

  ngOnInit(): void {
    this.dataSource = new ResourcesTableDataSource()
    this.api.getData().subscribe((res: any[])=>{
      console.log(res)
      this.dataSource.loadData(res)
      this.resourcesArray = res;
    })
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }



}
