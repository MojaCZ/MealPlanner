import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import { env } from '../../../env';
import { Unit, Resource } from './interfaces';

interface ResourcesListItem {
  id: string;
  name: string;
}

@Injectable({
  providedIn: 'root'
})

export class ResourcesService {

  /** array of resources */
  resources: Resource[] = [];

  /** lsit of ALL resources (_id, name) available on database */
  resourcesList: ResourcesListItem[] = [];

  constructor(private http: HttpClient) {
    this.getResourcesList();
  }

  /** get resources from REST API and return observable */
  getResources(): Observable<Resource[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    const resourcesObserver = new Observable( (observer: Observer<Resource[]>) => {
      this.http
      .get<Resource[]>(env.BACKEND_HOST + '/resources/getRange/0-50')
      .subscribe(data => {
        const resources: Resource[] = [];
        for (const resource of data) {
          resources.push(resource);
        }
        this.resources = resources;
        observer.next(resources);
        observer.complete();
      });
    });
    return resourcesObserver;
  }

  getResourcesList(): Observable<ResourcesListItem[]> {
    const resourcesListObserver = new Observable( (observer: Observer<ResourcesListItem[]>) => {
      if (this.resourcesList.length > 0) {
        observer.next(this.resourcesList);
        observer.complete();
      } else {
        this.http
        .get<ResourcesListItem[]>(env.BACKEND_HOST + '/resources/getResourcesList')
        .subscribe(resources => {
          this.resourcesList = resources;
          observer.next(this.resourcesList);
          observer.complete();
        });
      }
    });
    return resourcesListObserver;
  }

  /** get resource by id and return that resoutce
   * @param id id of resource to be returned
   */
  getResourceById(id: string): Observable<Resource> {
    const resourceObserver = new Observable( (observer: Observer<Resource>) => {
      const resource: Resource = this.resources.find(obj => obj._id === id);
      if (resource) {
        observer.next(resource);
        observer.complete();
      } else {
        this.http
        .get<Resource>(env.BACKEND_HOST + '/resources/getById/' + id)
        .subscribe(data => {
          observer.next(data[0]);
          observer.complete();
        });
      }
    });
    return resourceObserver;
  }

}
