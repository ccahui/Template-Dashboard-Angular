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
            url: '/'
        },
        {
            titulo: 'Ajustes de Cuenta',
            url: '/'
        },
    ]
}, {
    titulo: 'Mantenimiento',
    icono: 'fa fa-folder-open',
    submenu: [
        //    { titulo: 'usuarios', url: '/' },
        {
            titulo: 'Usuarios',
            url: '/'
        },
    ]
}, {
    titulo: 'Material',
    icono: 'fa fa-folder-open',
    submenu: [
        //    { titulo: 'usuarios', url: '/' },
        {
            titulo: 'Usuarios',
            url: '/'
        }, {
            titulo: 'Clientes',
            url: '/'
        }, {
            titulo: 'Productos',
            url: '/'
        },

    ]
}, ];

  constructor() { }

  ngOnInit() {
  }

}
