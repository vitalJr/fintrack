import { green, purpple, red } from "../styles/color";
import { CardType } from "../type/generic";

export const getBackgroundCard = (type: string) => {
  if (type === CardType.CURRENT) {
    return purpple;
  } else if (type === CardType.INCOME) {
    return green;
  } else {
    return red;
  }
};
