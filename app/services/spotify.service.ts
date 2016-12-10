import {Injectable} from '@angular/core'; // for dependency injection
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map'; // for observables

@Injectable()
export class SpotifyService {
	private searchUrl:string;
	private artistName:string;

	constructor(private _http: Http) { 
		console.log('Spotify Service Ready...');
	}

	searchMusic(str:string, type="artist") {
		this.searchUrl = 'https://api.spotify.com/v1/search?q='+str+'&offset=0&limit=20&type='+type+'&market=US';
		return this._http.get(this.searchUrl)
			.map(res => res.json());
	}

/*	getArtistAlbums() {
		return this._http.get('https://api.spotify.com/v1/artists/' + this.artistName + '/albums' + '?client_id=' + this.clientId + '&client_secret=' + this.client_secret)
		.map(res => res.json());
	}

	updateArtistAlbums(artistName:string) {
		this.artistName = artistName;
	} */
	
}