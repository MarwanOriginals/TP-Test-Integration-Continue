const Util = require('./src/interval');

test('Test factoriel de 2 => 2', () => {
    let a = new Interval(0, 5);
    let b = new Interval(2, 7); 
    expect(a.overlaps(b)).toBe(true);
  });