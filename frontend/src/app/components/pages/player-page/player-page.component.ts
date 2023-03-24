import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/shared/models/player';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-player-page',
  templateUrl: './player-page.component.html',
  styleUrls: ['./player-page.component.css']
})
export class PlayerPageComponent implements OnInit {

  players:Player[] = [];
  id!:number;

  constructor(private dataService:DataService,) {}

  ngOnInit(): void {this.getAllplayers();}

  setId(players_arr:Player[]){
    if(!this.players.length){
      this.id = 1;
    }
    else{
      this.id = this.players[this.players.length-1].id+1;
    }
  }

  async getAllplayers(){
    this.dataService.getAllPlayers().subscribe(players =>this.setId(this.players =players));    
  }

  addPlayer(newPlayerName: string){
    let player=new Player(this.id++,newPlayerName)
    this.dataService.createNewPlayer(player).subscribe(players =>this.players =players);
  }

}
