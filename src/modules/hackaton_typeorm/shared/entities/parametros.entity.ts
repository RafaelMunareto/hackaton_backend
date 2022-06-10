import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('parametros_entity', { schema: 'hackaton' })
export class Parametros {
  @PrimaryColumn()
  iGrupoRealize: number;
  @PrimaryColumn()
  iAnoMes: number;
  @PrimaryColumn()
  iItemRealize: number;
  @Column({ nullable: true })
  vItemRealize: String;
  @Column({ nullable: true })
  iItemRealizePai: number;
  @Column({ nullable: true })
  iItemMetaSidem: number;
  @Column({ nullable: true })
  vFormulaDesc: String;
  @Column({ nullable: true })
  vFormula: String;
  @Column({ nullable: true })
  vFormula2: String;
  @Column({ nullable: true })
  vFormulaPC: String;
  @Column('float', { nullable: true })
  fPeso: number;
  @Column('float', { nullable: true })
  fPontuacaoMinima: number;
  @Column('float', { nullable: true })
  fPontuacaoMinima2: number;
  @Column('float', { nullable: true })
  fPontuacaoMaxima: number;
  @Column('float', { nullable: true })
  fPontuacaoMaxima2: number;
  @Column({ nullable: true })
  dAtualizacaoItemMetaSidem: String;
  @Column({ nullable: true })
  iOrdemRealize: number;
  @Column({ nullable: true })
  dReferencia: String;
  @Column({ nullable: true })
  idArquivo: number;
  @Column({ nullable: true }) iPeso: number;
}
