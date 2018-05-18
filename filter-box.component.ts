import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
@Component({
  selector: 'fil-ne-panel',
  templateUrl: 'fil-ne-panel.component.html',
  styleUrls: ['fil-ne-panel.component.css']
})
export class FilterBoxComponent implements OnInit {
        public countItem:any;
         countItemState:any;
    constructor() {}
        ngOnInit() {
        this.countItem=[
                {fliterName:"userLabel",state:true},
                {fliterName:"neFamily",state:true},
                {fliterName:"type",state:true}
                ]
        this.countItemState={
                    "userLabel":true,
                    "neFamily":true,
                    "type":true
                }
             }
        setMyFilterStyle(data:any):void{
            this.countItemState[data["fliterName"]]=data.state;
        }
}

