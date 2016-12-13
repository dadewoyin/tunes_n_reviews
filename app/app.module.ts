import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routing';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';

// Page Components
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { SearchComponent } from './components/search/search.component';
import { ContactComponent } from './components/contact/contact.component';
import { ArtistComponent } from './components/artist/artist.component';
import { AlbumComponent } from './components/album/album.component';

@NgModule({
  imports:      [ BrowserModule, 
        				  routing, 
        				  FormsModule, 
        				  HttpModule ],
  declarations: [ AppComponent, 
        				  NavbarComponent, 
        				  AboutComponent, 
        				  SearchComponent,
        				  ContactComponent,
        				  ArtistComponent,
                  AlbumComponent
             ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
