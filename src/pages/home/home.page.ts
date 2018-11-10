import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {
  drinkCurrent: number;
  drinkLimit: number;
  color: string;
  time: string;
  timer: any;
  lastDrinkTime: any;

  constructor() { }

  parseColor(color) {

      if (typeof color === 'number') {
          color = '#' + ('00000' + (color | 0).toString(16)).substr(-6);
      }

      return color;
  }

  increaseDrinks() {
    this.lastDrinkTime = new Date();
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

  pad(n){return n<10 ? '0'+n : n}

  ngOnInit() {
    this.timer = setInterval(() => {
        if (this.lastDrinkTime) {
            let lastDrinkTime = this.lastDrinkTime.getTime();
            let now = new Date().getTime();
            let time = new Date(now - lastDrinkTime);
            this.time = `${this.pad(time.getMinutes())}:${this.pad(time.getSeconds())}`;
        }
        else {
            this.time = '00:00'
        }
    }, 300);

    this.drinkCurrent = 0;
    this.drinkLimit = 9;
    this.color='#0F7722';
    window.addEventListener('keydown', this.increaseDrinks.bind(this));
  }

  ngOnDestroy() {
      clearInterval(this.timer);
  }
}
