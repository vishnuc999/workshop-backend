import { Module } from '@nestjs/common';
import { databaseProvider } from 'src/configuration/database.provider';
import { AppController } from 'src/controllers/app.controller';
import { BookingsController } from 'src/controllers/bookings/bookings.controller';
import { TrainsController } from 'src/controllers/trains/trains.controller';
import { AppService } from 'src/services/app.service';
import { BookingsService } from 'src/services/bookings.service';
import { TrainsService } from 'src/services/trains.service';

@Module({
  imports: [],
  controllers: [AppController, TrainsController, BookingsController],
  providers: [AppService, TrainsService, BookingsService, databaseProvider,],
})
export class AppModule {}
