import { Body, Controller, Get, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { AddTrainDto} from 'src/dto/train.dto';
import { TrainsService } from 'src/services/trains.service';
@Controller('trains')
export class TrainsController {
    constructor(private readonly trainsService: TrainsService) { }

    @Post()
    @UsePipes(ValidationPipe)
    async addTrain(@Body() request: AddTrainDto) {
        const trainId: number = await this.trainsService.addTrain(request);
        return {
          trainId: trainId,
          message: 'Train added successfully',
        };
    }

    @Get()
    async getTrains() {
        return await this.trainsService.getTrains();
    }
}
