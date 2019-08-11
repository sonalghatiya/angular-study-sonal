import { Component, OnInit } from '@angular/core';
import { Game } from './game'

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  game: Game[] = [];

  constructor() { 
  }

  ngOnInit() {
    this.game[0] = new Game(1, 'Archer', 4);
    this.game[1] = new Game(2, 'Pokemon', 4);
    this.game[2] = new Game(3, 'PubG', 4.5);
  }

}