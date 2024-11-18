import { Module } from '@nestjs/common';
import { databaseProvider, TrainsProvider } from 'src/configuration/database.provider';
import { AppController } from 'src/controllers/app.controller';
import { TrainsController } from 'src/controllers/trains/trains.controller';
import { AppService } from 'src/services/app.service';
import { TrainsService } from 'src/services/trains.service';

@Module({
  imports: [],
  controllers: [AppController, TrainsController],
  providers: [AppService, TrainsService, databaseProvider, TrainsProvider],
})
export class AppModule {}
