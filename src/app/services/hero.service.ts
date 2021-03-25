import { Injectable } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../ mock-heroes';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor() {}

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    return heroes;
  }
}
