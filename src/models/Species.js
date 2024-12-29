import { Animal } from './Animal.js';

export class Sheep extends Animal {
  constructor(x, y, gender) {
    super(x, y, gender, 2);
    this.type = 'sheep';
  }
}

export class Wolf extends Animal {
  constructor(x, y, gender) {
    super(x, y, gender, 3);
    this.type = 'wolf';
  }
}

export class Cow extends Animal {
  constructor(x, y, gender) {
    super(x, y, gender, 2);
    this.type = 'cow';
  }
}

export class Chicken extends Animal {
  constructor(x, y, gender) {
    super(x, y, gender, 1);
    this.type = 'chicken';
  }
}

export class Rooster extends Animal {
  constructor(x, y, gender) {
    super(x, y, gender, 1);
    this.type = 'rooster';
  }
}

export class Lion extends Animal {
  constructor(x, y, gender) {
    super(x, y, gender, 4);
    this.type = 'lion';
  }
}

export class Hunter extends Animal {
  constructor(x, y) {
    super(x, y, 'M', 1);
    this.type = 'hunter';
  }
}