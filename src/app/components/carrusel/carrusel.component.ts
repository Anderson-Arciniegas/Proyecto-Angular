import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.scss']
})
export class CarruselComponent implements OnInit {


  public items:any[] = [
    {name: 'The Lord of de rings',
    description: 'Trilogía de fantasia, basada en la novela del mismo nombre escrita por JRR Tolkien',
    img: '../../assets/imgs/3252918.jpg'   },
    {name: 'The Hobbit',
    description: 'Trilogía de fantasia, basada en la novela del mismo nombre escrita por JRR Tolkien',
    img: '../../assets/imgs/3252918.jpg'   }
    
  ];

  
  constructor() {

   
   }

  ngOnInit(): void {
  }

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

}
