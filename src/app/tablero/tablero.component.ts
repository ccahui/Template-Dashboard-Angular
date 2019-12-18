import { Component, OnInit } from '@angular/core';

export declare function init_plugins();

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styles: []
})

export class TableroComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    init_plugins();
  }

}
