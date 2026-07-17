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
import { Ocorrencia } from '../../store/ocorrencias.models';

@Component({
  selector: 'app-mapa',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mapa.component.html',
  styleUrl: './mapa.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapaComponent implements AfterViewInit, OnChanges, OnDestroy {
  @Input({ required: true }) ocorrencias: readonly Ocorrencia[] = [];
  @Input() ocorrenciaSelecionadaId: number | null = null;
  @Output() readonly selectOcorrencia = new EventEmitter<number>();
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

    if (changes['ocorrencias']) {
      this.renderMarkers();
    }

    if (changes['ocorrenciaSelecionadaId']) {
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

    for (const ocorrencia of this.ocorrencias) {
      const marker = L.marker([ocorrencia.latitude, ocorrencia.longitude])
        .bindPopup(this.buildPopupContent(ocorrencia))
        .on('click', () => this.selectOcorrencia.emit(ocorrencia.id));

      marker.addTo(this.markersLayer);
      this.markerById.set(ocorrencia.id, marker);
    }
  }

  private focusSelectedMarker(): void {
    if (!this.map || this.ocorrenciaSelecionadaId === null) {
      return;
    }

    const marker = this.markerById.get(this.ocorrenciaSelecionadaId);

    if (!marker) {
      return;
    }

    this.map.setView(marker.getLatLng(), Math.max(this.map.getZoom(), 15), {
      animate: true
    });
    marker.openPopup();
  }

  private buildPopupContent(ocorrencia: Ocorrencia): string {
    return `
      <div class="popup-content">
        <strong>${ocorrencia.titulo}</strong><br />
        <span>Tipo: ${ocorrencia.tipo}</span><br />
        <span>Rua: ${ocorrencia.rua}</span><br />
        <span>Bairro: ${ocorrencia.bairro}</span><br />
        <span>Status: ${ocorrencia.status}</span>
      </div>
    `;
  }
}
