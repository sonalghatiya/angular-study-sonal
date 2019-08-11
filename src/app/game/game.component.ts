import { Component, OnInit } from '@angular/core';
import { Game } from './game'

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  game: Game;

  constructor(id, name, rating) { 
    this.id = id;
    this.name = name;
    this.rating = rating;
  }

  ngOnInit() {
    this.game = new Game(1, 'Archer', 4);
  }

}