import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/Movies';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  movie: Movie = <Movie>{};
  movieTrimmedDescription: string = '';
  movieIsOnList: boolean = false;

  constructor(private movieService: MoviesService) {
    movieService.displayMovieSubject.subscribe((value) => {
      this.movie = value;
      this.movieIsOnList = movieService.myMovieList.some(
        (listMovie) => this.movie.id === listMovie.id
      );
    });
  }

  ngOnInit(): void {}

  addRemoveList() {
    if(this.movieIsOnList) {
      this.movieService.removeFromList(this.movie);
      this.movieIsOnList = !this.movieIsOnList;
    }
    else {
      this.movieService.addToList(this.movie);
      this.movieIsOnList = !this.movieIsOnList;
    }
  }
}
