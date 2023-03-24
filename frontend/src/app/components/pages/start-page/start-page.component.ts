import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/shared/models/player';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {

  corent_player!:Player;
  
  constructor(private dataService:DataService,) {}

   

  ngOnInit(): void {
    this.dataService.deletePlayers().subscribe();
  }



 

}
