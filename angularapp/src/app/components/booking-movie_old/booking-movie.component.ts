import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Reservation } from 'src/app/models/reservation.model';
import { Seance } from 'src/app/models/seance.model';
import { Seat } from 'src/app/models/seat.model';
import { User } from 'src/app/models/user.model';
import { ReservationService } from 'src/app/services/reservation.service';
import { SeanceService } from 'src/app/services/seance.service';
import { UsersService } from 'src/app/services/users.service';
import { ConfirmComponent } from '../confirm/confirm.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-booking-movie',
  templateUrl: './booking-movie.component.html',
  styleUrls: ['./booking-movie.component.css']
})
export class BookingMovieComponent {
  //faArrowCircleLeft = faArrowCircleLeft;

  id!: number;
  seance!: Seance;
  userId!: number;
  user!: User;
  userPlaceList: Seat[] = new Array();
  reservation: Reservation = { bookedSeance: null, seats: null, isReturnable: false, user: null } as unknown as Reservation;

  constructor(
    private seanceService: SeanceService,
    private userService: UsersService,
    private orderService: ReservationService,
    private router: Router,
    private route: ActivatedRoute,
    private _location: Location,
    public dialog: MatDialog) { }

  onConfirmClick() {
    this.orderService.addReservation(
      {
        seanceId: this.seance.id,
        userId: this.user.Id,
        startDate: this.seance.startDate,
        seatsId: this.userPlaceList.map(p => p.id)
      }).subscribe(result => {
        this.dialog.open(ConfirmComponent);
      });
  }

  // onReturnClick(){
  //   this._location.back();
  // }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.userId = Number(this.route.snapshot.paramMap.get('userId'));
    this.seanceService.getSeanceById(this.id).subscribe(result => {
      this.seance = result;
      console.log(result)
    })
    this.userService.getById(this.userId).subscribe(result => {
      this.user = result;
      console.log(result)
    })

    this.userPlaceList = history.state.data;
    console.log(history.state.data)
  }
}
