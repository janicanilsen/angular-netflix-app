import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Constants } from 'src/app/constants';
import { Movie, MovieCategories } from 'src/app/Movies';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit, OnDestroy {
  popularMovies: Movie[] = [];
  topRatedMovies: Movie[] = [];
  popularTVShows: Movie[] = [];
  topRatedTVShows: Movie[] = [];
  searchText: string = '';
  searchResults: Movie[] = [];
  categories: MovieCategories = {
    POPULAR_MOVIES: Constants.POPULAR_MOVIES,
    TOP_RATED_TV_SHOWS: Constants.TOP_RATED_TV_SHOWS,
    TOP_RATED_MOVIES: Constants.TOP_RATED_MOVIES,
    POPULAR_TV_SHOWS: Constants.POPULAR_TV_SHOWS
  };
  viewMode: string = Constants.SLIDER_VIEW;
  searchSubscription: Subscription = new Subscription();

  constructor(private movieService: MoviesService) {
    //we need this so we can display "Loading"
    //and gets updated when it's done fetching data
    movieService.popularMovies$.subscribe((value) => {
      this.popularMovies = movieService.popularMovies;
    });
    movieService.topRatedMovies$.subscribe(
      (value) => (this.topRatedMovies = movieService.topRatedMovies)
    );
    movieService.popularTVShows$.subscribe(
      (value) => (this.popularTVShows = movieService.popularTVShows)
    );
    movieService.topRatedTVShows$.subscribe(
      (value) => (this.topRatedTVShows = movieService.topRatedTVShows)
    );
  }

  ngOnInit(): void {
    //have to assign again every time component loads
    //or else, we'll end up with empty array
    this.popularMovies = this.movieService.popularMovies;
    this.topRatedMovies = this.movieService.topRatedMovies;
    this.topRatedTVShows = this.movieService.topRatedTVShows;
    this.popularTVShows = this.movieService.popularTVShows;

    this.searchSubscription = this.movieService.searchTextSubject.subscribe(value => {
      this.searchText = value;
      this.searchResults = this.movieService.searchResults;
    });
  }

  ngOnDestroy(): void {
    this.searchSubscription.unsubscribe();
  }
}
