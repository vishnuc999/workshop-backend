import { Injectable } from '@nestjs/common';
import { CreateBookingDto } from 'src/dto/bookings.dto';

@Injectable()
export class BookingsService {

  addBooking(request: CreateBookingDto) {
    return {
      "trainId": 6,
      "message": "Ticket booked successfully"
    };
  }

  getBookings(userId: number) {
    return {
      "trainId": 6,
      "message": "Ticket fetched successfully"
    };
  }

}
