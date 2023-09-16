export class FruitEntity {
  name: string;
  id: number;
  family: string;
  order: string;
  genus: string;
  nutritions: {
    calories: number;
    fat: number;
    sugar: number;
    carbohydrates: number;
    protein: number;
  };
  constructor() {
    this.name = "";
    this.id = 0;
    this.family = "";
    this.order = "";
    this.genus = "";
    this.nutritions = {
      calories: 0,
      fat: 0,
      sugar: 0,
      carbohydrates: 0,
      protein: 0
    };
  }
}
