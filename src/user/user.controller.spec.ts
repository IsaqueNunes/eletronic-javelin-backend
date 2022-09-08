import { Test } from '@nestjs/testing';
import { User } from '@prisma/client';
import { PrismaService } from '../prisma.service';
import { UserController } from './user.controller';
import { UserService } from './user.service';

describe('UserController', () => {
  let userController: UserController;
  let userService: UserService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService, PrismaService],
    }).compile();

    userService = moduleRef.get<UserService>(UserService);
    userController = moduleRef.get<UserController>(UserController);
  });

  describe('create', () => {
    it('should create an user', async () => {
      const result: User = {
        id: 'asdf',
        name: 'Isaque Nunes',
        email: 'isaque.nunes@estudante.ifms.edu.br',
        password: '1234',
      };

      jest.spyOn(userService, 'create').mockImplementation(async () => result);

      expect(
        await userController.create({
          id: 'asdf',
          name: 'Isaque Nunes',
          email: 'isaque.nunes@estudante.ifms.edu.br',
          password: '1234',
        }),
      ).toBe(result);
    });
  });

  describe('find', () => {
    it('should return an array of users', async () => {
      const result: User[] = [
        {
          id: 'asdf',
          name: 'Isaque Nunes',
          email: 'isaque.nunes@estudante.ifms.edu.br',
          password: '1234',
        },
        {
          id: 'fdsa',
          name: 'Test Testing',
          email: 'test.testing@estudante.ifms.edu.br',
          password: '4321',
        },
      ];

      jest.spyOn(userService, 'list').mockImplementation(async () => result);

      expect(await userController.list()).toBe(result);
    });
  });
});
