export interface ISeat {
  number: number;
  reserved: boolean;
}

export interface Row {
  row: string;
  seats: ISeat[];
}
