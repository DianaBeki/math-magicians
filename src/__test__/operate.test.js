import operate from '../logic/operate';

describe('operate function', () => {
  it('should correctly add two numbers', () => {
    expect(operate('5', '3', '+')).toBe('8');
  });

  it('should correctly subtract two numbers', () => {
    expect(operate('5', '3', '-')).toBe('2');
  });

  it('should correctly multiply two numbers', () => {
    expect(operate('5', '3', 'x')).toBe('15');
  });

  it('should correctly divide two numbers', () => {
    expect(operate('6', '2', '÷')).toBe('3');
  });

  it("should handle division by zero and return 'Can't divide by 0.'", () => {
    expect(operate('6', '0', '÷')).toBe("Can't divide by 0.");
  });

  it('should correctly find modulo of two numbers', () => {
    expect(operate('5', '3', '%')).toBe('2');
  });

  it("should handle modulo by zero and return 'Can't find modulo as can't divide by 0.'", () => {
    expect(operate('5', '0', '%')).toBe("Can't find modulo as can't divide by 0.");
  });

  it('should throw an error for an unknown operation', () => {
    expect(() => operate('5', '3', '&')).toThrow("Unknown operation '&'");
  });
});
