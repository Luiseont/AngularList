import { Injectable } from '@angular/core';
import { Directory } from 'src/app/directory';

@Injectable({
  providedIn: 'root'
})
export class DirectoryService {

  constructor() { }
  
  Api: string = "http://app-directory.herokuapp.com/";
  data: Directory[];

  fetchDirectory(){
    this.data = [
      {
        'rowid':1,
        'name':"Luis",
        'lastname':"Ontivero",
        'phone':4143448714,
        'direction':"Colonia Tovar"
      },
      {
        'rowid':2,
        'name':"Dollysabel ",
        'lastname':"Urbina",
        'phone':4120375387,
        'direction':"Colonia Tovar"
      }
    ]
    return this.data;
  }

}
