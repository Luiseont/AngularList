import { Component, OnInit } from '@angular/core';
import { DirectoryService } from 'src/app/directory.service';
import { Directory } from 'src/app/directory';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  List: Directory;
  constructor(private Directory: DirectoryService) {}

  ngOnInit() {
    this.Directory.fetchDirectory().subscribe(result => { 
        this.List = result;
    }, error => {
       console.log(<any>error);
      });
  }

  reload(){

  }

  submit(form){
     //console.log(form.value);
     this.Directory.AddEntry(form.value).subscribe(result => { 
       $('#modal').modal('hide');
  }, error => {
      console.log(<any>error);
    });
     form.resetForm();
  }

}
