import { Component, OnInit } from '@angular/core';

declare function init_plugins();

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['../login/login.component.css']
})
export class RegistrarseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  init_plugins();
  }

}
