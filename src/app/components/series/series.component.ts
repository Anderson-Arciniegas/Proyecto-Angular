import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

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

  public series: any[] = [
    {id: '1',
      name: 'Stranger Things',
      genero: 'Drama, Misterio, Suspenso, Ciencia Ficción',
      descripcion: 'La historia arranca durante la década de los 80, en el pueblo ficticio de Hawkins, Indiana, cuando un niño llamado Will Byers desaparece, hecho que destapa los extraños sucesos que tienen lugar en la zona, producto de una serie de experimentos que realiza el gobierno en un laboratorio científico cercano. Además, en la ciudad aparecen fuerzas sobrenaturales inquietantes y una niña muy extraña. Ella, junto con los amigos de Will, se encargará de buscarlo, sin imaginar lo que tendrán que enfrentar para encontrarlo',
      temporadas: '3',
      img: '../../../assets/items/series/stranger.jpg'
    },
    {id: '2',
      name: 'Vikings',
      genero: 'Drama historico , acción, aventura',
      descripcion: 'La serie está inspirada en los cuentos de los nórdicos de la alta edad media escandinava. En general, sigue las hazañas del legendario jefe vikingo Ragnar Lodbrok y su tripulación, familia y descendientes.',
      temporadas: '6',
      img: '../../../assets/items/series/Vikings.jpg'
    },
    {id: '3',
      name: 'How I Met Your Mother',
      genero: 'Comedia',
      descripcion: 'En el año 2030, el arquitecto Ted Mosby decide contarle a sus dos hijos la historia de cómo conoció a su madre. Por lo tanto, inicia una narración de recuerdos recopilados desde el 2005, año en el que dos de sus mejores amigos, Marshall E6riksen y Lily Aldrin, deciden casarse tras nueve años de noviazgo. Esa decisión hace que Ted, soltero empedernido, al igual que su otro mejor amigo Barney Stinson, decida encontrar al amor de su vida desesperadamente.',
      temporadas: '9',
      img: '../../../assets/items/series/how.jpg'
    },
    {id: '4',
      name: 'La casa de papel',
      genero: 'Acción',
      descripcion: 'La serie gira en torno a un asalto de varios días preparado contra la Fábrica Nacional de Moneda y Timbre. Un hombre misterioso, conocido como «El Profesor», está planeando el mayor atraco de la historia. Para llevar a cabo el ambicioso plan, se recluta a un equipo de ocho personas con ciertas habilidades que no tienen nada que perder. El objetivo es entrar en la Fábrica e imprimir 2400 millones de euros. Para hacer esto, el equipo requiere once días de reclusión, durante los cuales tendrán que lidiar con las fuerzas de élite de la policía y 67 rehenes.',
      temporadas: '4',
      img: '../../../assets/items/series/casa.jpg'
    },
  ]
}
