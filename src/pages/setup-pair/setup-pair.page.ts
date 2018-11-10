import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setup-pair',
  templateUrl: './setup-pair.page.html',
  styleUrls: ['./setup-pair.page.scss'],
})
export class SetupPairPage implements OnInit {
  completion: number;

  constructor() {}

  pairToDevice() {
    setTimeout(()=>{
      this.completion = 50;
    }, 500);
    setTimeout(()=>{
      this.completion = 100;
    }, 1000);
    setTimeout(()=>{
      window.location.href = "/setupColor";
    }, 1500);
  }

  ngOnInit() {
    this.completion = 0;
  }

}
