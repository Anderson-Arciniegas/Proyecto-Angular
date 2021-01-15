import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.scss']
})
export class CarruselComponent implements OnInit {


  public items: any[] = [
    { id: '1',
      img: '../../../assets/items/libros/narnia.jpg',
      link: '/books'
    },
    { id: '2',
      img: '../../../assets/items/peliculas/tlotr.jpg',
      link: '/movies'
    },
    { id: '3',
      img: '../../../assets/items/juegos/gow.jpg',
      link: '/games'
    },
    { id: '4',
      img: '../../../assets/items/series/stranger.jpg',
      link: '/series'
    },
    { id: '5',
      img: '../../../assets/items/musica/dragons.jpg',
      link: 'songs'

    }
 ];


  constructor() {

    
   }
   
  ngOnInit(): void {


  }



  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  


}
