import {Injectable} from '@angular/core'; // for dependency injection
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map'; // for observables

@Injectable()
export class SpotifyService {
	private searchUrl:string;
	private artistUrl:string;
	private albumsUrl:string;
	private albumUrl:string;
	private artistName:string;

	constructor(private _http: Http) { 
		console.log('Spotify Service Ready...');
	}

	searchMusic(str:string, type="artist") {
		this.searchUrl = 'https://api.spotify.com/v1/search?q='+str+'&offset=0&limit=20&type='+type+'&market=US';
		return this._http.get(this.searchUrl)
			.map(res => res.json());
	}

	getArtist(id:string) {
		this.artistUrl = 'https://api.spotify.com/v1/artists/' + id;
		return this._http.get(this.artistUrl)
			.map(res => res.json());
	}

	getAlbums(artistId:string) {
		this.albumsUrl = 'https://api.spotify.com/v1/artists/' + artistId + '/albums?market=US&album_type=album&limit=50';
		return this._http.get(this.albumsUrl)
			.map(res => res.json());
	}

	getAlbum(id:string) {
		this.albumUrl = 'https://api.spotify.com/v1/albums/' + id;
		return this._http.get(this.albumUrl)
			.map(res => res.json());
	}
	
}