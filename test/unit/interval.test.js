const Interval = require('../../src/interval');


describe('overlaps', function () {
    test('Test Interval Overlaps', () => {
        let a = new Interval(0, 5);
        let b = new Interval(2, 7); 
        expect(a.overlaps(b)).toBe(true);
    });

    test('Test Interval Overlaps 2', () => {
        let a = new Interval(3, 5);
        let b = new Interval(6, 17); 
        expect(a.overlaps(b)).toBe(false);
    });

    test('Test Interval Overlaps 3', () => {
        let a = new Interval(5, 9);
        let b = new Interval(2, 7); 
        expect(a.overlaps(b)).toBe(true);
    });

    test.each([
        [new Interval(1, 3), false],
        [new Interval(20,37), false],
        [new Interval(5, 8), true],

      ])(
        'isPrime %i equals to %i',
        (n, expected) => {
            let a = new Interval(5, 9);
            expect(a.overlaps(n)).toBe(expected);
        }
    );
});

describe('union', function () {
    test('Test Interval union', () => {
        let a = new Interval(0, 5);
        let b = new Interval(1, 3); 
        let result = a.union(b);
        expect(result[0]).toEqual(new Interval(0, 5));
    });

    test('Test Interval union', () => {
        let a = new Interval(0, 5);
        let b = new Interval(7, 10); 
        let result = a.union(b);
        expect(result).toEqual([new Interval(0, 5), new Interval(7, 10)]);
    });
});
