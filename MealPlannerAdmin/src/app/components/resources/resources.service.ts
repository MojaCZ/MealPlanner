import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import { env } from '../../../env';
import { Unit, Resource } from './interfaces';


@Injectable({
  providedIn: 'root'
})

export class ResourcesService {

  /** array of resources */
  resources: Resource[] = [];

  constructor(private http: HttpClient) {
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

  /** get resource by id and return that resoutce
   * @param id id of resource to be returned
   */
  getResourceById(id: string): Resource {
    console.log(this.resources, id);
    const resource = this.resources.find(obj => obj._id === id);
    return resource;
  }

}
