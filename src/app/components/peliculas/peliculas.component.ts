import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.scss']
})
export class PeliculasComponent implements OnInit {

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

  public movies: any[] = [
    { id: '1',
      name: 'The Lord of The Rings',
      genero: 'Fantasia Heroíca, Aventura',
      descripcion: 'La trilogía cinematográfica de El Señor de los Anillos, basada en la novela homónima del escritor británico J. R. R. Tolkien, comprende tres películas épicas de fantasía, acción y aventuras: El Señor de los Anillos: la Comunidad del Anillo, El Señor de los Anillos: las dos torres y El Señor de los Anillos: el retorno del Rey. ',
      ano: '2003',
      img: '../../../assets/items/peliculas/tlotr.jpg'
    },
    {id: '2',
      name: 'The Magnificent Seven',
      genero: 'Western',
      descripcion: 'Siete forajidos son contratados por los desesperados habitantes del pueblo de Rose Creek para que les defiendan de la amenaza de un despiadado extorsionador llamado Bartholomew Bogue. Mientras preparan el pueblo para la violenta confrontación que saben se avecina inevitablemente, estos siete mercenarios se encontrarán luchando por algo más que el simple dinero.',
      ano: '2016',
      img: '../../../assets/items/peliculas/magnificos.jpg'
    },
    {id: '3',
      name: 'Marvel Cinematic Universe',
      genero: 'Ciencia Ficción, Super Heroes',
      descripcion: 'Son una serie de películas de superhéroes estadounidenses, basadas en personajes que aparecen en publicaciones de Marvel Comics. Las cintas han estado en producción desde 2007, y desde ese entonces Marvel Studios ha producido más de veinte filmes, con otros en varias etapas de producción. La serie ha recaudado en conjunto más de $22 000 millones en la taquilla mundial, haciéndola la franquicia cinematográfica con mayor recaudación de la historia.',
      ano: '2008 - presente',
      img: '../../../assets/items/peliculas/mcu.jpg'
    },
    {id: '4',
      name: 'Forrest Gumb',
      genero: 'Drama, Comedia',
      descripcion: 'La historia describe varias décadas de la vida de Forrest Gump, un nativo de Alabama que sufre de una leve discapacidad intelectual. Ello no le impide ser testigo privilegiado, y en algunos casos actor decisivo, de muchos de los momentos más transcendentales de la historia de los Estados Unidos en la segunda mitad del siglo XX, específicamente entre 1945 y 1982',
      ano: '1994',
      img: '../../../assets/items/peliculas/forrest.jpg'
    },
    {id: '5',
      name: 'Deadpool',
      genero: 'Marvel Comics, Superhéroes, Ciencia Ficción, Comedia, Acción',
      descripcion: 'El anti-héroe y divertido personal Deadpool narra el origen de un ex-operativo de la fuerzas especiales llamado Wade Wilson, convertido a mercenario, y quien es expuesto a un cruel experimento adquiere poderes de curación rápida, adquiriendo Wade entonces el alter ego de Deadpool. Ya con habilidades nuevas y un oscuro y sarcástico sentido del humor, Deadpool intentará cazar al hombre que casi termina con su vida.',
      ano: '2016',
      img: '../../../assets/items/peliculas/deadpool.jpg'
    },
    {id: '6',
      name: 'V de Vendetta ',
      genero: 'Ciencia ficción, Política',
      descripcion: 'En un futuro no muy lejano, Gran Bretaña se ha convertido en un país totalitario dirigido con mano de hierro por un tirano (John Hurt). Una tarde, tras el toque de queda, Evey (Natalie Portman) es rescatada en plena calle por un misterioso enmascarado cuyo nombre es "V" (Hugo Weaving). El extraño personaje le explica cuáles son sus planes para recuperar la libertad. En efecto, todas las acciones de V tendrán como objetivo hacer estallar en todo el país una revolución contra el gobierno fascista.',
      ano: '2006',
      img: '../../../assets/items/peliculas/vendetta.jpg'
    },
    {id: '7',
      name: 'Bad Boys',
      genero: 'Acción, Comedia',
      descripcion: 'Marcus Burnett (Martin Lawrence) y Mike Lowrey (Will Smith) son los mejores amigos y los detectives de la División de Narcóticos del Departamento de Policía de Miami-Dade. Una noche, $ 100 millones en heroína incautada es robado de una bóveda de seguridad policial. Este es un duro golpe a Burnett y Lowrey, porque fue la mayor redada de drogas de sus carreras. Interior cree que fue un trabajo interno y advierte a la policía de Miami que si no se recuperan las drogas en cinco días, la división de narcóticos se cerrará',
      ano: '1995',
      img: '../../../assets/items/peliculas/badboys.jpg'
    },
    {id: '8',
      name: 'Harry Potter',
      genero: 'Fantasía',
      descripcion: 'Comprende ocho películas basadas en Harry Potter, una serie de siete novelas juveniles escritas por la autora británica J. K. Rowling y protagonizadas por el mago ficticio del mismo nombre.',
      ano: '2001 - 2011',
      img: '../../../assets/items/peliculas/harry.jpg'
    },
    {id: '9',
      name: 'Piratas del caribe',
      genero: 'Fantasía',
      descripcion: 'Serie cinematográfica de aventura fantástica y piratas, producida por Jerry Bruckheimer y basada en la atracción del mismo nombre del Parque Temático de Walt Disney. La saga Piratas del Caribe cuenta con 5 películas hasta ahora.',
      ano: '2003',
      img: '../../../assets/items/peliculas/piratas.jpg'
    },
    {id: '10',
      name: 'En busca de la felicidad ',
      genero: 'Biográfia',
      descripcion: 'Chris Gardner (Will Smith) es un vendedor brillante y con talento, pero su empleo no le permite cubrir sus necesidades más básicas. Tanto es así que acaban echándolo, junto a su hijo de cinco años (Jaden Smith), de su piso de San Francisco, y ambos no tienen ningún lugar al que ir. Cuando Gardner consigue hacer unas prácticas en una prestigiosa correduría de bolsa, los dos protagonistas tendrán que afrontar muchas adversidades para hacer realidad su sueño de una vida mejor.',
      ano: '2006',
      img: '../../../assets/items/peliculas/felicidad.jpg'
    },
  ]
}
