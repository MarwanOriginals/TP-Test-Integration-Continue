const Util = require('./math');
test('Test factoriel de 0 => 1', () => {
  expect(Util.factorial(0)).toBe(1);
});

test('Test factoriel de 2 => 2', () => {
  expect(Util.factorial(3)).toBe(6);
});

test('Test factoriel de 3 => 6', () => {
  expect(Util.factorial(3)).toBe(6);
});

test('Test factoriel de 3000', () => {
  expect(() => { Util.factorial(3000) }).toThrow();
});

test('Test factoriel -10', () => {
  expect(() => { Util.factorial(-10) }).toThrow(/negative/);
});


describe('isPrime', function () {

  test('Test prime de 1 => false', () => {
    expect(Util.isPrime(1)).toBe(false)
  });
  test('Test prime de 0 => false', () => {
    expect(Util.isPrime(0)).toBe(false)
  });
  test('Test prime < 0 => throw exception', () => {
    expect(() => { Util.isPrime(-10) }).toThrow('Unable to compute prime for n < 0');
  });

  test.each([
    [2, true],
    [5, true],
    [17, true],
    [18, false],
    [53, true],
    [55, false],
  ])(
    'isPrime %i equals to %i',
    (n, expected) => {
      expect(Util.isPrime(n)).toBe(expected);
    }
  );
});


describe('sumPrime', function () {
  test('Test sum Prime de 6 => 10', () => {
    expect(Util.sumPrime(6)).toBe(10);
  });

  test('Test sum Prime de 8 => 17', () => {
    expect(Util.sumPrime(8)).toBe(17);
  });

  test('Test sum Prime de 2 => 2', () => {
    expect(Util.sumPrime(2)).toBe(2);
  });

  test('Test sum Prime < a => throw exception', () => {
    expect(() => { Util.sumPrime(1) }).toThrow('Unable to sum for n < 0');
  });

  test.each([
    [2, 2],
    [8, 17],
    [6, 10]
  ])(
    'isPrime %i equals to %i',
    (n, expected) => {
      expect(Util.sumPrime(n)).toBe(expected);
    }
  );
});



describe('Cipher', function () {

  test.each([
    ['marwan', 'zkdbky'],
    ['MarWan', 'ZkdBky'],
    ['', ''],
    ['1996', ''],
    ['Marw$an', 'Zkdbky']
  ])(
    'Test Cipher \'%s\' equals to \'%s\'',
    (text, expected) => {
      expect(Util.cipher(text)).toBe(expected);
    }
  );
});

describe('fizzBuzz', function () {
  test.each([
    [3, [1, 2, "Fizz"]],
    [5, [1, 2, "Fizz", 4, "Buzz"]],
    [15, [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]]
  ])(
    'Test fizzBuzz %i equals to %i',
    (n, expected) => {
      expect(Util.fizzBuzz(n)).toStrictEqual(expected);
    }
  );
});

describe('pairs', function () {
    test.each([
      [[3,3], 1],
      [[3,3,5], 1],
      [[3,3,5,5,5], 4]
    ])(
      'Test pair %i equals to %i',
      (n, expected) => {
        expect(Util.pairs(n)).toStrictEqual(expected);
      }
    );
  });