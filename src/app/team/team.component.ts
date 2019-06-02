import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Team } from '../team';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  team:Team[];
  
  constructor(private data:DataService) { }

  ngOnInit() {
    this.getTeam();
  }
  
  getTeam(){
    this.data.getTeam().subscribe(team=> {
      this.team=team
      console.log(this.team)
    })
  }
}
