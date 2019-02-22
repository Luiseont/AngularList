import { Component, OnInit } from '@angular/core';
import { DirectoryService } from 'src/app/directory.service';
import { Directory } from 'src/app/directory';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  List: Directory[];
  constructor(private Directory: DirectoryService) {}

  ngOnInit() {
    this.List = this.Directory.fetchDirectory();
  }

}
