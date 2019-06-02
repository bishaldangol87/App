import { Component, OnInit } from '@angular/core';
import { Match } from '../match';
import { DataService } from '../data.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {

  private finishedMatches:Match[];
  private scheduledMatches:Match[];
  private last5Matches:Match[];
  private selectedMatch: Match;


  constructor(private data:DataService) { }

  ngOnInit() {  
    this.getFinishedMatches();
    this.getScheduledMatches();
    this.getLast5Matches();
  }

  onSelect(match:Match):void{
    this.selectedMatch = match;
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

  getLast5Matches():void{
    this.data.getLast5Matches().subscribe(match=> {
      this.last5Matches=match
      console.log(this.scheduledMatches)
    })
  }

}
