interface Field {
  asString: () => string;
}

interface FieldData {
  name: string;
}

class Field {
  constructor(private data: FieldData) {}

  static of(name) {
    new Field({
      name,
    });
  }
}
