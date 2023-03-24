import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Player } from 'src/app/shared/models/player';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-player-page',
  templateUrl: './player-page.component.html',
  styleUrls: ['./player-page.component.css']
})
export class PlayerPageComponent implements OnInit {

  players:Player[] = [];
  id!:number;


  
  constructor(
    private dataService:DataService,

    ) {
    }

   

  ngOnInit(): void {
    this.getAllplayers();
    
    
    

  }

  setId(players_arr:Player[]){
    // if (!players_arr.length){
    //   console.log(players_arr)
    // }
    
    if(!this.players.length){
      // console.log("IF len == 0")
      this.id = 1;
    }
    else{
      // console.log("ELSE len == 0")
      // this.id = 1;
      this.id = this.players[this.players.length-1].id+1;
    }
    // console.log(this.id);
  }

  async getAllplayers(){
    console.log("getAllplayers");
    this.dataService.getAllPlayers().subscribe(players =>this.setId(this.players =players));
    // await this.dataService.getAllPlayers().then(ob =>{ ob.subscribe(players =>this.setId(this.players =players))});
    
  }

  addPlayer(newPlayerName: string){
    console.log("addPlayer");
    let player=new Player(this.id++,newPlayerName)
    this.dataService.createNewPlayer(player).subscribe(players =>this.players =players);
  }

  

}
