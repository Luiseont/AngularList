import { Injectable } from '@angular/core';
import { Directory } from 'src/app/directory';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DirectoryService {

  constructor(private http: HttpClient) { }
  
  //Api: string = "http://app-directory.herokuapp.com/Directory";
  Api: string = "http://127.0.0.1:8000/Directory";

  fetchDirectory(): Observable<any>{
    return this.http.get<Directory>(this.Api);
  }

}
