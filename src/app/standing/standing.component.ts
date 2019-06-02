import { Component, OnInit } from '@angular/core';
import { Team } from '../team';
import { Standing } from '../standing';
import { DataService } from '../data.service';


@Component({
  selector: 'app-standing',
  templateUrl: './standing.component.html',
  styleUrls: ['./standing.component.css']
})
export class StandingComponent implements OnInit {

  standings : Standing[];

  constructor(private data: DataService) { }

  ngOnInit() {
    this.getStandings();
  }

  getStandings(): void {
    this.data.getStandings().subscribe(standing => {
      this.standings = standing
      console.log(this.standings)
    });
  }

}
