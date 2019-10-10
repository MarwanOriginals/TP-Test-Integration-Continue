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

describe('includes', function () {
    test('Test Interval includes', () => {
        let a = new Interval(0, 5);
        let b = new Interval(1, 3);
        expect(a.includes(b)).toBe(true);
    });

    test('Test Interval Overlaps 2', () => {
        let a = new Interval(3, 5);
        let b = new Interval(3, 17);
        expect(a.includes(b)).toBe(false);
    });

    test('Test Interval Overlaps 3', () => {
        let a = new Interval(5, 9);
        let b = new Interval(6, 9);
        expect(a.includes(b)).toBe(true);
    });

    test.each([
        [new Interval(1, 3), false],
        [new Interval(20,37), false],
        [new Interval(5, 8), true],

    ])(
        'isPrime %i equals to %i',
        (n, expected) => {
            let a = new Interval(5, 9);
            expect(a.includes(n)).toBe(expected);
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

describe('intersection', function() {

    test('Test intersection 1', () => {
        let intersection_1 = new Interval(1,9);
        let intersection_2 = new Interval(7,19);
        expect(intersection_1.intersection(intersection_2)).toEqual(new Interval(7, 9));
    });

    test('Test intersection 2', () => {
        let intersection_1 = new Interval(1,9);
        let intersection_2 = new Interval(10,19);
        expect(intersection_1.intersection(intersection_2)).toEqual(null);
    });
});

describe('exclusion', function() {

    test('Test exclusion de [1;4] et [2;6]', () => {
        let exclusion_1 = new Interval(1,4);
        let exclusion_2 = new Interval(2,6);
        expect(exclusion_1.exclusion(exclusion_2)).toEqual([new Interval(1, 2), new Interval(4, 6)]);
    });

    test('Test exclusion de [1;3] et [7;9]', () => {
        let exclusion_1 = new Interval(1,3);
        let exclusion_2 = new Interval(7,9);
        expect(exclusion_1.exclusion(exclusion_2)).toEqual([new Interval(1, 3), new Interval(7, 9)]);
    });
});
