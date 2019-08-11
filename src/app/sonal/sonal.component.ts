import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sonal',
  templateUrl: './sonal.component.html',
  styleUrls: ['./sonal.component.css']
})
export class SonalComponent implements OnInit {
  counter = 0;
  increaseCounter() {
    this.counter++;
  } 
  constructor() { }

  ngOnInit() {
  }

}