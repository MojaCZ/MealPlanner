import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resolve } from '@angular/router';
import { share } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class RecipesAPIService implements Resolve<any> {

  constructor( private http: HttpClient ) { }

  resolve(){
    return this.http.get("assets/recipes_example.json").pipe(share());
  }
}
