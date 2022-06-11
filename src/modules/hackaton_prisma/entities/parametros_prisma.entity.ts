import { Parametros } from 'src/modules/hackaton_typeorm/entities/parametros.entity';

export class ParametrosEntity implements Parametros {
  iGrupoRealize: number;
  iAnoMes: number;
  iItemRealize: number;
  vItemRealize: String;
  iItemRealizePai: number;
  iItemMetaSidem: number;
  vFormulaDesc: String;
  vFormula: String;
  vFormula2: String;
  vFormulaPC: String;
  fPeso: number;
  fPontuacaoMinima: number;
  fPontuacaoMinima2: number;
  fPontuacaoMaxima: number;
  fPontuacaoMaxima2: number;
  dAtualizacaoItemMetaSidem: String;
  iOrdemRealize: number;
  dReferencia: String;
  idArquivo: number;
  iPeso: number;
}
