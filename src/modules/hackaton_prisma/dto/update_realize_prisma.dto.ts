import { PartialType } from '@nestjs/mapped-types';
import { CreateRealizePrismaDto } from './create_realize_prisma.dto';

export class UpdateRealizePrisma extends PartialType(CreateRealizePrismaDto) {}
