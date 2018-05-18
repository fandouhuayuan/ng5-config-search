import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
@Component({
  selector: 'fil-ne-panel',
  templateUrl: 'fil-ne-panel.component.html',
  styleUrls: ['fil-ne-panel.component.css']
})
export class FilNePanelComponent implements OnInit {
        public countItem:any;
         countItemState:any;
    constructor() {}
        ngOnInit() {
        this.countItem=[
                {fliterName:"userLabel",state:true},
                {fliterName:"neFamily",state:true},
                {fliterName:"type",state:true},
                {fliterName:"maintenanceState",state:true},
                {fliterName:"supervisionState",state:true},
                {fliterName: "operationState",state:true},
                {fliterName:"communicationState",state:true},
                {fliterName: "alarmState",state:true},
                {fliterName:"PMstroy",state:true},
                {fliterName:"tag",state:true}
                ]
        this.countItemState={
                    "userLabel":true,
                    "neFamily":true,
                    "type":true,
                    "maintenanceState":true,
                    "supervisionState":true,
                    "operationState":true,
                    "communicationState":true,
                    "alarmState":true,
                    "PMstroy":true,
                    "tag":true,
                }
             }
        setMyFilterStyle(data:any):void{
            this.countItemState[data["fliterName"]]=data.state;
        }
}

