const Interval = require('../../src/interval');
test('Test Interval Overlaps', () => {
    let a = new Interval(0, 5);
    let b = new Interval(2, 7); 
    expect(a.overlaps(b)).toBe(true);
  });