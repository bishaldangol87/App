import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Match } from './match';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Team } from './team';
import { Teams } from './teams';
import { Standing } from './standing';

const httpOptionsA = {
	headers: new HttpHeaders ({
		'X-Auth-Token': '6818f4d80fc14af2b29bb6de920223a1'
	})
};

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //URL's/instances
  private matchesURL1 = "http://api.football-data.org/v2/competitions/BSA/matches";
  private finishedMatchesURL = "http://api.football-data.org/v2/teams/6685/matches?status=FINISHED"; //id-6685 = Santos FC (from BSA competitions)
  private scheduledMatchesURL = "http://api.football-data.org/v2/teams/6685/matches?status=SCHEDULED";
  private last5MatchesURL = "http://api.football-data.org/v2/teams/6685/matches?limit=5";
  private teamURL = "http://api.football-data.org/v2/teams/6685";
  private standingsUrl = 'http://api.football-data.org/v2/competitions/BSA/standings'
  private teamsURL = "http://api.football-data.org/v2/competitions/BSA/teams";
  // private URL = "";
  // private URL = "";
  

  constructor(private http:HttpClient) { }

  getFinishedMatches():Observable<Match[]>{
    return this.http.get<Match[]>(this.finishedMatchesURL, httpOptionsA)
  }

  getScheduledMatches():Observable<Match[]>{
    return this.http.get<Match[]>(this.scheduledMatchesURL, httpOptionsA)
  }

  getLast5Matches():Observable<Match[]>{
    return this.http.get<Match[]>(this.last5MatchesURL, httpOptionsA)
  }

  getTeam():Observable<Team[]>{
    return this.http.get<Team[]>(this.teamURL, httpOptionsA)
  }

  getTeams():Observable<Teams[]>{
    return this.http.get<Teams[]>(this.teamsURL, httpOptionsA)
  }

  getStandings(): Observable<Standing[]>{
    return this.http.get<Standing[]>(this.standingsUrl, httpOptionsA)
  }
}
