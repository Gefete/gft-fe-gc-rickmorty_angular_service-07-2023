import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  mostrarBienvenida=true;


  cambioHome(evento:any){
    this.mostrarBienvenida=false;
  }
}
