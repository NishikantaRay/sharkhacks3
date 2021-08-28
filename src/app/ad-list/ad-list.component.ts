import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ad-list',
  templateUrl: './ad-list.component.html',
  styleUrls: ['./ad-list.component.css']
})
export class AdListComponent implements OnInit {
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
