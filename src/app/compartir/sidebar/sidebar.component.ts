import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {
 menus = [{
    titulo: 'Principal',
    icono: 'fa fa-dashboard',
    submenu: [{
            titulo: 'Grafico',
            url: '/grafico'
        },
        {
            titulo: 'Cuenta',
            url: '/cuenta'
        },
    ]
}, {
    titulo: 'Mantenimiento',
    icono: 'fa fa-folder-open',
    submenu: [
        //    { titulo: 'usuarios', url: '/' },
        {
            titulo: 'Usuarios',
            url: '/usuarios'
        },
    ]
}, {
    titulo: 'Material',
    icono: 'fa fa-folder-open',
    submenu: [
        //    { titulo: 'usuarios', url: '/' },
        {
            titulo: 'Usuarios',
            url: '/tablero'
        }, {
            titulo: 'Clientes',
            url: '/clientes'
        }, {
            titulo: 'Productos',
            url: '/productos'
        },

    ]
}, ];

  constructor() { }

  ngOnInit() {
  }

}
