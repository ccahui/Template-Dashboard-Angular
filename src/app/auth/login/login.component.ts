import { Component, OnInit } from '@angular/core';
/*Funcionalidades y eventos internos */
declare function init_plugins();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    init_plugins();
  }

}
