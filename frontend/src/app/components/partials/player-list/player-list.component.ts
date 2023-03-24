import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Player } from 'src/app/shared/models/player';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  @Input() players:Player[]=[];
  @Output("updateCorentPlayer") newItemEvent = new EventEmitter<Player>();

  constructor() { }

  ngOnInit(): void {}

  updateCorentPlayer(value:Player){
    this.newItemEvent.emit(value);
  }

}
