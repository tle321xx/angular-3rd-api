import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from '../../services/movie-api-service.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css',
})
export class MovieDetailsComponent implements OnInit {
  constructor(
    private service: MovieApiServiceService,
    private router: ActivatedRoute
  ) {}

  getMovieDetailResult: any;
  getMovieVideoResult: any;
  getMovieCastResult: any;

  ngOnInit(): void {
    let getParamId = this.router.snapshot.paramMap.get('id');
    console.log(getParamId);
    this.getMovie(getParamId);
    this.getVideo(getParamId);
    this.getCast(getParamId);
  }

  getMovie(id: any) {
    this.service.getMovieDetails(id).subscribe((res) => {
      console.log('getMovieId', res);
      this.getMovieDetailResult = res;
    });
  }

  getVideo(id: any) {
    this.service.getMovieVideo(id).subscribe((res) => {
      console.log('get Movie video', res);
      res.results?.forEach((element: any) => {
        if (element.type == 'Trailer') {
          this.getMovieVideoResult = element.key;
        }
      });
    });
  }

  getCast(id: any) {
    this.service.getMovieCast(id).subscribe((res) => {
      console.log('getCast', res);
      this.getMovieCastResult = res.cast;
      
    });
  }
}
