/**
 * Created by jake_ on 10/7/2017.
 */


import {AppComponent} from "./app.component";
import {CajeroComponent} from "./cajero/cajero.component";
import {ModuleWithProviders} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AdministradorComponent} from "./administrador/administrador.component";



          export const routes: Routes = [
    {
      path:"cajero",
      component:CajeroComponent
 },
  {
    path:"administrador",
      component:AdministradorComponent
  }
];

export const ModuloDeRutas: ModuleWithProviders =
    RouterModule.forRoot(routes);






