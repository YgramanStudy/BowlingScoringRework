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
    this.dataService.getScore().subscribe(players =>this.mySort(this.players =players));
  }


  mySort(players: Player[]) {
    players.sort((a, b) => {
      const totalScoreA = a.score.reduce((acc, val) => acc + val, 0);
      const totalScoreB = b.score.reduce((acc, val) => acc + val, 0);
      return totalScoreB - totalScoreA;
    });
  }

}
