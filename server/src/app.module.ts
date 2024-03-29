import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonModule } from './person/person.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    PersonModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
