import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import * as L from 'leaflet';
import { Incident } from '../../store/incidents.models';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapComponent implements AfterViewInit, OnChanges, OnDestroy {
  @Input({ required: true }) incidents: readonly Incident[] = [];
  @Input() selectedIncidentId: number | null = null;
  @Output() readonly selectIncident = new EventEmitter<number>();
  @ViewChild('mapContainer', { static: true }) mapContainer?: ElementRef<HTMLDivElement>;

  private map?: L.Map;
  private readonly markersLayer = L.layerGroup();
  private readonly markerById = new Map<number, L.Marker>();

  ngAfterViewInit(): void {
    this.initializeMap();
    this.renderMarkers();
    this.focusSelectedMarker();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.map) {
      return;
    }

    if (changes['incidents']) {
      this.renderMarkers();
    }

    if (changes['selectedIncidentId']) {
      this.focusSelectedMarker();
    }
  }

  ngOnDestroy(): void {
    this.map?.remove();
  }

  private initializeMap(): void {
    const container = this.mapContainer?.nativeElement;

    if (!container) {
      return;
    }

    this.map = L.map(container, {
      zoomControl: true
    }).setView([-21.1374, -48.9723], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(this.map);

    this.markersLayer.addTo(this.map);
  }

  private renderMarkers(): void {
    this.markersLayer.clearLayers();
    this.markerById.clear();

    for (const incident of this.incidents) {
      const marker = L.marker([incident.latitude, incident.longitude])
        .bindPopup(this.buildPopupContent(incident))
        .on('click', () => this.selectIncident.emit(incident.id));

      marker.addTo(this.markersLayer);
      this.markerById.set(incident.id, marker);
    }
  }

  private focusSelectedMarker(): void {
    if (!this.map || this.selectedIncidentId === null) {
      return;
    }

    const marker = this.markerById.get(this.selectedIncidentId);

    if (!marker) {
      return;
    }

    this.map.setView(marker.getLatLng(), Math.max(this.map.getZoom(), 15), {
      animate: true
    });
    marker.openPopup();
  }

  private buildPopupContent(incident: Incident): string {
    return `
      <div class="popup-content">
        <strong>${incident.title}</strong><br />
        <span>Type: ${incident.type}</span><br />
        <span>Street: ${incident.street}</span><br />
        <span>Neighborhood: ${incident.neighborhood}</span><br />
        <span>Status: ${incident.status}</span>
      </div>
    `;
  }
}
