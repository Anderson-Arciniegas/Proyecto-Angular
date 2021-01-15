import { Component, OnInit } from '@angular/core';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.scss']
})
export class JuegosComponent implements OnInit {

  expandir(id){
    var boton = document.getElementById("boton"+id);
  
    boton.classList.toggle("active");
      var panel = document.getElementById("item"+id);
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
  
  }

  public games: any[] = [
    { id: '1',
      name: 'God of War',
      genero: 'Acción, Aventura',
      descripcion: 'God of War es una serie de videojuegos en 3ª. persona creada por SCE Santa Monica Studio y distribuida por Sony Computer Entertainment. Se basa en las aventuras de un semidiós espartano, Kratos, quien se enfrenta a diversos personajes de la mitología griega y nórdica, tanto héroes; especies mitológicas; dioses griegos, titanes y dioses primordiales. Aunque el guerrero espartano acostumbra enemistad con la mayoría de los dioses, recibe ayuda de muchos de ellos en algún momento de cada entrega, en especial de Atenea.',
      plataforma: 'PlayStation',
      img: '../../../assets/items/juegos/gow.jpg'
    },
    { id: '2',
      name: 'Devil May Cry',
      genero: 'Acción, Stylish Hack and slash',
      descripcion: 'Devil May Cry es un videojuego de acción desarrollado y publicado por Capcom en 2001 en Japón, Estados Unidos y Europa para la consola PlayStation 2.',
      plataforma: 'PlayStation, Xbox, Switch',
      img: '../../../assets/items/juegos/devil.jpg'
    },
    { id: '3',
      name: 'Skyrim',
      genero: 'Rol, Arpg',
      descripcion: 'Skyrim es un ARPG del tipo mundo abierto desarrollado por Bethesda Game Studios y publicado por Bethesda Softworks. Skyrim es la quinta entrega de videojuegos de acción y fantasía de la serie The Elder Scrolls, La historia de Skyrim se centra en los esfuerzos del personaje, dovahkiin (sangre de dragón)para derrotar a Alduin, un dragón/dovah que según la profecía, destruirá el mundo.',
      plataforma: 'PC, PlayStation, Xbox, Switch',
      img: '../../../assets/items/juegos/skyrim.jpg'
    },
    { id: '4',
      name: 'Mortal Kombat',
      genero: 'Lucha',
      descripcion: 'Mortal Kombat es una franquicia de videojuegos de peleas creada por Ed Boon y John Tobias en 1992. Las cuatro primeras entregas fueron distribuidas por Midway Games y lanzadas principalmente en máquinas arcade; posteriormente estuvieron disponibles en consolas domésticas.',
      plataforma: 'Todas',
      img: '../../../assets/items/juegos/mortal.jpg'
    },
    { id: '5',
      name: 'Grand Theft Auto',
      genero: 'Acción, Aventura',
      descripcion: 'Grand Theft Auto es una serie de videojuegos creada por David Jones y por los hermanos Sam y Dan Houser. Originalmente fue desarrollada por DMA Design, que posteriormente pasó a llamarse Rockstar North, de la empresa Rockstar Games. Grand Theft Auto cuenta la historia de distintos criminales y aunque sean varios, por una razón se van relacionando y envolviendo en problemas a más personajes conforme va pasando el tiempo. Generalmente los protagonistas son antihéroes.',
      plataforma: 'Todas',
      img: '../../../assets/items/juegos/gta.jpg'
    },
    { id: '6',
      name: 'League of Legends',
      genero: 'Moba',
      descripcion: 'Un maldito juego de mierda que te consume la vida volviendote adicto, donde se entra para distraerse pero al cabo de 10 minutos jugando ya estas arrecho porque fedearon una maldita Diana y te mata en 0.02 segundos, o que el juego se quede en la pantalla de carga, te saque, se cancele la partida, te cuenten la partida como perdida en la promo y te metan leavebuster de 20 minutos... Asco, Riot arregla tu maldito juego. ',
      plataforma: 'PC',
      img: '../../../assets/items/juegos/lol.jpg'
    },
    { id: '7',
      name: 'Pro Evolution Soccer',
      genero: 'Deportes',
      descripcion: 'Pro Evolution Soccer es una serie de videojuegos de fútbol desarrollado y distribuido por la empresa Konami.',
      plataforma: 'PC, PlayStation, Xbox',
      img: '../../../assets/items/juegos/pes.jpg'
    },
    { id: '8',
      name: 'Stars Wars Battlefrom',
      genero: 'Acción',
      descripcion: 'Star Wars: Battlefront es un videojuego desarrollado por EA Digital Illusions CE y publicado por Electronic Arts. Está basado en la franquicia de Star Wars.',
      plataforma: 'PC, PlayStation, Xbox',
      img: '../../../assets/items/juegos/sw.jpg'
    },
  ]


  constructor(private _config:NgbAccordionConfig) {
    
   }

  ngOnInit(): void {
  }

}
