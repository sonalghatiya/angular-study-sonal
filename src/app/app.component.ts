import { Component, OnInit, Input } from '@angular/core';
import { Game } from './game/game'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
title = "GameShow";

game: Game[];

constructor() {
}

ngOnInit() {
  this.game[0] = new Game(1, 'Archer', 4);
  this.game[1] = new Game(2, 'Pokemon', 4);
  this.game[2] = new Game(3, 'PubG', 4.5);
}
}
