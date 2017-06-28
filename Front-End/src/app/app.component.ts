import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  nuevoUsuario={

    nombreDeUsuario:'',
    contrasena:'',
    estado:0

  };

  Usuarios=[{
    nombreDeUsuario:'admin',contrasena:'123',estado:4

  },{nombreDeUsuario:'cajero',contrasena:'123',estado:2}]

  constructor(){

  }


  comprobarUsuario(){

    if(this.nuevoUsuario.nombreDeUsuario==this.Usuarios[0].nombreDeUsuario&&this.nuevoUsuario.contrasena==this.Usuarios[0].contrasena){
      this.nuevoUsuario.estado=4

    }

    else if(this.nuevoUsuario.nombreDeUsuario==this.Usuarios[1].nombreDeUsuario&&this.nuevoUsuario.contrasena==this.Usuarios[1].contrasena){
      this.nuevoUsuario.estado=2
    }
    else{
      this.nuevoUsuario.estado=3

    }

  }
}
