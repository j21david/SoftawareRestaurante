import { Component, OnInit } from '@angular/core';

import{Plato} from "../Clases/Plato";

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {

  nuevoPlato:Plato= new Plato('');
  nuevoPlato2:Plato= new Plato('');

  //nuevoPlato={nombre:'',costo:0.0,ingredientes:'',foto:''}

  platos:Plato[]=[{nombre:'Ceviche',costo:5.50,ingredientes:'camaron,cebolla,tomate',foto:'/assets/imagenes/ceviche.jpg',editar:false}

    ,{nombre:'Badera',costo:10.00,ingredientes:'concha,arroz,camarones',foto:'/assets/imagenes/bandera.jpg',editar:false}];



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
      ingredientes:this.nuevoPlato.ingredientes,
      editar:false
    });

  }

  actualizarPlato(i?:number){

    this.platos[i].nombre=this.nuevoPlato2.nombre;
    this.platos[i].ingredientes=this.nuevoPlato2.ingredientes;
    console.log(this.platos[i].nombre)

  }

}
