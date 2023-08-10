import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Movie } from 'src/app/models/movie.model';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent {
  addMovieRequest: Movie = {
    id: 0,
    title: '',
    description: '',
    posterImg: '',
    durationTime: 0,
    seances: []
  }
  
  showError: boolean = false;
  showOk: boolean = false;
  showLoader: boolean = false;

  constructor(private moviesService: MoviesService){}

  ngOnInit(): void {
  }
  
  addMovieForm = new FormGroup({
    title: new FormControl('', [
      Validators.required,
    ]),
    description: new FormControl('', [
      Validators.required,
    ]),
    posterImg: new FormControl('', [
      Validators.required
    ]),
    durationTime: new FormControl(0, [
      Validators.required,
      Validators.min(60)
    ])
  });

  addMovie(){
    this.moviesService.addMovie(this.addMovieRequest).
    subscribe({
      next: (movie) => {
        console.log(movie);
      }
    });
  }

  submitForm(){
    if (!this.addMovieForm.valid) {
      this.showError = true;
      this.showLoader = false;
      return;
    }
    this.showLoader = true;
    this.showError = false;

    this.addMovieRequest.title = this.addMovieForm.get('title')!.value;
    this.addMovieRequest.description = this.addMovieForm.get('description')!.value;
    this.addMovieRequest.posterImg = this.addMovieForm.get('posterImg')!.value;
    this.addMovieRequest.durationTime = this.addMovieForm.get('durationTime')!.value;
    this.addMovie();
    this.showLoader = false;
  }
}
