import { Component, Input, OnInit } from '@angular/core';
import { Constants } from 'src/app/constants';
import { Movie } from 'src/app/Movies';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  @Input() searchResults: Movie[] = [];
  @Input() searchText: string = '';
  searchMatches: string = Constants.SEARCH_MATCHES;

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {}

}
