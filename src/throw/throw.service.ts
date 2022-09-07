import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Throw, Prisma } from '@prisma/client';

@Injectable()
export class ThrowService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.ThrowCreateInput): Promise<Throw> {
    return this.prisma.throw.create({ data });
  }

  async find(
    throwWhereUniqueInput: Prisma.ThrowWhereUniqueInput,
  ): Promise<Throw | null> {
    return this.prisma.throw.findUnique({ where: throwWhereUniqueInput });
  }

  async list(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.ThrowWhereUniqueInput;
    where?: Prisma.ThrowWhereInput;
    orderBy?: Prisma.ThrowOrderByWithRelationInput;
  }): Promise<Throw[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.throw.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async delete(where: Prisma.ThrowWhereUniqueInput): Promise<Throw> {
    return this.prisma.throw.delete({ where });
  }
}
