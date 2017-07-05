import { Component, OnInit } from '@angular/core';
import{Plato} from "../Clases/Plato";
import {Http} from "@angular/http";

@Component({
  selector: 'app-cajero',
  templateUrl: './cajero.component.html',
  styleUrls: ['./cajero.component.css']
})
export class CajeroComponent implements OnInit {

  carrito:Plato[]=[];
  x=false;

  nuevoPlato:Plato= new Plato('');
  platos:Plato[]=[]
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

  anadirCarrito(nuevoPlato:Plato){

    this.carrito.push(nuevoPlato);


  }
  eliminarCarrito(nuevoPlato:Plato){


    console.log(this.carrito.indexOf(nuevoPlato))
    this.carrito.splice(this.carrito.indexOf(nuevoPlato),1)


    //this.carrito.splice()



  }
}
