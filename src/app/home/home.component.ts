import { Component, ElementRef, OnInit } from '@angular/core';
import { Producto } from '../producto.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  productosList: Producto[]= [];



  constructor(private elementRef: ElementRef) { }



  ngOnInit() {
    this.cargarEventListeners();
    
  }

  


   cargarEventListeners() {
    
}

comprarElemento(e:any) {
  
}

leerDatosElemento(elemento: ElementRef): void {
  const infoElemento = {
    imagen: elemento.nativeElement.querySelector('img').src,
    titulo: elemento.nativeElement.querySelector('h3').textContent,
    precio: elemento.nativeElement.querySelector('.Precio').textContent,
    id: elemento.nativeElement.querySelector('.agregar-carrito').getAttribute('data-id')
  };
console.log(infoElemento)
}

 insertarCarrito(elemento:any) {
   
}

eliminarElemento(e:any) {
 
}

 vaciarCarrito() {
  
}

}
