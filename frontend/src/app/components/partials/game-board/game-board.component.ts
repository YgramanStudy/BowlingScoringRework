import { Component, OnInit, Input } from '@angular/core';
import { Player } from 'src/app/shared/models/player';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit {
  @Input() current_player!:Player;
  constructor() { }

  ngOnInit(): void {
  }

}
