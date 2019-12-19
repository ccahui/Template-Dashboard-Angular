import { Component, OnInit } from '@angular/core';
export declare function init_plugins();
@Component({
  selector: 'app-error404',
  templateUrl: './error404.component.html',
  styleUrls: ['./error404.component.css']
})
export class Error404Component implements OnInit {

  constructor() { }

  ngOnInit() {
    init_plugins();
  }

}
