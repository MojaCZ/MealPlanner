export interface Unit {
  grammage: string;
  name: string;
}

export interface Resource {
  _id: string;
  name: string;
  carb: string;
  energy: string;
  fat: string;
  prot: string;
  fib: string;
  allergens: string[];
  category: string[];
  units: Unit[];
}
