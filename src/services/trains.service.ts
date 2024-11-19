import { Inject, Injectable } from '@nestjs/common';
import { QueryTypes } from 'sequelize';
import { Sequelize } from 'sequelize-typescript';
import { AddTrainDto } from 'src/dto/train.dto';
import { Train } from 'src/entity/train.entity';

@Injectable()
export class TrainsService {
  constructor(
    @Inject('SEQUELIZE') private sequelize: Sequelize,
    @Inject('TRAINS_REPOSITORY') private _trainsRepository: typeof Train,
  ) {}

  async addTrain(request: AddTrainDto) {
    const createdTrain: Train = await this._trainsRepository.create({
      name: request.name,
      source: request.source,
      destination: request.destination,
      endTime: request.endTime,
      startTime: request.startTime,
      totalSeats: request.totalSeats,
      price: request.price,
    });
    return createdTrain.trainId;
  }

   async getTrains(){    
    let query = `
            SELECT 
                t.trainId,
                t.name,
                t.source,
                t.destination,
                t.startTime,
                t.endTime,
                t.totalSeats,
                t.totalSeats -  COALESCE(SUM(b.SeatCount), 0) AS availableSeats
            FROM 
                Trains t
            LEFT JOIN 
                Bookings b ON t.trainId = b.trainId
            WHERE 
                t.isActive = 1 AND t.isDeleted = 0 
            GROUP BY t.trainId
        `;

    const data = await this.sequelize.query(query, {
      type: QueryTypes.SELECT
    });
    return data;
  }
}
