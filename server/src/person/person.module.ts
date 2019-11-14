import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { Person } from "./person.entity";
import { PersonController } from "./person.controller";
import { PersonService } from "./person.service";

@Module({
    imports: [TypeOrmModule.forFeature([Person])],
    providers: [PersonService],
    controllers: [PersonController],
    exports: [TypeOrmModule],
})

export class PersonModule { }