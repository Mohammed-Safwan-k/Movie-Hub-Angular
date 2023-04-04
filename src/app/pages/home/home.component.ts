import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private service: MovieApiServiceService) {}

  bannerResult: any = [];
  trendingMovieResult: any = [];
  actionMovieResult: any = [];
  adventureMovieResult: any = [];
  animationMovieResult: any = [];
  comedyMovieResult: any = [];
  documentaryMovieResult: any = [];
  sciencefictionMovieResult: any = [];
  thrillerMovieResult: any = [];

  ngOnInit(): void {
    this.bannerData();
    this.trendingData();
    this.actionMovie();
    this.adventureMovie();
    this.animationMovie();
    this.comedyMovie();
    this.documentaryMovie();
    this.scienceFictionMovie();
    this.thrillerMovie();
  }

  //bannerdata
  bannerData() {
    this.service.bannerApiData().subscribe((result) => {
      console.log(result, 'banner result');
      this.bannerResult = result.results;
    });
  }

  //trendingdata
  trendingData() {
    this.service.trendingMovieApiData().subscribe((result) => {
      console.log(result, 'trending result');
      this.trendingMovieResult = result.results;
    });
  }

  //action
  actionMovie() {
    this.service.fetchActionMovies().subscribe((result) => {
      console.log(result, 'action result');
      this.actionMovieResult = result.results;
    });
  }

  //adventureMovie
  adventureMovie() {
    this.service.fetchAdventureMovies().subscribe((result) => {
      console.log(result, 'adventure result');
      this.adventureMovieResult = result.results;
    });
  }

  //animationMovie
  animationMovie() {
    this.service.fetchAnimationMovies().subscribe((result) => {
      console.log(result, 'animation result');
      this.animationMovieResult = result.results;
    });
  }

  //comedyMovie
  comedyMovie() {
    this.service.fetchComedyMovies().subscribe((result) => {
      console.log(result, 'comedy result');
      this.comedyMovieResult = result.results;
    });
  }

  //documentaryMovie
  documentaryMovie() {
    this.service.fetchDocumentaryMovies().subscribe((result) => {
      console.log(result, 'documentary result');
      this.documentaryMovieResult = result.results;
    });
  }

  //scienceFictionMovie
  scienceFictionMovie() {
    this.service.fetchScienceFictionMovies().subscribe((result) => {
      console.log(result, 'science fiction result');
      this.sciencefictionMovieResult = result.results;
    });
  }

  //thrillerMovie
  thrillerMovie() {
    this.service.fetchThrillerMovies().subscribe((result) => {
      console.log(result, 'thriller result');
      this.thrillerMovieResult = result.results;
    });
  }
}
