import { Test, TestingModule } from '@nestjs/testing';

import { PersonController } from './person.controller';
import { PersonService } from './person.service';

jest.mock('./person.service');

describe('PersonController', () => {
  let personController: PersonController;
  let personService: PersonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PersonController],
      providers: [PersonService],
    }).compile();

    personService = module.get<PersonService>(PersonService);
    personController = module.get<PersonController>(PersonController);
  });

  describe('getColumns()', () => {
    it('should return an array of columns', async () => {
      const result = ['column1', 'column2'];
      jest.spyOn(personService, 'getColumns').mockImplementation(() => Promise.resolve(result));
      expect(await personController.getColumns()).toBe(result);
    });
  });

  describe('findByColumn(column)', () => {
    it('should return an array of person', async () => {
      const result = [{
        value: "value1",
        count: 5,
        averageAge: 35
      }, {
        value: "value2",
        count: 10,
        averageAge: 45
      }];
      jest.spyOn(personService, 'findByColumn').mockImplementation(() => Promise.resolve(result));

      const res = await personController.findByColumn('column1');

      expect(personService.findByColumn).toHaveBeenCalledWith('column1');
      expect(res).toBe(result);
    });
  });
});
