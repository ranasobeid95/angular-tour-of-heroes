import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../ mock-heroes';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  selectedHero?: Hero;

  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.heroService.getHeroes().subscribe((response) => {
      this.heroes = response;
    });
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
}
