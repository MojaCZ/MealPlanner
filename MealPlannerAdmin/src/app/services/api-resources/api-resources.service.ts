import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { env } from '../../../env';


@Injectable({
  providedIn: 'root'
})

export class ApiResourcesService {

  private api = env.BACKEND_HOST;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
    })
  }

  constructor(private http: HttpClient) { }

  getData(): Observable<any[]> {
    return this.http.get<any[]>(this.api+"/resources/getRange/0-10");
  }

}
