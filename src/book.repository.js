class BookRepository {

    /**
     * @param db
     */
    constructor(db) {
        this.db = db;
    }

    save (book) {
        this.db.get('books').push(book).write();
    }

    /**
     * Nombre total de livre
     */
    getTotalCount()
    {
        return this.db.get('books').size().value();
    }

    /**
     * Somme du prix de tous les livre
     */
    getTotalPrice() {
        let a = this.db.get('books')
            .map('price')
            .value();
        return a.reduce((total, curr) => total + curr);
    }


    /**
     * Retourne un livre
     */
    getBookByName(bookName) {
        return this.db.get('books')
            .filter({name: bookName})
            .value();
    }

    /**
     * Nombre de livre ajouté par mois
     *
     *  [
     *      {
     *          year: 2017,
     *          month, 2,
     *          count, 129,
     *          count_cumulative: 129
     *      },
     *      {
     *          year: 2017,
     *          month, 3,
     *          count, 200,
     *          count_cumulative: 329
     *      },
     *      ....
     *  ]
     */
    getCountBookAddedByMont(bookName)
    {
        let date_array = this.db.get('books').filter({name: bookName}).map('added_at').value();
        date_array = date_array.map(x => new Date(x));
        let result = [];
        date_array.sort(function(a, b) {
            a = new Date(a.dateModified);
            b = new Date(b.dateModified);
            return a>b ? -1 : a<b ? 1 : 0;
        });
        let exist = false;
        date_array.forEach(function(element) {
            exist = false;
            result.forEach(function (ele) {
                if (ele.year === element.getFullYear() && ele.month === element.getMonth() + 1)
                {
                    ele.count = ele.count + 1;
                    exist = true;
                }
            });
            if(exist === false)
            {
                result.push({year: element.getFullYear(), month: element.getMonth() + 1, count: 1, count_cumulative: 0});
            }
        });
        let cum = 0;
        result.forEach(function (ele) {
            cum = cum + ele.count;
            ele.count_cumulative = cum + ele.count_cumulative
        });
        return result;
    }

}


module.exports = BookRepository;