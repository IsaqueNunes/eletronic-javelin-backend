import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Prisma, Throw as ThrowModel } from '@prisma/client';
import { ThrowService } from './throw.service';

@Controller('throw')
export class ThrowController {
  constructor(private readonly throwService: ThrowService) {}

  @Post()
  async create(
    @Body() throwData: Prisma.ThrowCreateInput,
  ): Promise<ThrowModel> {
    return this.throwService.create(throwData);
  }

  @Get(':user_id')
  async listByUser(@Param('user_id') userId): Promise<ThrowModel[]> {
    return this.throwService.list({
      where: { userId },
      orderBy: { dateTime: 'desc' },
    });
  }

  @Delete(':id')
  async delete(@Param('id') id): Promise<ThrowModel> {
    return this.throwService.delete({ id: +id });
  }
}
