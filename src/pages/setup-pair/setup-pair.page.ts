import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-setup-pair',
  templateUrl: './setup-pair.page.html',
  styleUrls: ['./setup-pair.page.scss'],
})
export class SetupPairPage implements OnInit, OnDestroy {
  completion: number;
  interval: any;
  constructor() {}

  pairToDevice() {
    this.interval = setInterval(() => {
        if (this.completion < 100) {
            this.completion += 1;
        } else {
            window.location.href = "/setupColor";
        }
      }, 15);

    // setTimeout(()=>{
    //   this.completion = 50;
    // }, 500);
    // setTimeout(()=>{
    //   this.completion = 100;
    // }, 1000);
    // setTimeout(()=>{
    //   window.location.href = "/setupColor";
    // }, 1500);
  }

  ngOnInit() {
    this.completion = 0;
  }

  ngOnDestroy() {
      clearInterval(this.interval);
  }

}
