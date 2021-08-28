import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  data:any =[{
    "adtitle":"helloworld",
    "adDesc":"Some quick example text to build on the card title and make up the bulk of the card's content."

  },{
    "adtitle":"helloworld",
    "adDesc":"Some quick example text to build on the card title and make up the bulk of the card's content."
  }
];
  constructor() { }

  ngOnInit(): void {
  }

}
