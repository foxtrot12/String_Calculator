import { StringCalculator } from './stringCalculator';

describe('StringCalculator', () => {
  let calculator: StringCalculator;

  beforeEach(() => {
    calculator = new StringCalculator();
  });

  test('should return 0 for an empty string', () => {
    expect(calculator.add("")).toBe(0);
  });

  test('should add numbers separated by commas', () => {
    expect(calculator.add("1,2,3")).toBe(6);
  });

  test('should add numbers separated by spaces', () => {
    expect(calculator.add("1 2 3")).toBe(6);
  });

  test('should add numbers separated by new lines', () => {
    expect(calculator.add("1\n2\n3")).toBe(6);
  });

  test('should throw an error if a non-numeric string is provided', () => {
    expect(() => calculator.add("1,2,a")).toThrow(
      "Invalid input: one of the elements - a is not a valid number"
    );
  });

  test('should throw an error if there is a negative number in the string', () => {
    expect(() => calculator.add("1,-2,3")).toThrow(
      "Invalid input: one of the elements - -2 is a negative number"
    );
  });
})