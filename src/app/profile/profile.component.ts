import { Component, OnInit, Input } from '@angular/core';
import { Teams } from '../teams';
import { Team } from '../team';
import { DataService } from '../data.service';
import { Match } from '../match';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  teams : Teams[];
  selectedTeam: Team;
  team : Team[];
  finishedMatches : Match[];
  scheduledMatches : Match[];

  constructor(private data:DataService) { }

  ngOnInit() {
    this.getTeams();
    this.getTeam();
    
  }

  onSelect(team: Team):void{
    this.selectedTeam = team;
  }

  getTeams(): void {
    this.data.getTeams().subscribe(Teams => {
      this.teams = Teams
      console.log(this.team)
    });
  }
  
  getTeam(): void {
    this.data.getTeams().subscribe(Team => {
      this.teams = Team
      console.log(this.team)
    });
  }

  getFinishedMatches():void{
    this.data.getFinishedMatches().subscribe(match=> {
      this.finishedMatches=match
      console.log(this.finishedMatches)
    })
  }

  getScheduledMatches():void{
    this.data.getScheduledMatches().subscribe(match=> {
      this.scheduledMatches=match
      console.log(this.scheduledMatches)
    })
  }
  
}
