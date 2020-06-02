import { AfterViewInit, Component, OnInit, Input, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ResourcesTableDataSource } from './resources-datasource';
import { Unit, Resource } from '../interfaces';
import { Observable, Observer } from 'rxjs';
import {FormControl} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';

// import { ActivatedRoute } from '@angular/router';
import { ResourcesService } from '../resources.service';

interface ResourcesListItem {
  id: string;
  name: string;
}

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
  /** form control for select resource while typing */
  myControl = new FormControl();
  resourcesList: ResourcesListItem[] = [];
  filteredOptions: Observable<ResourcesListItem[]>;

  constructor(
    private resourcesService: ResourcesService,
    private cdr: ChangeDetectorRef
    ) { }

  ngOnInit(): void {
    this.dataSource = new ResourcesTableDataSource();

    this.resourcesService.getResources().subscribe(resources => {
      this.dataSource.loadData(resources);
    });

    this.resourcesService.getResourcesList().subscribe(resourcesList => {
      this.resourcesList = resourcesList;
      this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        // map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.resourcesList.slice())
      );
    });

  }

  private _filter(value: string): ResourcesListItem[] {
    const filterValue = value.toLowerCase();
    return this.resourcesList.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }
  
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

}
