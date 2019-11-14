import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { getConnection, Repository } from "typeorm";

import { Person } from "./person.entity";

@Injectable()
export class PersonService {
    constructor(
        @InjectRepository(Person)
        private readonly personRepository: Repository<Person>,
    ) { }

    async getColumns(): Promise<string[]> {
        return await getConnection().getMetadata(Person).ownColumns.map(column => column.propertyName);
    }

    async findByColumn(column: string): Promise<any[]> {
        let person;
        try {
            person = await this.personRepository.createQueryBuilder('person')
                .select(`person.${column}`, 'value')
                .addSelect('COUNT(*)', 'count')
                .addSelect('ROUND(AVG(person.age), 1)', 'averageAge')
                .groupBy(`person.${column}`)
                .limit(100)
                .orderBy('count', 'DESC')
                .getRawMany();
        } catch (error) {
            throw `No such column: ${column}`;
        }
        return person;
    }
}

