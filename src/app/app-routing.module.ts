import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmDetailsComponent } from './pages/film-details/film-details.component';
import { FilmSubmissionsComponent } from './pages/film-submissions/film-submissions.component';
const routes: Routes = [
{
  path:'',
  component: FilmSubmissionsComponent,
  pathMatch: 'full'
},
{
  path:'film-details',
  component:FilmDetailsComponent
},
{
  path: '**',
  redirectTo:''
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
