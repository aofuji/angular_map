import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IncidentStatus, IncidentType } from '../../store/incidents.models';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FiltersComponent {
  @Input({ required: true }) typeFilter: IncidentType | null = null;
  @Input({ required: true }) statusFilter: IncidentStatus | null = null;

  @Output() readonly typeFilterChange = new EventEmitter<IncidentType | null>();
  @Output() readonly statusFilterChange = new EventEmitter<IncidentStatus | null>();
  @Output() readonly clear = new EventEmitter<void>();

  readonly types: ReadonlyArray<IncidentType> = [
    'pothole',
    'lighting',
    'short street',
    'road without asphalt',
    'signage',
  ];

  readonly status: ReadonlyArray<IncidentStatus> = ['open', 'under review', 'resolved'];

  updateType(value: string): void {
    this.typeFilterChange.emit((value || null) as IncidentType | null);
  }

  updateStatus(value: string): void {
    this.statusFilterChange.emit((value || null) as IncidentStatus | null);
  }
}
