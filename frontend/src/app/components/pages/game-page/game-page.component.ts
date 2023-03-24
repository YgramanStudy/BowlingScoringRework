import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Player } from 'src/app/shared/models/player';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})
export class GamePageComponent implements OnInit {
  players:Player[] = [];
  current_player!:Player;
  button_undisabling= Array(10);
  button_numbers= Array(10).fill(1).map((x,i)=>i + 1);
  resalts_arr!:number[];
  extra_turn!:boolean[];

  constructor(private dataService:DataService,
              private router: Router,
              private activatedRoute:ActivatedRoute,) { 
                
              }

  ngOnInit(): void {

    this.getAllplayers();
    this.firstSetOfCurentPlayer(); 
  }

  firstSetOfCurentPlayer(){
    this.current_player = this.players[0];
  }

  extra_turn_init(players:Player[]){
    this.extra_turn=Array(players.length).fill(false);
  }

  getAllplayers(){
    this.dataService.getAllPlayers().subscribe(players =>this.extra_turn_init(this.players =players));
  }

  updateCorentPlayer(player:Player){
    this.current_player=player;
    this.button_undisabling.fill(true);
    this.resalts_arr = [];
  }


  updateFreame(frame_resalts:number[]){   
    // this.dataService.updateFrame(this.current_player.id,frame_resalts).subscribe(player =>this.current_player =player);
    this.dataService.updateFrame(this.current_player.id,frame_resalts).subscribe(players =>this.updateCurrentPlayer(this.players =players));
    // this.current_player=this.players[this.current_player.id-1]
  }

  updateCurrentPlayer(player:Player[]){
    this.current_player=this.players[this.current_player.id-1]
    this.button_undisabling.fill(true);
  }


  onSubmitButton(buttom_number:number){
    if(this.current_player.frame_number==10){
      if(!this.resalts_arr.length){
        this.resalts_arr.push(buttom_number);
      }
      else if(this.extra_turn[this.current_player.id-1]==false){
        this.button_logic(buttom_number);
      }
      else if(this.resalts_arr.length<2){
        this.resalts_arr.push(buttom_number);
      }
      else{
        this.button_logic(buttom_number);
      }
      
    }
    else{
      let amount_to_undisable=10;
      if(!this.resalts_arr.length){
        this.resalts_arr.push(buttom_number);
        if(buttom_number==10){
          this.extra_turn[this.current_player.id-1]=true;
          this.button_logic(0);
        }
        amount_to_undisable = amount_to_undisable - buttom_number;
        for(let i=10; i>amount_to_undisable;i--){
          this.button_undisabling[i-1]=false;
        }
      }
      
      else{
        if(this.resalts_arr[0]+buttom_number==10){
          this.extra_turn[this.current_player.id-1]=true;
        }
        this.button_logic(buttom_number);
      }
    }

    console.log(this.button_undisabling);
  }

  button_logic(buttom_number:number){
    this.resalts_arr.push(buttom_number);
    this.updateFreame(this.resalts_arr);
    // this.button_undisabling.fill(true);
    this.resalts_arr = [];
  }


}
