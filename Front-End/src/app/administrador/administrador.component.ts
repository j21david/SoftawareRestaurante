import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";

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

  platos:Plato[]=[];



  constructor(private _http:Http) { }

  ngOnInit() {
    this._http
      .get("http://localhost:1337/Plato/")
      .subscribe(
        respuesta=>{
          let rjson:Plato[] = respuesta.json();

          this.platos = rjson;
          console.log(rjson[0].id)
          /*
           //anadir propiedades a objetos
           let objeto1:any = {
           prop1:1,
           prop2:2
           }
           objeto1.prop3 = 3;
           */

          console.log("Usuarios: ",respuesta);
        },
        error=>{
          console.log("Error: ",error)

        }
      )



  }


  agregarPlato(){

    //aux:Plato=

    console.log(this.nuevoPlato.nombre);
    console.log(this.nuevoPlato.costo);
    console.log(this.nuevoPlato.ingredientes);
    this.nuevoPlato.foto='/assets/imagenes/'+this.nuevoPlato.nombre+'.jpg';

    this._http
      .post("http://localhost:1337/Plato",this.nuevoPlato)
      .subscribe(
        respuesta=>{
          let respuestaJson = respuesta.json()
          this.platos.push(respuestaJson);
          this.nuevoPlato = new Plato();
          console.log('respuestaJson: ',respuestaJson);
        },
        error=>{
          console.log("Error",error);
        }
      )


    /*
    this.platos.push({
      nombre:this.nuevoPlato.nombre,
      costo:this.nuevoPlato.costo,
      ingredientes:this.nuevoPlato.ingredientes,
      editar:false
    });
*/
  }

  actualizarPlato(i?:number){

    this.platos[i].nombre=this.nuevoPlato2.nombre;
    this.platos[i].ingredientes=this.nuevoPlato2.ingredientes;
    console.log(this.platos[i].nombre)

  }

}
