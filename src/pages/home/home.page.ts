import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  drinkCurrent: number;
  drinkLimit: number;
  colorStart: number;
  colorEnd: number;
  color: string;

  constructor() { }

  parseColor(color) {

      if (typeof color === 'number') {
          color = '#' + ('00000' + (color | 0).toString(16)).substr(-6);
      }

      return color;
  }

  getColor() {
    let colorDelta = this.colorEnd - this.colorStart;
    let drinkRatio = this.drinkCurrent / this.drinkLimit;
    console.log(drinkRatio);
    console.log(colorDelta);
    console.log(this.colorStart + colorDelta * drinkRatio);
    return this.parseColor(this.colorStart + colorDelta * drinkRatio);
  }

  ngOnInit() {
    this.drinkCurrent = 2;
    this.drinkLimit = 10;
    this.colorStart = 0x000000;
    this.colorEnd = 0xFFFFFF;
    this.color = '#0F7722';
  }
}
