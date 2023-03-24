import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Player } from 'src/app/shared/models/player';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {

  // players:Player[] = [];
  // score:Score=new Score();
  // id:number =1;

  corent_player!:Player;
  
  constructor(
    private dataService:DataService,
    private router: Router,
    private activatedRoute:ActivatedRoute,
    ) {}

   

  ngOnInit(): void {
    this.dataService.deletePlayers().subscribe();
    // this.dataService.startNewGame().subscribe();
  }



 

}
