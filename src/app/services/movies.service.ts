import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ConfigResponse, Response, Movie } from '../Movies';
import { Constants } from '../constants';
import { BehaviorSubject } from 'rxjs';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  //movie and tv shows array
  popularMovies: Movie[] = [];
  topRatedTVShows: Movie[] = [];
  topRatedMovies: Movie[] = [];
  popularTVShows: Movie[] = [];

  searchResults: Movie[] = [];
  searchTextSubject: BehaviorSubject<string> = new BehaviorSubject('');
  myMovieList: Movie[] = [];
  myMovieListSubject: BehaviorSubject<Movie[]> = new BehaviorSubject<Movie[]>([]);

  //array subjects and observables (for "Loading" display)
  popularMoviesSubject: Subject<Movie[]> = new Subject();
  popularMovies$: Observable<Movie[]> =
    this.popularMoviesSubject.asObservable();

  topRatedTVShowsSubject: Subject<Movie[]> = new Subject();
  topRatedTVShows$: Observable<Movie[]> =
    this.topRatedTVShowsSubject.asObservable();

  topRatedMoviesSubject: Subject<Movie[]> = new Subject();
  topRatedMovies$: Observable<Movie[]> =
    this.topRatedMoviesSubject.asObservable();

  popularTVShowsSubject: Subject<Movie[]> = new Subject();
  popularTVShows$: Observable<Movie[]> =
    this.popularTVShowsSubject.asObservable();

  //image config
  imageBaseUrl: string = '';
  imageBaseSize: string = 'original';

  //movie detail display
  displayMovieSubject!: BehaviorSubject<Movie>;

  constructor(private http: HttpClient) {
    this.fetchImageConfigData()
    .pipe(take(1))
    .subscribe(
      (value) => (this.imageBaseUrl = value.images.base_url)
    );
    this.fetchPopularMovies().subscribe((value: Response) => {
      this.popularMovies = value.results;
      this.popularMoviesSubject.next(this.popularMovies);
      //initial value to display is the first element in popularMovies array
      this.displayMovieSubject = new BehaviorSubject<Movie>(
        this.popularMovies[0]
      );
    });
    this.fetchTopRatedTVShows()
    .pipe(take(1))
    .subscribe((value) => {
      this.topRatedTVShows = value.results;
      this.topRatedTVShowsSubject.next(this.topRatedTVShows);
    });
    this.fetchTopRatedMovies()
    .pipe(take(1))
    .subscribe((value) => {
      this.topRatedMovies = value.results;
      this.topRatedMoviesSubject.next(this.topRatedMovies);
    });
    this.fetchPopularTVShows()
    .pipe(take(1))
    .subscribe((value) => {
      this.popularTVShows = value.results;
      this.popularTVShowsSubject.next(this.popularTVShows);
    });
  }

  fetchPopularMovies(): Observable<Response> {
    return this.http.get<Response>(Constants.GET_POPULAR_MOVIES_URL);
  }

  fetchTopRatedTVShows(): Observable<Response> {
    return this.http.get<Response>(Constants.GET_TOP_RATED_TV_SHOWS_URL);
  }

  fetchTopRatedMovies(): Observable<Response> {
    return this.http.get<Response>(Constants.GET_TOP_RATED_MOVIES_URL);
  }

  fetchPopularTVShows(): Observable<Response> {
    return this.http.get<Response>(Constants.GET_POPULAR_TV_SHOWS_URL);
  }

  fetchImageConfigData(): Observable<ConfigResponse> {
    return this.http.get<ConfigResponse>(
      Constants.API_CONFIG_URL + Constants.API_KEY
    );
  }

  setMovieDetailDisplay(movie: Movie) {
    this.displayMovieSubject.next(movie);
  }

  setSearchResults(category: string, searchText: string): void {
    searchText = searchText;
    let results: Movie[] = [];

    const searchMovies = (list: Movie[]) => {
      return list.filter((movie) =>
        movie && movie.title
          ? movie.title.toLowerCase().includes(searchText.toLowerCase())
          : movie.name &&
            movie.name.toLowerCase().includes(searchText.toLowerCase())
      );
    };

    switch (category) {
      case Constants.ALL_CATEGORIES:
        results = searchMovies(this.popularMovies);
        results = results.concat(searchMovies(this.topRatedTVShows));
        results = results.concat(searchMovies(this.topRatedMovies));
        results = results.concat(searchMovies(this.popularTVShows));
        break;
      case Constants.TV_SHOWS:
        results = searchMovies(this.topRatedTVShows);
        results = results.concat(searchMovies(this.popularTVShows));
        break;
      case Constants.MOVIES:
        results = searchMovies(this.popularMovies);
        results = results.concat(searchMovies(this.topRatedMovies));
        break;
      case Constants.MY_LIST:
        results = searchMovies(this.myMovieList);
        break;
      default:
        console.log('Invalid category @ movies.service.ts ' + category);
    }

    if (
      /* here, we're keeping the old results if there's no matches to satisfy use cases like:
            searchText: 'mannnn' => should still display 'Batman', 'Spider-Man', etc. */
      results.length === 0 &&
      (searchText.includes(this.searchTextSubject.getValue()) ||
        this.searchTextSubject.getValue().includes(searchText))
    ) {
      this.searchTextSubject.next(searchText);
    } else {
      this.searchResults = results;
      this.searchTextSubject.next(searchText);
    }
  }

  clearSearch() {
    this.searchTextSubject.next('');
    this.searchResults = [];
  }

  addToList(movie: Movie) {
    this.myMovieList.push(movie);
    this.myMovieListSubject.next(this.myMovieList);
  }

  removeFromList(movie: Movie) {
    this.myMovieList = this.myMovieList.filter(
      (movieItem) => movie.id !== movieItem.id
    );
    this.myMovieListSubject.next(this.myMovieList);
  }

  resetMovieDetailDisplay() {
    this.displayMovieSubject.next(this.popularMovies[0]);
  }

 }
