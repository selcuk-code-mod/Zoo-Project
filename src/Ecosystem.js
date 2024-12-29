import {
  Sheep,
  Wolf,
  Cow,
  Chicken,
  Rooster,
  Lion,
  Hunter,
} from "./models/Species.js";

export class Ecosystem {
  constructor() {
    this.width = 500;
    this.height = 500;
    this.animals = [];
    this.initializeAnimals();
  }

  initializeAnimals() {
    for (let i = 0; i < 15; i++) {
      this.addAnimal(Sheep, "M");
      this.addAnimal(Sheep, "F");
    }

    for (let i = 0; i < 5; i++) {
      this.addAnimal(Cow, "M");
      this.addAnimal(Cow, "F");
    }

    for (let i = 0; i < 10; i++) {
      this.addAnimal(Chicken, "F");
    }

    for (let i = 0; i < 5; i++) {
      this.addAnimal(Wolf, "M");
      this.addAnimal(Wolf, "F");
    }

    for (let i = 0; i < 10; i++) {
      this.addAnimal(Rooster, "M");
    }

    for (let i = 0; i < 4; i++) {
      this.addAnimal(Lion, "M");
      this.addAnimal(Lion, "F");
    }

    this.addAnimal(Hunter);
  }

  addAnimal(Species, gender = null) {
    const x = Math.random() * this.width;
    const y = Math.random() * this.height;
    this.animals.push(new Species(x, y, gender));
  }

  simulate() {
    this.animals.forEach((animal) => {
      animal.move(this.width, this.height);
    });

    this.handleHunting();

    this.handleReproduction();
  }

  handleHunting() {
    const predators = this.animals.filter(
      (a) => a.type === "wolf" || a.type === "lion" || a.type === "hunter"
    );

    for (const predator of predators) {
      let huntingRange =
        predator.type === "wolf" ? 4 : predator.type === "lion" ? 5 : 8;

      let preyTypes =
        predator.type === "wolf"
          ? ["sheep", "chicken", "rooster"]
          : predator.type === "lion"
          ? ["cow", "sheep"]
          : ["sheep", "chicken", "rooster", "wolf", "cow", "lion"];

      const prey = this.animals.find(
        (animal) =>
          preyTypes.includes(animal.type) &&
          predator.getDistance(animal) <= huntingRange
      );

      if (prey) {
        this.animals = this.animals.filter((a) => a !== prey);
      }
    }
  }

  handleReproduction() {
    const pairs = new Set();

    for (let i = 0; i < this.animals.length; i++) {
      for (let j = i + 1; j < this.animals.length; j++) {
        const a1 = this.animals[i];
        const a2 = this.animals[j];

        if (
          a1.type === a2.type &&
          a1.gender !== a2.gender &&
          a1.getDistance(a2) <= 3 &&
          !pairs.has(a1) &&
          !pairs.has(a2)
        ) {
          pairs.add(a1);
          pairs.add(a2);
          const gender = Math.random() < 0.5 ? "M" : "F";
          const Species = this.animals[i].constructor;
          this.addAnimal(Species, gender);
        }
      }
    }
  }

  getPopulationStats() {
    const stats = {};
    this.animals.forEach((animal) => {
      stats[animal.type] = (stats[animal.type] || 0) + 1;
    });
    return stats;
  }
}
