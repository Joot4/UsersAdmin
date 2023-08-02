import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/app/enviroments/enviroments';
import { UsersInterface } from '../models/UsersInterface';
import { delay } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ComponentsService {

  private readonly API = `${environment.apiUrl}users`

  constructor(private http:HttpClient) { }

  list(){
    return this.http.get<UsersInterface[]>(this.API).pipe(
      delay(2000)
    )
  }






}
