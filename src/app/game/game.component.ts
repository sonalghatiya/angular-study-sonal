import { Component, OnInit, Input} from '@angular/core';
import { Game } from './game'

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  @Input() game: Game[];
  increaseRating(CurrentGame: Game) {
    CurrentGame.rating++;
  }

  decreaseRating(CurrentGame: Game) {
    CurrentGame.rating--;
  }

  constructor() { 
  }

  ngOnInit() {
  }

}