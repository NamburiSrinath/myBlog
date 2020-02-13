import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { BooksComponent } from './books/books.component';
import { MoviesComponent } from './movies/movies.component';
import { StudiesComponent } from './studies/studies.component';
import { DiscussionsComponent } from './discussions/discussions.component';


const routes: Routes = [
  // {path: '', redirectTo: '', pathMatch: 'full'},
  {path: 'aboutme', component: AboutMeComponent},
  {path: 'books', component: BooksComponent},
  {path: 'movies', component: MoviesComponent},
  {path: 'studies', component: StudiesComponent},
  {path: 'discussions', component: DiscussionsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
