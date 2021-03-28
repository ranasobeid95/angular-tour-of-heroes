import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../ mock-heroes';
import { HeroService } from '../services/hero.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.heroService.getHeroes().subscribe((response) => {
      this.heroes = response;
    });
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    console.log(`{name} as Hero`, { name } as Hero);
    this.heroService.addHero({ name } as Hero).subscribe((hero) => {
      this.heroes.push(hero);
    });
  }
  delete(hero: Hero) {
    this.heroService.deleteHero(hero.id).subscribe(() => {
      this.heroes = this.heroes.filter((ele) => ele !== hero);
    });
  }
}
