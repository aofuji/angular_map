import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import {
  Ocorrencia,
  OcorrenciaStatus,
  OcorrenciaTipo
} from '../../features/mapa-urbano/store/ocorrencias.models';

@Injectable({
  providedIn: 'root'
})
export class OcorrenciasMockService {
  private readonly ocorrencias: Ocorrencia[] = [
    {
      id: 1,
      titulo: 'Buraco próximo à praça central',
      descricao: 'Buraco profundo afetando o fluxo de carros e motos.',
      tipo: 'buraco',
      status: 'aberto',
      rua: 'Rua Maranhão',
      bairro: 'Centro',
      latitude: -21.1389,
      longitude: -48.9738,
      dataCriacao: '2026-05-04T09:30:00'
    },
    {
      id: 2,
      titulo: 'Poste com iluminação intermitente',
      descricao: 'Iluminação pública oscilando durante a noite.',
      tipo: 'iluminacao',
      status: 'em análise',
      rua: 'Avenida São Domingos',
      bairro: 'Higienópolis',
      latitude: -21.1348,
      longitude: -48.9606,
      dataCriacao: '2026-05-06T19:10:00'
    },
    {
      id: 3,
      titulo: 'Via muito curta para retorno',
      descricao: 'Rua com ponto de retorno mal sinalizado e espaço reduzido.',
      tipo: 'rua curta',
      status: 'aberto',
      rua: 'Rua Tocantins',
      bairro: 'Solo Sagrado',
      latitude: -21.1514,
      longitude: -48.9785,
      dataCriacao: '2026-05-08T14:45:00'
    },
    {
      id: 4,
      titulo: 'Trecho sem asfalto após chuva',
      descricao: 'Acesso com lama e dificuldade para pedestres.',
      tipo: 'rua sem asfalto',
      status: 'em análise',
      rua: 'Rua Projetada 2',
      bairro: 'Jardim Imperial',
      latitude: -21.1463,
      longitude: -48.9494,
      dataCriacao: '2026-05-10T08:15:00'
    },
    {
      id: 5,
      titulo: 'Placa de pare danificada',
      descricao: 'Sinalização vertical caída na esquina.',
      tipo: 'sinalizacao',
      status: 'resolvido',
      rua: 'Rua Brasil',
      bairro: 'Vila Celso Mauad',
      latitude: -21.1317,
      longitude: -48.9811,
      dataCriacao: '2026-05-01T11:20:00'
    },
    {
      id: 6,
      titulo: 'Sequência de buracos em corredor de ônibus',
      descricao: 'Três buracos em sequência com risco para pneus.',
      tipo: 'buraco',
      status: 'em análise',
      rua: 'Avenida Benedito Zancaner',
      bairro: 'Parque Iracema',
      latitude: -21.1431,
      longitude: -48.9654,
      dataCriacao: '2026-05-11T07:50:00'
    },
    {
      id: 7,
      titulo: 'Lâmpadas apagadas em quadra escolar',
      descricao: 'Quadra externa permanece escura após as 18h.',
      tipo: 'iluminacao',
      status: 'aberto',
      rua: 'Rua Bahia',
      bairro: 'Parque Glória',
      latitude: -21.1298,
      longitude: -48.9681,
      dataCriacao: '2026-05-12T18:30:00'
    },
    {
      id: 8,
      titulo: 'Faixa de pedestre apagada',
      descricao: 'Sinalização horizontal com pintura desgastada.',
      tipo: 'sinalizacao',
      status: 'aberto',
      rua: 'Rua 15 de Novembro',
      bairro: 'Centro',
      latitude: -21.1366,
      longitude: -48.9722,
      dataCriacao: '2026-05-13T10:05:00'
    }
  ];

  loadOcorrencias(): Observable<Ocorrencia[]> {
    return of(this.ocorrencias).pipe(delay(900));
  }

  readonly tipos: ReadonlyArray<OcorrenciaTipo> = [
    'buraco',
    'iluminacao',
    'rua curta',
    'rua sem asfalto',
    'sinalizacao'
  ];

  readonly status: ReadonlyArray<OcorrenciaStatus> = ['aberto', 'em análise', 'resolvido'];
}
