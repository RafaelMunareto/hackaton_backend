import { PartialType } from '@nestjs/mapped-types';
import { CreateRealizeDto } from './create_realize_dto';

export class UpdateRealizeDto extends PartialType(CreateRealizeDto) {}