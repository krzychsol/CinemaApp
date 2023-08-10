import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Movie } from 'src/app/models/movie.model';
import { MoviesService } from 'src/app/services/movies.service';
import { SeanceService } from 'src/app/services/seance.service';

@Component({
  selector: 'app-seances',
  templateUrl: './seances.component.html',
  styleUrls: ['./seances.component.css']
})
export class SeancesComponent {
  error: String = '';
  url: string = '';
  currentTime: number = Date.now();
  seanceDate!: Date
  movie!: Movie

  constructor(private seanceService: SeanceService,
    private movieService: MoviesService,
    private router: Router,
    public dialogRef: MatDialogRef<SeancesComponent>,
    @Inject(MAT_DIALOG_DATA) _data: any) {
      this.movie = _data.movie
     }

  onSeanceClick(id: number){
    //console.log(this.movie.seances.find(e => e.id == id).startDate)
    //console.log(Date.now())
    //if(this.movie.seances.find(e => e.id == id).startDate.valueOf() > Date.now())
      this.url = "seats/" + id;
    //else
    //  this.errorMessage = "This seance is out of date."
  }

  onCancelClick(){
    this.url = '';
    this.dialogRef.close();
  }

  onNextClick(){
    if(!this.url){
      this.error = "Please select any seance."
      return;
    }
    else{
      this.router.navigate([this.url])
      this.dialogRef.close();
    }
  }

  ngOnInit(): void {
  }
}
