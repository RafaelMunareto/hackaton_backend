import { IsNumber, IsString } from 'class-validator';

export class CreateRealizeDto {
  @IsNumber()
  readonly iAnoMes: number;
  @IsNumber()
  readonly iNichoRealize: number;
  @IsNumber()
  readonly iItemRealize: number;
  @IsNumber()
  readonly iNivelRede: number;
  @IsNumber()
  readonly iCgcUnidade: number;
  @IsNumber()
  readonly iNaturalUnidade: number;
  @IsNumber()
  readonly nObjetivoAcumulado: number;
  @IsNumber()
  readonly nRealizadoAcumulado: number;
  @IsNumber()
  readonly fPercRealizado: number;
  @IsNumber()
  readonly fPercEsperado: number;
  @IsNumber()
  readonly fPercAtingido: number;
  @IsNumber()
  readonly fPonto: number;
  @IsNumber()
  readonly iGrupoRealize: number;
  @IsNumber()
  readonly fPesoOficial: number;
  @IsNumber()
  readonly fPesoReal: number;
  @IsString()
  readonly iCgcUnidadeSuperior: string;
  @IsNumber()
  readonly iCgcVp: number;
  @IsString()
  readonly iAvaliacao: string;
  @IsString()
  readonly dReferencia: string;
  @IsString()
  readonly dAtualizacaoItemMetaSidem: string;
  @IsString()
  readonly idArquivo: string;
}
