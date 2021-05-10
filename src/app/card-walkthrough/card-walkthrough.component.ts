import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-walkthrough',
  templateUrl: './card-walkthrough.component.html',
  styleUrls: ['./card-walkthrough.component.scss']
})
export class CardWalkthroughComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public isTooltip01: boolean = false;
  public isTooltip02: boolean = false;
  public isTooltip03: boolean = false;
  public isTooltip04: boolean = false;

  public showTooltip(value: any): void {
    if (value === 1) {
      this.isTooltip01 = true;
      this.isTooltip02 = false;
      this.isTooltip03 = false;
      this.isTooltip04 = false;
    } else if (value === 2) {
      this.isTooltip01 = false;
      this.isTooltip02 = true;
      this.isTooltip03 = false;
      this.isTooltip04 = false;
    } else if (value === 3) {
      this.isTooltip01 = false;
      this.isTooltip02 = false;
      this.isTooltip03 = true;
      this.isTooltip04 = false;
    } else if (value === 4) {
      this.isTooltip01 = false;
      this.isTooltip02 = false;
      this.isTooltip03 = false;
      this.isTooltip04 = true;
    } else {
      this.isTooltip01 = false;
      this.isTooltip02 = false;
      this.isTooltip03 = false;
      this.isTooltip04 = false;
    }
  }

}
