import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Player } from 'src/app/shared/models/player';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  players:Player[] =[];
  constructor(private router: Router,) { }

  ngOnInit(): void {}
  
  startNewGame(){   
    this.router.navigateByUrl('');   
  }

}
