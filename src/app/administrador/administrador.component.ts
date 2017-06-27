import { Component, OnInit } from '@angular/core';

import{Plato} from "../Clases/Plato";

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {

  nuevoPlato:Plato= new Plato('');

  //nuevoPlato={nombre:'',costo:0.0,ingredientes:'',foto:''}

  platos:Plato[]=[{nombre:'Ceviche',costo:5.50,ingredientes:'camaron,cebolla,tomate',foto:'/assets/imagenes/ceviche.jpg'}

    ,{nombre:'Badera',costo:10.00,ingredientes:'concha,arroz,camarones',foto:''}];



  constructor() { }

  ngOnInit() {


  }


  agregarPlato(){

    //aux:Plato=

    console.log(this.nuevoPlato.nombre);
    console.log(this.nuevoPlato.costo);
    console.log(this.nuevoPlato.ingredientes);
    this.platos.push({
      nombre:this.nuevoPlato.nombre,
      costo:this.nuevoPlato.costo,
      ingredientes:this.nuevoPlato.ingredientes
    });

  }

}
