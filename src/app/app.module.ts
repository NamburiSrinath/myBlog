import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { BooksComponent } from './books/books.component';
import { MoviesComponent } from './movies/movies.component';
import { StudiesComponent } from './studies/studies.component';
import { DiscussionsComponent } from './discussions/discussions.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    BooksComponent,
    MoviesComponent,
    StudiesComponent,
    DiscussionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
