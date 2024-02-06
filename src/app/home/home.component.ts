import { Component, ElementRef, OnInit } from '@angular/core';
import { Producto } from '../producto.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  carrito: any = document.getElementById('carrito');
  elementos1:any = document.getElementById('lista-1');
  lista:any = document.querySelector('#lista-carrito tbody');
 vaciarCarritoBtn:any = document.getElementById('vaciar-carrito');

  productosList: Producto[]= [];

  productos: Producto[] = [
    {
      id: 1,
      imagen: 'assets/imagenes/right.png',
      titulo: 'Producto 1',
      precio: 20.99
    },
    {
      id: 2,
      imagen: 'assets/imagenes/right.png',
      titulo: 'Producto 2',
      precio: 15.49
    },
    {
      id: 3,
      imagen: 'assets/imagenes/right.png',
      titulo: 'Producto 3',
      precio: 30.00
    },
    {
      id: 4,
      imagen: 'assets/imagenes/right.png',
      titulo: 'Producto 4',
      precio: 25.75
    },
    {
      id: 5,
      imagen: 'assets/imagenes/right.png',
      titulo: 'Producto 5',
      precio: 18.90
    },
    {
      id: 6,
      imagen: 'assets/imagenes/right.png',
      titulo: 'Producto 6',
      precio: 22.50
    }
  ];




  constructor(private elementRef: ElementRef) { }



  ngOnInit() {
    
  }

  


   

leerDatosElemento(producto: Producto) {
 
this.productosList.push(producto);
}

 

eliminarObjeto(index: number): void {
  this.productosList.splice(index, 1);
}

eliminarTodosLosElementos(): void {
this.productosList = [];
}



}
