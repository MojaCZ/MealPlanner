import { AfterViewInit, Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ResourcesTableDataSource } from './resources-datasource';
import { Unit, Resource } from '../interfaces';

// import { ActivatedRoute } from '@angular/router';
import { ResourcesService } from '../resources.service';

@Component({
  selector: 'app-resources-page',
  templateUrl: 'resources-page.component.html',
  styleUrls: ['./resources-page.component.scss']
})
export class ResourcesPageComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Resource>;

  dataSource: ResourcesTableDataSource;
  resourcesArray: any[] = [];
  displayedColumns = ['name', 'carb', 'prot', 'fat', 'fib', 'energy', '_id'];

  constructor(private resourcesService: ResourcesService) { }

  ngOnInit(): void {
    this.dataSource = new ResourcesTableDataSource();

    this.resourcesService.getResources().subscribe(resources => {
      this.dataSource.loadData(resources);
    });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

}
