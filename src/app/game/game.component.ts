import { Component, OnInit } from '@angular/core';
import { Game } from './game'

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  game: Game;

  constructor() { }

  ngOnInit() {
    this.game = new Game();
    this.game.id = 1;
    this.game.name = 'Archer';
    this.game.rating = 4;
  }

}