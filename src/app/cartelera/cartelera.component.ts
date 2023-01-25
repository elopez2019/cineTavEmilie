import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


import { MovieService } from '../movie.service';
import { MovieInterface } from '../interfaces/movie.interface';
import { IdGeneratorService } from '../id-generator.service';

interface MovieResponse {
  status: number;
  error: any;
  response: number;
}

interface MovieI {
  id: number;
  title: string;
  director: string;
  release_date: string;
  genre: string;
}



@Component({
  selector: 'app-cartelera',
  templateUrl: './cartelera.component.html',
  styleUrls: ['./cartelera.component.css']
})
export class CarteleraComponent {


  formGroup: FormGroup;
  private baseUrl = 'http://localhost:3000/movies';
  movies: any;
  message: any;
  tempReleaseDate: Date;



  constructor(private http: HttpClient, private movieService: MovieService, private idGenerator: IdGeneratorService) { 
    this.tempReleaseDate = new Date();

      this.formGroup = new FormGroup({
        id: new FormControl(this.idGenerator.generateId()),
        title: new FormControl(''),
        director: new FormControl(''),
        release_date: new FormControl(''),
        genre: new FormControl('')
      });

      this.getMovies();
  }

  ngOnInit() {
    this.movieService.getMovies().subscribe(data => {
      //console.log('DataM', data);
    });
  }
  
    onNameChanged(value: any) {
      console.log('F ', value);
    }
  
    onAgeChanged(value: any) {
      console.log(value);
    }
  
    getMovies() {
      this.http.get<MovieResponse>('http://localhost:3000/movies').subscribe(data => {
        this.movies = data;
      });
    }

    
   editMovie(movie: MovieI) {
    let date = new Date(Date.parse(movie.release_date));
    this.http.put('http://localhost:3000/movies/' + movie.id, movie).subscribe(res => {
      console.log(res);
    });
    /*this.movieService.updateMovie(movie.id, movie).subscribe(data => {
      console.log(data);

    })*/
  }

  deleteMovie(movie: MovieI) {
    this.http.delete('http://localhost:3000/movies/' + movie.id).subscribe(res => {
      console.log(res);
      this.message = "Pelicula eliminada con éxito";
      this.getMovies();
    });
  }

  // send data
  postForm(formGroup: MovieInterface) {
    //formGroup.release_date = this.tempReleaseDate.toISOString();
    let date = new Date(Date.parse(formGroup.release_date));
    console.log('form ', formGroup, date);

    this.movieService.postMovie(formGroup).subscribe(data => {
    this.message = "Pelicula agregada con éxito";
    this.getMovies();
    });
    
    this.formGroup = new FormGroup({
      id: new FormControl(this.idGenerator.generateId()),
      title: new FormControl(''),
      director: new FormControl(''),
      release_date: new FormControl(''),
      genre: new FormControl('')
    });
  }
}
