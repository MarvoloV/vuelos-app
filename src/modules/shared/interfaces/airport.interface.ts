export interface Airport {
  id: number;
  name: string;
  codeIATA: string;
  city: string;
  region: string;
}

export interface SearchAirport {
  id: number;
  fullLocation: string;
  codeIATA: string;
}
