import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import * as L from 'leaflet';
import { Marker } from 'leaflet';
import { Covid } from '../shared/covid';
import { Personne } from '../shared/personne';
import { Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MarkersService {

  endpoint = 'http://localhost:4000/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  // villes: string = '/assets/map.geojson';
  theCovid: Covid;
  thePersonne = Personne;

  constructor(private http: HttpClient) {
  }
   public makeVillesMarkers(map: any): void {
    this.findCovid().subscribe(message => {
      const covids = message.message;
      if (covids && covids.length > 0) {
        covids.forEach(covid => {
          const lat = covid.lat;
          const lon = covid.lon;
          const circle = L.circleMarker([lat, lon]).addTo(map);
        });
      }
    });
  }

  public makePersonMarkers(map: any): void {
    this.findPersonne().subscribe(message => {
      const personnes = message.message;
      console.log(personnes);
      if (personnes && personnes.length > 0) {
        personnes.forEach(personne => {
          const lat = personne.lati;
          const lon = personne.long;
          const name = personne.name;
          const marker = L.circleMarker([lat, lon], {color: 'red'}).addTo(map).bindPopup(name);

        });
      }
    });
  }

  findCovid(): Observable<any> {
    return this.http.get<any>(`${this.endpoint}/map`);
  }

  findPersonne(): Observable<any> {
    return this.http.get<any>(`${this.endpoint}/ajout-personne-map`);
   }
}
