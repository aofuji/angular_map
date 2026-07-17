import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OcorrenciaStatus, OcorrenciaTipo } from '../../store/ocorrencias.models';

@Component({
  selector: 'app-filtros',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './filtros.component.html',
  styleUrl: './filtros.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FiltrosComponent {
  @Input({ required: true }) filtroTipo: OcorrenciaTipo | null = null;
  @Input({ required: true }) filtroStatus: OcorrenciaStatus | null = null;

  @Output() readonly filtroTipoChange = new EventEmitter<OcorrenciaTipo | null>();
  @Output() readonly filtroStatusChange = new EventEmitter<OcorrenciaStatus | null>();
  @Output() readonly clear = new EventEmitter<void>();

  readonly tipos: ReadonlyArray<OcorrenciaTipo> = [
    'buraco',
    'iluminacao',
    'rua curta',
    'rua sem asfalto',
    'sinalizacao'
  ];

  readonly status: ReadonlyArray<OcorrenciaStatus> = ['aberto', 'em análise', 'resolvido'];

  updateTipo(value: string): void {
    this.filtroTipoChange.emit((value || null) as OcorrenciaTipo | null);
  }

  updateStatus(value: string): void {
    this.filtroStatusChange.emit((value || null) as OcorrenciaStatus | null);
  }
}
