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
import { JuegosComponent } from './components/juegos/juegos.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    LibrosComponent,
    PeliculasComponent,
    MusicaComponent,
    SeriesComponent,
    CreateComponent,
    CarruselComponent,
    JuegosComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgxYoutubePlayerModule.forRoot()

  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
