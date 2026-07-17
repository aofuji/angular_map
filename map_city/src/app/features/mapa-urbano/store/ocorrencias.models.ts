export type OcorrenciaTipo =
  | 'buraco'
  | 'iluminacao'
  | 'rua curta'
  | 'rua sem asfalto'
  | 'sinalizacao';

export type OcorrenciaStatus = 'aberto' | 'em análise' | 'resolvido';

export interface Ocorrencia {
  id: number;
  titulo: string;
  descricao: string;
  tipo: OcorrenciaTipo;
  status: OcorrenciaStatus;
  rua: string;
  bairro: string;
  latitude: number;
  longitude: number;
  dataCriacao: string;
}

export interface OcorrenciasState {
  ocorrencias: Ocorrencia[];
  loading: boolean;
  error: string | null;
  filtroTipo: OcorrenciaTipo | null;
  filtroStatus: OcorrenciaStatus | null;
  ocorrenciaSelecionadaId: number | null;
}
