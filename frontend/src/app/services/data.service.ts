import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay} from "rxjs/operators";

import { Player } from '../shared/models/player';


import { PLAYERS_URL, CREATE_PLAYER_URL,  DELETE_ALL_PLAYERS_URL, UPDATE_FRAME_URL,GET_SCORE_URL} from '../shared/constants/urls';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getAllPlayers():Observable<Player[]>{
      return this.http.get<Player[]>(PLAYERS_URL);
  }

  // by object
  createNewPlayer(player:Player):Observable<Player[]>{
    return this.http.post<Player[]>(CREATE_PLAYER_URL,{"playerObj":player,httpOptions,});
  }

  deletePlayers():Observable<any>{
    return this.http.delete<any>(DELETE_ALL_PLAYERS_URL).pipe(delay(10));   
  }

  updateFrame(playerId:Number,frameData:number[]):Observable<Player[]>{
    return this.http.post<Player[]>(UPDATE_FRAME_URL,{"playerId":playerId,"frameData":frameData,httpOptions,});

  }

  getScore():Observable<Player[]>{
    return this.http.get<Player[]>(GET_SCORE_URL);
  }

}


