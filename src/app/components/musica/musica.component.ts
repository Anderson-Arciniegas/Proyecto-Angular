import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-musica',
  templateUrl: './musica.component.html',
  styleUrls: ['./musica.component.scss']
})
export class MusicaComponent implements OnInit {

  constructor() { }

  player: YT.Player;

  savePlayer(player) {
    this.player = player;
    console.log("player instance", player);
  }
  onStateChange(event) {
    console.log("player state", event.data);
  }
  
  ngOnInit(): void {
  }

  expandir(id){
    var boton = document.getElementById("boton"+id);
    var i;

    boton.classList.toggle("active");
      var panel = document.getElementById("item"+id);
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {

        for(i = 1; i<= 10;i++){

          var panelaux = document.getElementById("item"+i);
          var botonaux = document.getElementById("boton"+i);

          if (panelaux.style.maxHeight) {
            botonaux.classList.remove("active");
            panelaux.style.maxHeight = null;
          }
        }

        panel.style.maxHeight = panel.scrollHeight + "px";

      
      }
  
  }
  

  public songs: any[] = [
    {id: '1',
      name: 'Simple song',
      interprete: 'The Shins',
      link: 'GyAJ4V06izg'
    },
    {id: '2',
      name: 'November Rain',
      interprete: 'Guns N Roses',
      link: '8SbUC-UaAxE'
    },
    {id: '3',
      name: 'Sweet Child o Mine',
      interprete: 'Guns N Roses',
      link: '1w7OgIMMRc4'
    },
    {id: '4',
      name: 'Pumped up kicks',
      interprete: 'Foster the People',
      link: 'SDTZ7iX4vTQ'
    },
    {id: '5',
      name: 'Highway to hell',
      interprete: 'AC/DC',
      link: 'l482T0yNkeo'
    },
    {id: '6',
      name: 'Imagine',
      interprete: 'John Lennon',
      link: 'YkgkThdzX-8'
    },
    {id: '7',
      name: 'Demons',
      interprete: 'Imagine Dragonss',
      link: 'mWRsgZuwf_8'
    },
    {id: '8',
      name: 'Believer',
      interprete: 'Imagine Dragons',
      link: '7wtfhZwyrcc'
    },
    {id: '9',
      name: 'Radioactive',
      interprete: 'Imagine Dragons',
      link: 'ktvTqknDobU'
    },
    {id: '10',
      name: 'On melancholy hill',
      interprete: 'Gorillaz',
      link: '04mfKJWDSzI'
    }
  ]
}
