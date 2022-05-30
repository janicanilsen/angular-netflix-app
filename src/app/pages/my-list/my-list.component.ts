import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Constants } from 'src/app/constants';
import { Movie } from 'src/app/Movies';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.css'],
})
export class MyListComponent implements OnInit, OnDestroy {
  myMovieList: Movie[] = [];
  gridView: string = Constants.GRID_VIEW;
  listCategory: string = Constants.MY_LIST;
  searchText: string = '';
  searchResults: Movie[] = [];
  searchSubscription: Subscription = new Subscription();
  listSubscription: Subscription = new Subscription();

  constructor(private movieService: MoviesService) {}

  ngOnInit(): void {
    this.myMovieList = this.movieService.myMovieList;
    this.searchSubscription = this.movieService.searchTextSubject.subscribe(
      (value) => {
        this.searchText = value;
        this.searchResults = this.movieService.searchResults;
      }
    );
    this.listSubscription = this.movieService.myMovieListSubject.subscribe(
      (value) => {
        this.myMovieList = value;
      }
    );
  }

  ngOnDestroy(): void {
    this.searchSubscription.unsubscribe();
    this.listSubscription.unsubscribe();
  }
}
