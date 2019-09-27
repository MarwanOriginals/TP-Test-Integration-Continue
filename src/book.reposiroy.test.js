const BookRepository = require('./book.repository');

describe('Book repository Save', function () {

    test('Save a book', () => {

        const dbMock = {
            get : jest.fn().mockReturnThis(),
            push : jest.fn().mockReturnThis(),
            write : jest.fn().mockReturnThis()
        };
        const repository = new BookRepository(dbMock);
        repository.save({id: 1, name: "Unit test"});

        expect(dbMock.write.mock.calls.length).toBe(1);
    });
});

describe('Book repository Total Count', function () {
    test('Total Count = 1', () => {

        const dbMock = {
            get : jest.fn().mockReturnThis(),
            size : jest.fn().mockReturnThis(),
            value : jest.fn().mockReturnValue(1)
        };
        const repository = new BookRepository(dbMock);
        expect(repository.getTotalCount()).toBe(1);
    });
});

describe('Book repository Total Price', function () {
    test('Total Price = 9', () => {

        const dbMock = {
            get : jest.fn().mockReturnThis(),
            map : jest.fn().mockReturnThis(),
            value : jest.fn().mockReturnValue([3, 3, 3])
        };
        const repository = new BookRepository(dbMock);
        expect(repository.getTotalPrice()).toBe(9);
    });
});

