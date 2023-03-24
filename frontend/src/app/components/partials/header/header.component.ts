import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Player } from 'src/app/shared/models/player';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  players:Player[] =[];
  constructor(private dataService:DataService,
    private router: Router,
    private activatedRoute:ActivatedRoute,) { }

  ngOnInit(): void {}
  
  startNewGame(){   
    this.router.navigateByUrl('');   
  }

}
