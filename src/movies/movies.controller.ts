import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import { create } from 'domain';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }

  @Get('/:id')
  getOne(@Param('id') movieID: number): Movie {
    console.log(typeof movieID);
    return this.moviesService.getOne(movieID);
  }

  @Post()
  create(@Body() movieData: CreateMovieDto) {
    return this.moviesService.create(movieData);
  }

  @Delete('/:id')
  remove(@Param('id') movieID: number) {
    return this.moviesService.deleteOne(movieID);
  }
  ///... <- 원소를 나열함.
  //put은 전체 업데이트 할때 patch는 특정 부분만 업데이트할때
  @Patch('/:id')
  patch(@Param('id') movieID: number, @Body() updateData: UpdateMovieDto) {
    return this.moviesService.update(movieID, updateData);
  }
}
