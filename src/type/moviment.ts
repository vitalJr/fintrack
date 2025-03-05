import { CardType } from "./generic";

export interface Moviment {
  userReference: string;
  type: CardType;
  name: string;
  value: number;
}

export interface FinantialCard {
  type: CardType;
  value: number;
}
