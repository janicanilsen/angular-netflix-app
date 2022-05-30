import { Component, OnDestroy, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { Movie } from 'src/app/Movies';
import { Constants } from 'src/app/constants';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit, OnDestroy {
  popularMovies: Movie[] = [];
  topRatedMovies: Movie[] = [];
  popular: string = Constants.POPULAR_NOW;
  topRated: string = Constants.TOP_RATED;
  gridView: string = Constants.GRID_VIEW;
  searchText: string = '';
  searchResults: Movie[] = [];
  searchSubscription: Subscription = new Subscription();

  constructor(private movieService: MoviesService) {
    movieService.popularMovies$.subscribe((value) => {
      this.popularMovies = movieService.popularMovies;
    });
    movieService.topRatedMovies$.subscribe((value) => {
      this.topRatedMovies = movieService.topRatedMovies;
    });
  }

  ngOnInit(): void {
    this.popularMovies = this.movieService.popularMovies;
    this.topRatedMovies = this.movieService.topRatedMovies;

    this.searchSubscription = this.movieService.searchTextSubject.subscribe(value => {
      this.searchText = value;
      this.searchResults = this.movieService.searchResults;
    });
  }

  ngOnDestroy(): void {
      this.searchSubscription.unsubscribe();
  }
}
