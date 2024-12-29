export class Animal {
  constructor(x, y, gender, moveDistance) {
    this.x = x;
    this.y = y;
    this.gender = gender;
    this.moveDistance = moveDistance;
  }

  move(maxX, maxY) {
    const newX = this.x + (Math.random() * 2 - 1) * this.moveDistance;
    const newY = this.y + (Math.random() * 2 - 1) * this.moveDistance;
    
    this.x = Math.max(0, Math.min(maxX, newX));
    this.y = Math.max(0, Math.min(maxY, newY));
  }

  getDistance(other) {
    return Math.sqrt(
      Math.pow(this.x - other.x, 2) + 
      Math.pow(this.y - other.y, 2)
    );
  }
}