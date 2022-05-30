import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Constants } from 'src/app/constants';
import { Movie } from 'src/app/Movies';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.css'],
})
export class TvShowsComponent implements OnInit, OnDestroy {
  popularTVShows: Movie[] = [];
  topRatedTVShows: Movie[] = [];
  gridView: string = Constants.GRID_VIEW;
  popular: string = Constants.POPULAR_NOW;
  topRated: string = Constants.TOP_RATED;
  searchText: string = '';
  searchResults: Movie[] = [];
  searchSubscription: Subscription = new Subscription();

  constructor(private movieService: MoviesService) {
    movieService.popularTVShows$.subscribe(
      (value) => (this.popularTVShows = value)
    );
    movieService.topRatedTVShows$.subscribe(
      (value) => (this.topRatedTVShows = value)
    );
  }

  ngOnInit(): void {
    this.popularTVShows = this.movieService.popularTVShows;
    this.topRatedTVShows = this.movieService.topRatedTVShows;

    this.searchSubscription = this.movieService.searchTextSubject.subscribe(value => {
      this.searchText = value;
      this.searchResults = this.movieService.searchResults;
    });
  }

  ngOnDestroy(): void {
      this.searchSubscription.unsubscribe();
  }
}
