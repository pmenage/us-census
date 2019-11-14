import { Controller, Get, Param, HttpException, HttpStatus } from '@nestjs/common';

import { PersonService } from './person.service';

@Controller('person')
export class PersonController {
    constructor(private readonly personService: PersonService) { }

    @Get('columns')
    getColumns(): Promise<string[]> {
        return this.personService.getColumns();
    }

    @Get('find/:column')
    findByColumn(@Param('column') column: string): Promise<any[]> {
        let person;
        try {
            person = this.personService.findByColumn(column);
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.INTERNAL_SERVER_ERROR,
                error: error,
            }, 500);
        }
        return person;
    }
}
