import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { MainHeaderComponent } from './components/header/main-header/main-header.component';
import { LogoComponent } from './components/header/logo/logo.component';
import { RightNavigationComponent } from './components/header/right-navigation/right-navigation.component';
import { MainNavigationComponent } from './components/header/main-navigation/main-navigation.component';
import { SearchFormComponent } from './components/header/search-form/search-form.component';
import { MyListComponent } from './pages/my-list/my-list.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { TvShowsComponent } from './pages/tv-shows/tv-shows.component';
import { MovieListComponent } from './components/movies/movie-list/movie-list.component';
import { MoviePosterComponent } from './components/movies/movie-poster/movie-poster.component';
import { MovieBackdropComponent } from './components/movies/movie-backdrop/movie-backdrop.component';
import { MovieListContainerComponent } from './components/ui/movie-list-container/movie-list-container.component';
import { HomeBgImageComponent } from './components/ui/home-bg-image/home-bg-image.component';
import { MovieDetailsComponent } from './components/movies/movie-details/movie-details.component';
import { MovieDescriptionPipe } from './movie-description.pipe';
import { SearchResultsComponent } from './components/movies/search-results/search-results.component';
import { BackdropComponent } from './components/ui/modal/backdrop/backdrop.component';
import { OverlayComponent } from './components/ui/modal/overlay/overlay.component';
import { MovieModalComponent } from './components/movies/movie-modal/movie-modal.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'movies', component: MoviesComponent },
  { path: 'tv-shows', component: TvShowsComponent },
  { path: 'my-list', component: MyListComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MoviesComponent,
    MainHeaderComponent,
    LogoComponent,
    RightNavigationComponent,
    MainNavigationComponent,
    SearchFormComponent,
    MyListComponent,
    PageNotFoundComponent,
    TvShowsComponent,
    MovieListComponent,
    MoviePosterComponent,
    MovieBackdropComponent,
    MovieListContainerComponent,
    HomeBgImageComponent,
    MovieDetailsComponent,
    MovieDescriptionPipe,
    SearchResultsComponent,
    BackdropComponent,
    OverlayComponent,
    MovieModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes, { enableTracing: false }),
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
