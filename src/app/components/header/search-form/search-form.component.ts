import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { filter } from 'rxjs';
import { Constants } from 'src/app/constants';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css'],
})
export class SearchFormComponent implements OnInit {
  searchIcon = faSearch;
  clearSearchIcon = faTimes;
  searchText: string = '';
  searchCategory: string = '';

  constructor(private movieService: MoviesService, private router: Router) {
    //clear search when navigating to another page
    //and set new category
    router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        movieService.clearSearch();
        this.searchText = '';

        const url = router.url;
        if (url.includes('home')) {
          this.searchCategory = Constants.ALL_CATEGORIES;
        } else if (url.includes('movies')) {
          this.searchCategory = Constants.MOVIES;
        } else if (url.includes('tv')) {
          this.searchCategory = Constants.TV_SHOWS;
        } else if (url.includes('list')) {
          this.searchCategory = Constants.MY_LIST;
        }
      });
  }

  ngOnInit(): void {}

  onChange(event: any) {
    this.searchText = event.target.value;
    this.movieService.setSearchResults(this.searchCategory, this.searchText);
  }

  onClear() {
    this.searchText = '';
    this.movieService.clearSearch();
  }
}
