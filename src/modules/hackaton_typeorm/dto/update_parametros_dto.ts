import { PartialType } from '@nestjs/mapped-types';
import { CreateParametrosDto } from './create_parametros_dto';

export class UpdateParametrosDto extends PartialType(CreateParametrosDto) {}