import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) { 
    console.log('Spotify service listo');
  }

  getNewReleases(){

    const headers = new HttpHeaders({
    'Authorization': 'Bearer BQB6ZBGW35hK6ZLHWuU1nQkh2D2cTiJkWRsape7_PqrWRbMYx1wExYqm2hLN5s1PULc3gB2GhVmwUKcVG3g'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers } );

  }

} 
