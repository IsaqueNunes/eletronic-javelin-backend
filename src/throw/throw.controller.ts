import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Prisma, Throw as ThrowModel } from '@prisma/client';
import { ThrowService } from './throw.service';

type CreateThrowDTO = {
  throw: Prisma.ThrowCreateManyInput;
  altitudes: Prisma.ThrowAltitudeCreateWithoutThrowInput[];
  angles: Prisma.ThrowAnglesCreateWithoutThrowInput[];
};

@Controller('throw')
export class ThrowController {
  constructor(private readonly throwService: ThrowService) {}

  @Post()
  async create(@Body() throwData: CreateThrowDTO): Promise<ThrowModel> {
    return this.throwService.create({
      User: { connect: { id: throwData.throw.userId } },
      ThrowAltitude: { createMany: { data: throwData.altitudes } },
      ThrowAngles: { createMany: { data: throwData.angles } },
      dateTime: throwData.throw.dateTime,
    });
  }

  @Get(':user_id')
  async listByUser(@Param('user_id') userId): Promise<
    Prisma.ThrowGetPayload<{
      select: {
        id: true;
        dateTime: true;
        ThrowAltitude: {
          select: {
            id: true;
            altitude: true;
          };
        };
        ThrowAngles: {
          select: {
            id: true;
            x: true;
            y: true;
            z: true;
          };
        };
      };
    }>[]
  > {
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
