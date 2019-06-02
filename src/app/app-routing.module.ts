import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatchesComponent } from './matches/matches.component';
import { StandingComponent } from './standing/standing.component';
import { TeamComponent } from './team/team.component';
import { ProfileComponent } from './profile/profile.component';
import { PlayerComponent } from './player/player.component';

const routes: Routes = [
  {path:'standing',component:StandingComponent},
  {path:'matches',component:MatchesComponent},
  {path:'team',component:TeamComponent},
  {
    path:'profile',component:ProfileComponent,
    children:[
      {path:'team',component:TeamComponent},
      {path:'matches',component:MatchesComponent}
      // {path:'',component:}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
