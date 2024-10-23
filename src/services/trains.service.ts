import { Inject, Injectable } from '@nestjs/common';
import { QueryTypes } from 'sequelize';
import { Sequelize } from 'sequelize-typescript';
import { AddTrainDto, UpdateTrainDto } from 'src/dto/train.dto';

@Injectable()
export class TrainsService {
  constructor(
    @Inject('SEQUELIZE') private sequelize: Sequelize,
  ) {}

  addTrain(request: AddTrainDto) {
    return {
      "trainId": 6,
      "message": "Train added successfully"
    };
  }

  updateTrain(request: UpdateTrainDto, trainId: number) {
    return {
      "trainId": 6,
      "message": "Train updated successfully"
    };
  }
  deleteTrain(trainId: number) {
    return {
      "trainId": 6,
      "message": "Train deleted successfully"
    };
  }


  async getTrains(source: string, destination: string, date: Date){
    console.log(source, destination, date);
    
    let query = `
            SELECT 
                t.TrainId,
                t.Name,
                t.Source,
                t.Destination,
                t.DepartureTime,
                t.ArrivalTime,
                t.TotalSeats,
                t.TotalSeats -  COALESCE(SUM(b.SeatCount), 0) AS AvailableSeats
            FROM 
                Trains t
            LEFT JOIN 
                Bookings b ON t.TrainId = b.TrainId
            WHERE 
                t.IsActive = 1 AND t.IsDeleted = 0 
                AND Date(DepartureTime) = :departureTime
                AND destination = :destination
                AND source = :source
            GROUP BY t.TrainId
        `;

    return await this.sequelize.query(query, {
      type: QueryTypes.SELECT,
      replacements: { source, destination, departureTime: date },
    });
  }
}
