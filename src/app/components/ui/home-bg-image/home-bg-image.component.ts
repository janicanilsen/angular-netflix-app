import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/Movies';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home-bg-image',
  templateUrl: './home-bg-image.component.html',
  styleUrls: ['./home-bg-image.component.css'],
})
export class HomeBgImageComponent implements OnInit {
  movie: Movie = <Movie>{};
  imagePath: string = '';

  constructor(private movieService: MoviesService) {
    movieService.displayMovieSubject.subscribe((value) => {
      this.movie = value;
      this.imagePath =
        this.movie &&
        'url(' +
          this.movieService.imageBaseUrl +
          this.movieService.imageBaseSize +
          this.movie.backdrop_path +
          ')';
    });
  }

  ngOnInit(): void {}
}
