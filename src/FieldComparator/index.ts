interface ComparisonData {
  left: Field;
  right?: Field;
  through?: string;
}

class Comparison {
  constructor(
    private left?: Field,
    private right?: Field,
    private through?: string
  ) {}

  static of(left: Field, right?: Field, through?: string) {
    return new Comparison(left, right, through);
  }

  public to(right, through?: string) {
    return Comparison.of(this.left, right, through ?? this.through);
  }

  public which(through: string) {
    return Comparison.of(this.left, this.right, through);
  }
}

export const generateComparator = (field: Field, comparator) => {};
