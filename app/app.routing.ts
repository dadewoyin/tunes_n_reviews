// Routing Modules
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Pages for routing
import { SearchComponent } from './components/search/search.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';

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
		path: 'contact',
		component: ContactComponent
	}

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);