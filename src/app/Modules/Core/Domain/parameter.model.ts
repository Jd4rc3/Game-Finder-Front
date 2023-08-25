export interface Parameter {
  id: string;
  name: string;
  values: Value[];
}

export interface Value {
  name: string;
  commonName: string;
  valueName: string;
}
