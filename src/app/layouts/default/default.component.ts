import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  sideBarOpened = false;

  constructor() { }

  ngOnInit() {
  }

  sideBarToggler() {
    this.sideBarOpened = !this.sideBarOpened;
  }

}
