export interface iChapter {
  id: number;
  name: string;
  age: string;
  family: string;
  type: string;
}

export class ChapterModel implements iChapter {
  id: number;
  static generateId(): number {
    return Math.ceil(Math.random() * 100_000);
  }
  constructor(
    public name: string,
    public age: string,
    public family: string,
    public type: string
  ) {
    this.id = ChapterModel.generateId();
  }
}
