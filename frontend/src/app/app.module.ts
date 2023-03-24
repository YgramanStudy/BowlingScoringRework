import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartPageComponent } from './components/pages/start-page/start-page.component';
import { PlayerPageComponent } from './components/pages/player-page/player-page.component';
import { GamePageComponent } from './components/pages/game-page/game-page.component';
import { ScorePageComponent } from './components/pages/score-page/score-page.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { PlayerListComponent } from './components/partials/player-list/player-list.component';
import { GameBoardComponent } from './components/partials/game-board/game-board.component';

@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    PlayerPageComponent,
    GamePageComponent,
    ScorePageComponent,
    HeaderComponent,
    PlayerListComponent,
    GameBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
