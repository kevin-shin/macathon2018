import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  drinkCurrent: number;
  drinkLimit: number;
  color: string;

  constructor() { }

  parseColor(color) {

      if (typeof color === 'number') {
          color = '#' + ('00000' + (color | 0).toString(16)).substr(-6);
      }

      return color;
  }

  increaseDrinks() {
    this.drinkCurrent += 1;
    if (this.drinkCurrent >= 10) {
        this.color = '#AA3333'
    }
    else if (this.drinkCurrent >= 7) {
        this.color = '#FF3333'
    }
    else if (this.drinkCurrent >= 4) {
        this.color = '#BBAA22'
    }
    else if (this.drinkCurrent >= 0) {
        this.color = '#0F7722'
    }
  }

  ngOnInit() {
    this.drinkCurrent = 2;
    this.drinkLimit = 9;
    this.color='#0F7722';
    window.addEventListener('keydown', this.increaseDrinks.bind(this));
  }
}
