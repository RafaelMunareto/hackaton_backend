import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('realize_entity', { schema: 'hackaton' })
export class Realize {
  @PrimaryColumn()
  iAnoMes: number;
  @Column({ nullable: true })
  iNichoRealize: number;
  @PrimaryColumn()
  iItemRealize: number;
  @Column({ nullable: true })
  iNivelRede: number;
  @PrimaryColumn()
  iCgcUnidade: number;
  @Column({ nullable: true })
  iNaturalUnidade: number;
  @Column('float', { nullable: true })
  nObjetivoAcumulado: number;
  @Column('float', { nullable: true })
  nRealizadoAcumulado: number;
  @Column('float', { nullable: true })
  fPercRealizado: number;
  @Column('float', { nullable: true })
  fPercEsperado: number;
  @Column('float', { nullable: true })
  fPercAtingido: number;
  @Column('float', { nullable: true })
  fPonto: number;
  @Column({ nullable: true })
  iGrupoRealize: number;
  @Column('float', { nullable: true })
  fPesoOficial: number;
  @Column('float', { nullable: true })
  fPesoReal: number;
  @Column({ nullable: true })
  iCgcUnidadeSuperior: string;
  @Column({ nullable: true })
  iCgcVp: number;
  @Column({ nullable: true })
  iAvaliacao: string;
  @Column({ nullable: true })
  dReferencia: string;
  @Column({ nullable: true })
  dAtualizacaoItemMetaSidem: string;
  @Column({ nullable: true })
  idArquivo: string;
}
