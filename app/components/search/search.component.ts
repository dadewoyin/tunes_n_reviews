import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Artist } from '../../../artist';

@Component({
	moduleId:module.id,
  	selector: 'search',
  	templateUrl: `search.component.html`,
})
export class SearchComponent  {

	artistName:string; // [(ngModel)]="artistName" from search.component.html
	searchRes:Artist[]; // Artist[] object

	constructor(private _spotifyService: SpotifyService) {
		
	}

	searchMusic() {

		this._spotifyService.searchMusic(this.artistName).subscribe(res => {
			this.searchRes = res.artists.items; // timeout for loading
			console.log(this.searchRes);
		});

	}
}
