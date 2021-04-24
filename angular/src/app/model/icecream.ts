export class Icecream {
  name: string | undefined;
  category: string | undefined;
  ingredients: string[] | undefined;
  fruits: string[] | undefined;
  flavours: string[] | undefined;
  calories: number | undefined;
  wholesalePrice: number | undefined;
  retailPrice: number | undefined;
  intolerances: string | undefined;
  fruitContent: number | undefined;
  creamContent: number | undefined;

  public constructor(init?: Partial<Icecream>) {
    Object.assign(this, init);
  }
}
