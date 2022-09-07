import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { Prisma, User as UserModel } from '@prisma/client';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() userData: Prisma.UserCreateInput): Promise<UserModel> {
    return this.userService.create(userData);
  }

  @Put(':email')
  async update(
    @Param('email') email,
    @Body() userData: Prisma.UserUpdateInput,
  ): Promise<UserModel> {
    return this.userService.update({ where: { email }, data: userData });
  }

  @Get(':email')
  async findByEmail(@Param('email') email): Promise<UserModel | null> {
    return this.userService.find({ email });
  }

  @Get()
  async list(): Promise<UserModel[]> {
    return this.userService.list({});
  }

  @Delete(':email')
  async delete(@Param('email') email) {
    return this.userService.delete({ email });
  }
}
