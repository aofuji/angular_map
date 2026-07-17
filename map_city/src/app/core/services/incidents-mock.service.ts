import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import {
  Incident,
  IncidentStatus,
  IncidentType
} from '../../features/urban-map/store/incidents.models';

@Injectable({
  providedIn: 'root'
})
export class IncidentsMockService {
  private readonly incidents: Incident[] = [
    {
      id: 1,
      title: 'Pothole near the central square',
      description: 'Deep pothole affecting car and motorcycle traffic.',
      type: 'pothole',
      status: 'open',
      street: 'Maranhao Street',
      neighborhood: 'Downtown',
      latitude: -21.1389,
      longitude: -48.9738,
      createdAt: '2026-05-04T09:30:00'
    },
    {
      id: 2,
      title: 'Streetlight with intermittent lighting',
      description: 'Public lighting flickering throughout the night.',
      type: 'lighting',
      status: 'under review',
      street: 'Sao Domingos Avenue',
      neighborhood: 'Higienopolis',
      latitude: -21.1348,
      longitude: -48.9606,
      createdAt: '2026-05-06T19:10:00'
    },
    {
      id: 3,
      title: 'Very short road for turning around',
      description: 'Street with a poorly marked turnaround point and limited space.',
      type: 'short street',
      status: 'open',
      street: 'Tocantins Street',
      neighborhood: 'Solo Sagrado',
      latitude: -21.1514,
      longitude: -48.9785,
      createdAt: '2026-05-08T14:45:00'
    },
    {
      id: 4,
      title: 'Unpaved stretch after rain',
      description: 'Muddy access and difficult pedestrian passage.',
      type: 'road without asphalt',
      status: 'under review',
      street: 'Projected Street 2',
      neighborhood: 'Imperial Garden',
      latitude: -21.1463,
      longitude: -48.9494,
      createdAt: '2026-05-10T08:15:00'
    },
    {
      id: 5,
      title: 'Damaged stop sign',
      description: 'Traffic sign fallen at the corner.',
      type: 'signage',
      status: 'resolved',
      street: 'Brazil Street',
      neighborhood: 'Celso Mauad Village',
      latitude: -21.1317,
      longitude: -48.9811,
      createdAt: '2026-05-01T11:20:00'
    },
    {
      id: 6,
      title: 'Series of potholes in a bus corridor',
      description: 'Three potholes in a row creating tire risk.',
      type: 'pothole',
      status: 'under review',
      street: 'Benedito Zancaner Avenue',
      neighborhood: 'Parque Iracema',
      latitude: -21.1431,
      longitude: -48.9654,
      createdAt: '2026-05-11T07:50:00'
    },
    {
      id: 7,
      title: 'Lights out on school court',
      description: 'Outdoor court remains dark after 6 p.m.',
      type: 'lighting',
      status: 'open',
      street: 'Bahia Street',
      neighborhood: 'Gloria Park',
      latitude: -21.1298,
      longitude: -48.9681,
      createdAt: '2026-05-12T18:30:00'
    },
    {
      id: 8,
      title: 'Faded crosswalk',
      description: 'Road markings with worn paint.',
      type: 'signage',
      status: 'open',
      street: 'November 15 Street',
      neighborhood: 'Downtown',
      latitude: -21.1366,
      longitude: -48.9722,
      createdAt: '2026-05-13T10:05:00'
    }
  ];

  loadIncidents(): Observable<Incident[]> {
    return of(this.incidents).pipe(delay(900));
  }

  readonly types: ReadonlyArray<IncidentType> = [
    'pothole',
    'lighting',
    'short street',
    'road without asphalt',
    'signage'
  ];

  readonly status: ReadonlyArray<IncidentStatus> = ['open', 'under review', 'resolved'];
}
