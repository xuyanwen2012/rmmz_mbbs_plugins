class TestClass extends Bitmap {
  /**
   * @param x
   * @param y
   */
  testFunc(x: number, y: number): number {
    return x + y;
  }
}

const btm = new TestClass(100, 200);

console.log(btm.clear);
