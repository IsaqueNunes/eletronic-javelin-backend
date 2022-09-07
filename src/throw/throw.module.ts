import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ThrowController } from './throw.controller';
import { ThrowService } from './throw.service';

@Module({
  controllers: [ThrowController],
  providers: [PrismaService, ThrowService],
})
export class ThrowModule {}
