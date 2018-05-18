import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'filter-check',
  templateUrl: 'filter-check.component.html',
  styleUrls: ['filter-check.component.css']
})
export class FilterCheckComponent implements OnInit {
    myFilter:boolean;
    constructor() { }
    @Input() myCheck:any;
    @Output() filterStateChange = new EventEmitter<boolean>();
      ngOnInit() {
        this.myFilter=false
      }
    checkMyFilter():any{
        this.myFilter=!this.myFilter;
    }
    setMyFilter(item:any){
         item.state=!item.state;
        this.filterStateChange.emit(item);
    }
}

