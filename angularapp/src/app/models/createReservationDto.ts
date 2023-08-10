export class CreateReservationDto {
    seanceId!: number;
    userId!: number;
    seatsId: number[] = [];
    startDate!: Date;
  }