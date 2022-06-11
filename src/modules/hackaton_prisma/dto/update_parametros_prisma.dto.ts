import { PartialType } from '@nestjs/mapped-types';
import { CreateParametrosDto } from 'src/modules/hackaton_typeorm/dto/create_parametros_dto';

export class UpdateParametrosPrisma extends PartialType(CreateParametrosDto) {}
