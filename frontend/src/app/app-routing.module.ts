import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamePageComponent } from './components/pages/game-page/game-page.component';
import { PlayerPageComponent } from './components/pages/player-page/player-page.component';
import { ScorePageComponent } from './components/pages/score-page/score-page.component';
import { StartPageComponent } from './components/pages/start-page/start-page.component';


const routes: Routes = [
  {path: '',redirectTo: "/start_page",pathMatch: 'full'},
  {path: "start_page", component:StartPageComponent, pathMatch: 'full'},
  {path: "start_page/player_page", component:PlayerPageComponent},
  {path: "start_page/player_page/game_page", component:GamePageComponent},
  {path: "start_page/player_page/game_page/score", component:ScorePageComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
