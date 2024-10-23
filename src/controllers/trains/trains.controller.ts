import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { AddTrainDto, UpdateTrainDto } from 'src/dto/train.dto';
import { TrainsService } from 'src/services/trains.service';
@Controller('trains')
export class TrainsController {
    constructor(private readonly trainsService: TrainsService) { }

    @Post()
    addTrain(@Body() request: AddTrainDto) {
        return this.trainsService.addTrain(request);
    }

    @Put(':trainId')
    updateTrain(@Body() request: UpdateTrainDto, @Param('trainId', ParseIntPipe) trainId: number) {
        return this.trainsService.updateTrain(request, trainId);
    }

    @Delete(':trainId')
    deleteTrain(@Param('trainId', ParseIntPipe) trainId: number) {
        return this.trainsService.deleteTrain(trainId);
    }

    @Get()
    getTrains(@Query('source') source: string, @Query('destination') destination: string, @Query('destination') date: Date) {
        return this.trainsService.getTrains(source, destination, date);
    }
}
