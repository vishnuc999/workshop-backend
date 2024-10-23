import { Injectable } from '@nestjs/common';
import { AddTrainDto, UpdateTrainDto } from 'src/dto/train.dto';

@Injectable()
export class TrainsService {

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

  getTrains(source: string, destination: string, date: Date){
    return {
      "trainId": 6,
      "message": "Train fetched successfully"
    };
  }
}
