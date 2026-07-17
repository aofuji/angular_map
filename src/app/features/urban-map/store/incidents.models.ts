export type IncidentType =
  | 'pothole'
  | 'lighting'
  | 'short street'
  | 'road without asphalt'
  | 'signage';

export type IncidentStatus = 'open' | 'under review' | 'resolved';

export interface Incident {
  id: number;
  title: string;
  description: string;
  type: IncidentType;
  status: IncidentStatus;
  street: string;
  neighborhood: string;
  latitude: number;
  longitude: number;
  createdAt: string;
}

export interface IncidentsState {
  incidents: Incident[];
  loading: boolean;
  error: string | null;
  typeFilter: IncidentType | null;
  statusFilter: IncidentStatus | null;
  selectedIncidentId: number | null;
}
