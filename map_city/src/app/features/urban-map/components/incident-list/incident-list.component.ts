import { CommonModule, DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Incident } from '../../store/incidents.models';

@Component({
  selector: 'app-incident-list',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './incident-list.component.html',
  styleUrl: './incident-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IncidentListComponent {
  @Input({ required: true }) incidents: readonly Incident[] = [];
  @Input() selectedIncidentId: number | null = null;
  @Output() readonly selectIncident = new EventEmitter<number>();

  trackById(_: number, incident: Incident): number {
    return incident.id;
  }
}
