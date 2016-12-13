// Routing Modules
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Pages for routing
import { SearchComponent } from './components/search/search.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';

import { ArtistComponent } from './components/artist/artist.component';
import { AlbumComponent } from './components/album/album.component';

const appRoutes: Routes = [
	{
		path: '',
		component: SearchComponent
	},
	{
		path: 'about',
		component: AboutComponent
	},
	{
		path: 'artist/:id', // :id = placeholder for artist id
		component: ArtistComponent
	},
	{
		path: 'contact',
		component: ContactComponent
	},
	{
		path: 'album/:id', // placeholder for album id
		component: AlbumComponent
	}

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);