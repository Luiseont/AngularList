import { Injectable } from '@angular/core';
import { Directory } from 'src/app/directory';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DirectoryService {

  constructor(private http: HttpClient) { }
  
  //Api: string = "http://app-directory.herokuapp.com/Directory";
  Api: string = "http://localhost:8000/api/Directory";

  fetchDirectory(): Observable<any>{
    return this.http.get<Directory>(this.Api);
  }

  AddEntry(data: Directory): Observable<any>{
    let params = data;
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    return this.http.post(this.Api, params, {headers: headers});
  }

}
