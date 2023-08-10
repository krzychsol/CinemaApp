import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/models/user.model';
import { MoviesService } from 'src/app/services/movies.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-movie-tile',
  templateUrl: './movie-tile.component.html',
  styleUrls: ['./movie-tile.component.scss']
})
export class MovieTileComponent implements OnInit{
  
  @Input() posterImg: string | null = '';
  @Input() id: number = 0;
  @Input() title: string | null = '' ;
  @Input() durationTime: number | null = 0;
  @Input() description: string | null = '';
  
  constructor(
    private userService: UsersService, 
    private movieService: MoviesService,
  ){}

  ngOnInit(): void {
    
  }
  
  deleteMovie(){
    this.movieService.deleteMovie(this.id).subscribe(result => {
      window.location.reload();
    })
  }

  get currentUser(): User | undefined {
    return this.userService.user;
   }
}
