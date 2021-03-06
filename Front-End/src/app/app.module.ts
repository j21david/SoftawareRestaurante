import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {ModuloDeRutas}  from './routes'
import { AppComponent } from './app.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { CajeroComponent } from './cajero/cajero.component';

@NgModule({
  declarations: [
    AppComponent,
    AdministradorComponent,
    CajeroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ModuloDeRutas
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
