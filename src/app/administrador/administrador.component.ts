import { Component, OnInit } from '@angular/core';

import{Plato} from "../Clases/Plato";

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {

  nuevoPlato:Plato=new nuevoPlato(""):

  //nuevoPlato={nombre:'',costo:0.0,ingredientes:'',foto:''}


  platos:Plato[]=[{nombre:'Ceviche',costo:5.50,ingredientes:'camaron,cebolla,tomate',foto:'/assets/imagenes/ceviche.jpg'}

  ,{nombre:'Badera',costo:10.00,ingredientes:'concha,arroz,camarones',foto:''}]


  constructor() { }

  ngOnInit() {
  }

}
