
import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-go-back',
  templateUrl: './go-back.component.html',
  // template: '<button (click)="goBack()">Go BACk</button>',
  styleUrls: ['./go-back.component.css']
})
export class GoBackComponent {
  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }
}