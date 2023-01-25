import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MovieInterface } from './interfaces/movie.interface';
import { ResponseInterface } from './interfaces/responseI.interface';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private baseUrl = 'http://localhost:3000/movies';


  constructor(private http: HttpClient) {
   }

  getMovies(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getMovie(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createMovie(movie: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, movie);
  }

  updateMovie(id: number, value: MovieInterface): Observable<ResponseInterface> {
    return this.http.put<ResponseInterface>(`${this.baseUrl}/${id}`, value);
  }

  deleteMovie(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  addMovie(movie: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, movie);
}

  postMovie(form:MovieInterface):Observable<ResponseInterface> {
    return this.http.post<ResponseInterface>(this.baseUrl, form);
  }
}
