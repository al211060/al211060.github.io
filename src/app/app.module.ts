import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HeroesComponent } from './heroes/heroes.component';
import { SearchComponent } from './search/search.component';
import { UnheroeComponent } from './unheroe/unheroe.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { OrigenesComponent } from './origenes/origenes.component';
import { DestacadoComponent } from './destacado/destacado.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    SearchComponent,
    UnheroeComponent,
    UsuariosComponent,
    OrigenesComponent,
    DestacadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
