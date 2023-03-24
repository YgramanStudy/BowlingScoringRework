import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Player } from 'src/app/shared/models/player';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})
export class GamePageComponent implements OnInit {
  players:Player[] = [];
  current_player!:Player;
  button_undisabling= Array(11);
  button_numbers= Array(11).fill(0).map((x,i)=>i + 1);
  resalts_arr!:number[];
  extra_turn!:boolean[];

  constructor(private dataService:DataService,) {}

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
    this.dataService.updateFrame(this.current_player.id,frame_resalts).subscribe(players =>this.updateCurrentPlayer(this.players =players));
  }

  updateCurrentPlayer(players: Player[]) {
    this.current_player = players.find(p => p.id === this.current_player.id)!;
    this.button_undisabling.fill(true);
  }
  


  

  private handleFirstRoll(buttom_number: number): void {
    this.resalts_arr.push(buttom_number);
    if (buttom_number === 10) {
      this.extra_turn[this.current_player.id - 1] = true;
      this.button_logic(0);
    }
    const amount_to_undisable = 11 - buttom_number;
    for (let i = 11; i > amount_to_undisable; i--) {
      this.button_undisabling[i - 1] = false;
    }
  }
  

  private handleSecondRoll(buttom_number: number): void {
    this.resalts_arr.push(buttom_number);
    if (this.resalts_arr[0] + buttom_number === 10) {
      this.extra_turn[this.current_player.id - 1] = true;
    }
    this.button_logic(buttom_number);
  }
  

  public onSubmitButton(buttom_number: number): void {
    if (this.current_player.frame_number === 10) {
      if (!this.resalts_arr.length) {
        this.resalts_arr.push(buttom_number);
      } else if (this.extra_turn[this.current_player.id - 1] === false) {
        this.button_logic(buttom_number);
      } else if (this.resalts_arr.length < 2) {
        this.resalts_arr.push(buttom_number);
      } else {
        this.button_logic(buttom_number);
      }
    } else {
      if (!this.resalts_arr.length) {
        this.handleFirstRoll(buttom_number);
      } else {
        this.handleSecondRoll(buttom_number);
      }
    }
  }
  


  button_logic(buttom_number:number){
    this.resalts_arr.push(buttom_number);
    this.updateFreame(this.resalts_arr);
    this.resalts_arr = [];
  }


}
