import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Directory } from '../directory';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnChanges {
  @Input() public List: Directory;

  constructor() { }

  ngOnChanges() {
    
  }

}
