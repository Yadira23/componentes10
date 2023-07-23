import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  productsPixabay: any[] = [];
  characters: any[] = [];

  constructor(private http: HttpClient) { }
  

  searchCharacters() {
   const apiUrl = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=151';
    this.http.get(apiUrl).subscribe((response: any) => {
      this.characters = response.results.map((character: { id: any; name: any; image: any; }) => ({
        id: character.id,
        name: character.name,
        imageUrl: character.image
      }));
    });
  }
  

}