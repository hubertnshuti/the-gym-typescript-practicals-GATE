// 1.Solve all the typing issues in the code without changing the implementation

class Counter {
  static count: number = 0;

  increment(): void{
    Counter.count++;
  }

  static getCount(): number{
    return this.count;
  }
}

