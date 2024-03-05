import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {

  constructor(private http: HttpClient) { }

  baseUrl = 'https://api.themoviedb.org/3'
  apikey = 'd5ab7fc26b1d7286e6674614ce58ea5a'

  // fetch banner data
  bannerApiData():Observable<any>{
    return this.http.get(`${this.baseUrl}/trending/all/week?api_key=${this.apikey}`)
  }

  // fetch trending data
  trendingMovieApiData():Observable<any>{
    return this.http.get(`${this.baseUrl}/trending/movie/day?api_key=${this.apikey}`)
  }

  getSearchMovie(data: any): Observable<any>{
    return this.http.get(`${this.baseUrl}/search/movie?api_key=${this.apikey}&query=${data.movieName}`)
  }

  getMovieDetails(data: any):Observable<any>{
    return this.http.get(`${this.baseUrl}/movie/${data}?api_key=${this.apikey}`)
  }

  getMovieVideo(data: any): Observable<any>{
    return this.http.get(`${this.baseUrl}/movie/${data}/videos?api_key=${this.apikey}`)
  }

  getMovieCast(data: any): Observable<any>{
    return this.http.get(`${this.baseUrl}/movie/${data}/credits?api_key=${this.apikey}`)
  }

  // action 
  fetchActionMovies(): Observable<any> {
    return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apikey}&with_genres=28`);
  }

  // adventure
  fetchAdventureMovies(): Observable<any> {
    return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apikey}&with_genres=12`);
  }

  // animation
  fetchAnimationMovies(): Observable<any> {
    return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apikey}&with_genres=16`);
  }

  // comedy
  fetchComedyMovies(): Observable<any> {
    return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apikey}&with_genres=35`);
  }

  // documentary
  fetchDocumentaryMovies(): Observable<any> {
    return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apikey}&with_genres=99`);
  }

  // science-fiction:878

  fetchScienceFictionMovies(): Observable<any> {
    return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apikey}&with_genres=878`);
  }

  // thriller:53
  fetchThrillerMovies(): Observable<any> {
    return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apikey}&with_genres=53`);
  }
}
