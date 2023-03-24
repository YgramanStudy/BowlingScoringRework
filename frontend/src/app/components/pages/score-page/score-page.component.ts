import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Player } from 'src/app/shared/models/player';

@Component({
  selector: 'app-score-page',
  templateUrl: './score-page.component.html',
  styleUrls: ['./score-page.component.css']
})
export class ScorePageComponent implements OnInit {
  players!:Player[];

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    // console.log("ScorePageComponent")
    this.dataService.getScore().subscribe(players =>this.mySort(this.players =players));
    // this.dataService.getScore().subscribe(players =>this.players =players);
    // console.log(this.players)
 
  }


  mySort(players:Player[]){
    players.sort((a,b) => (a.score[a.score.length-1] > b.score[b.score.length-1]) ? 1 : ((b.score[b.score.length-1] > a.score[a.score.length-1]) ? -1 : 0))
    // console.log(this.players)
  }

}
