import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { AddTrainDto, UpdateTrainDto } from 'src/dto/train.dto';
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
    async getTrains(@Query('source') source: string, @Query('destination') destination: string, @Query('date') date: Date) {
        return await this.trainsService.getTrains(source, destination, date);
    }
}
