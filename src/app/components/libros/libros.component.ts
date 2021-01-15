import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.scss']
})
export class LibrosComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
    
}

expandir(id){
  var boton = document.getElementById("boton"+id);

  boton.classList.toggle("active");
    var panel = document.getElementById("book"+id);
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }


}
  

 

  public books: any[] = [
    { id: '1',
      name: 'La culpa es de la vaca',
      descripcion: 'La culpa es de la vaca reúne anécdotas, fábulas y parábolas de diversa procedencia que giran en torno a un punto común: la necesidad del cambio. El mundo se ha transformado ante nuestros ojos, y debemos adaptarnos a las nuevas circunstancias con inteligencia, tolerancia, creatividad y respeto.',
      genero: 'Cuentos cortos',
      autor: 'Jaime Lopera y Marta Bernal ',
      img: '../../../assets/items/libros/vaca.jpg',
    },
    { id: '2',
      name: 'No es cuestion de leche, es cuestión de actitud',
      descripcion: 'Carlos Saúl revela su historia personal plena de episodios triunfantes, rodeados de obstáculos que supero con sabias enseñanzas de su madre y su actitud ganadora, cultivada en el conocimiento, la conexión humana que el encarna y mucha fe. Su poderío inspirador salto del ámbito privado al país entero, cuando fue el psicólogo motivador de La Vinotinto entre 2001 y 2007. ',
      genero: 'Biográfia, motivación',
      autor: 'Carlos Saul Rodriguez',
      img: '../../../assets/items/libros/leche.jpg',
    },
    { id: '3',
      name: 'Harry potter y el prisionero de Azkavan ',
      descripcion: 'Es el tercer libro de la serie literaria Harry Potter, escrita por la autora británica J. K. Rowling en 1999. El prisionero de Azkaban narra los hechos que suceden a lo largo del tercer curso de su protagonista, Harry Potter, en el Colegio Hogwarts.',
      genero: 'Novela',
      autor: 'J.K. Rowling',
      img: '../../../assets/items/libros/harry.jpg',
    },
    { id: '4',
      name: 'El ladron de cuerpos',
      descripcion: 'El ladrón de cuerpos es la cuarta novela en las Crónicas Vampíricas de Anne Rice, siguiendo a La reina de los condenados. Publicada en 1992, continua con las aventuras de Lestat, especialmente sus esfuerzos para ganar la humanidad perdida.',
      genero: 'Novela',
      autor: 'Anne Rice',
      img: '../../../assets/items/libros/ladron.jpg',
    },
    { id: '5',
      name: 'Pablo Escobar, Mi padre ',
      descripcion: 'Por primera vez, el hijo del narcotraficante Pablo Escobar rompe su silencio y narra un apasionante relato íntimo sobre su padre.',
      genero: 'Biográfia',
      autor: 'Juan Pablo Escobar',
      img: '../../../assets/items/libros/pablo.jpg',
    },
    { id: '6',
      name: 'Narnía, la silla de plata ',
      descripcion: 'es una novela publicada por C. S. Lewis en 1953. Fue la cuarta novela escrita de la heptalogía Las Crónicas de Narnia. La silla de plata es el tercer libro sin los hermanos Pevensie. Esta vez, Aslan llama a Eustace de regreso a Narnia junto con su compañera de clases Jill Pole.',
      genero: 'Novela',
      autor: 'C. S. Lewis',
      img: '../../../assets/items/libros/narnia.jpg',
    },
  ]

}
