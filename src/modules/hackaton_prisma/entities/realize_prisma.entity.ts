import { Realize } from 'src/modules/hackaton_typeorm/entities/realize.entity';

export class RealizePrismaEntity implements Realize {
  iAnoMes: number;
  iNichoRealize: number;
  iItemRealize: number;
  iNivelRede: number;
  iCgcUnidade: number;
  iNaturalUnidade: number;
  nObjetivoAcumulado: number;
  nRealizadoAcumulado: number;
  fPercRealizado: number;
  fPercEsperado: number;
  fPercAtingido: number;
  fPonto: number;
  iGrupoRealize: number;
  fPesoOficial: number;
  fPesoReal: number;
  iCgcUnidadeSuperior: string;
  iCgcVp: number;
  iAvaliacao: string;
  dReferencia: string;
  dAtualizacaoItemMetaSidem: string;
  idArquivo: string;
}
