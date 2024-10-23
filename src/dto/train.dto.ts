import { IsBoolean, IsDate, IsDateString, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class AddTrainDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    source: string;

    @IsString()
    @IsNotEmpty()
    destination: string;

    @IsDateString()
    @IsNotEmpty()
    departureTime: Date;

    @IsDateString()
    @IsNotEmpty()
    arrivalTime: Date;

    @IsNumber()
    @IsNotEmpty()
    totalSeats: number;

    @IsNumber()
    @IsNotEmpty()
    price: number;
}

export class UpdateTrainDto {

    @IsDateString()
    arrivalTime: Date;

    @IsDateString()
    departureTime : Date;

    @IsNumber()
    totalSeats : number;

    @IsBoolean()
    isActive : boolean;
  }

