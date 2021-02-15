import { Injectable } from '@angular/core';
import { Hero } from '../model/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  heroes: Hero[] = [
    {
      id: 0,
      name: "Superman",
      superPower: "fly",
      address: "Budapest"
    }, {
      id: 1,
      name: "Spiederman",
      superPower: "climbing",
      address: "LazyCity"
    },  {
      id: 2,
      name: "Batman",
      superPower: "wizzard",
      address: "Nairobi"
    }, {
      id: 3,
      name: "Waterman",
      superPower: "swim",
      address: "Mexikó"
    }, {
      id: 4,
      name: "Desszi",
      superPower: "programming",
      address: "Kőbánya"
    }
  ]
  
  constructor() { }

  getAll() {

  }
}

