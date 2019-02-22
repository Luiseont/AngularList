import { Injectable } from '@angular/core';
import { Directory } from 'src/app/directory';

@Injectable({
  providedIn: 'root'
})
export class DirectoryService {

  constructor() { }
 
  data: Directory[];

  fetchDirectory(){
    this.data = [
      {
        'rowid':1,
        'name':"Luis",
        'lastname':"Ontivero",
        'phone':4143448714,
        'direction':"Colonia Tovar"
      }
    ]
    return this.data;
  }

}
