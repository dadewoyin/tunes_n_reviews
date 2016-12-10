import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
	moduleId:module.id,
  	selector: 'search',
  	templateUrl: `search.component.html`,
})
export class SearchComponent  {

	artistName:string; // [(ngModel)]="artistName" from search.component.html

	constructor(private _spotifyService: SpotifyService) {
		
	}

	searchMusic() {

		console.log(this.artistName);
		this._spotifyService.searchMusic(this.artistName).subscribe(res => {
			console.log(res.artists.items);
		});

/*		this._spotifyService.updateArtistAlbums(this.artistName).subscribe(res => {
			console.log(res);
		});

		this._spotifyService.getArtistAlbums().subscribe(artist => {
			this.artist = artist;
		
		}) */

	}
}
