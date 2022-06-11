import { IsNumber, IsString } from 'class-validator';

export class CreateParametrosPrismaDto {
  @IsNumber()
  readonly iGrupoRealize: number;
  @IsNumber()
  readonly iAnoMes: number;
  @IsNumber()
  readonly iItemRealize: number;
  @IsString()
  readonly vItemRealize: string;
  @IsNumber()
  readonly iItemRealizePai: number;
  @IsNumber()
  readonly iItemMetaSidem: number;
  @IsString()
  readonly vFormulaDesc: string;
  @IsString()
  readonly vFormula: string;
  @IsString()
  readonly vFormula2: string;
  @IsString()
  readonly vFormulaPC: string;
  @IsNumber()
  readonly fPeso: number;
  @IsNumber()
  readonly fPontuacaoMinima: number;
  @IsNumber()
  readonly fPontuacaoMinima2: number;
  @IsNumber()
  readonly fPontuacaoMaxima: number;
  @IsNumber()
  readonly fPontuacaoMaxima2: number;
  @IsString()
  readonly dAtualizacaoItemMetaSidem: string;
  @IsNumber()
  readonly iOrdemRealize: number;
  @IsString()
  readonly dReferencia: string;
  @IsNumber()
  readonly idArquivo: number;
  @IsNumber()
  readonly iPeso: number;
}
