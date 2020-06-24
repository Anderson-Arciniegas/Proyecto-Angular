import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibrosComponent } from './components/libros/libros.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { MusicaComponent } from './components/musica/musica.component';
import { SeriesComponent } from './components/series/series.component';
import { CreateComponent } from './components/create/create.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';




@NgModule({
  declarations: [
    AppComponent,
    LibrosComponent,
    PeliculasComponent,
    MusicaComponent,
    SeriesComponent,
    CreateComponent,
    CarruselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
