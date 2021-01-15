import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LibrosComponent } from './components/libros/libros.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { MusicaComponent } from './components/musica/musica.component';
import { SeriesComponent } from './components/series/series.component';
import { CreateComponent } from './components/create/create.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { JuegosComponent } from './components/juegos/juegos.component';
import {HashLocationStrategy, Location, LocationStrategy} from '@angular/common';


const routes: Routes = [
  
  {path: '', component: CarruselComponent},
  {path: 'books', component: LibrosComponent},
  {path: 'movies', component: PeliculasComponent},
  {path: 'songs', component: MusicaComponent},
  {path: 'series', component: SeriesComponent},
  {path: 'games', component: JuegosComponent},
  {path: 'create', component: CreateComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
