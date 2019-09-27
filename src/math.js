let Util = {};
Util.factorial = (n) => {
    if (n === 0) {
        return 1;
    }

    if (n >= 3000) {
        throw 'n too large'
    }

    if (n < 0) {
        throw 'n is negative'
    }
    return n * Util.factorial(n - 1);
};

/**
 * Détermine si n est un nombre premier.
 * Util.isPrime(5) => false
 * Util.isPrime(6) => true
 *
 * @param {number} n
 * @returns {boolean}
 */
Util.isPrime = function (n) {
    if (n === 1 || n === 0) {
        return false;
    }
    if (n < 0) {
        throw 'Unable to compute prime for n < 0'
    }
    for (var i = 2; i < n; i++)
        if (n % i === 0) return false;
    return true;

};

/**
 * Additionne l'ensemble des nombres premiers de 2 à n
 *
 * Util.sumPrime(6) = 2 + 3 + 5 = 10
 * Util.sumPrime(8) = 2 + 3 + 5 + 7 = 17
 *
 * @param {number} n
 * @returns {number}
 */
Util.sumPrime = function(n) {
  let result = []; // Tableau des sommes
  if (n < 2) {
        throw 'Unable to sum for n < 0'
    }
  for (let i = 2; i <= n; i++)  // De 2 à n
  {
    if(Util.isPrime(i))
    {
      result.push(i); // Ajout de la valeur dans le tableau final
    }
  }
  return result.reduce((total, ele) => total + ele); // Somme des éléments dans le tableau
};

/**
 * Cette méthode doit retourner un tableau de 1 à n tel que:
 * - Pour les nombres multiples de 3, les remplacer par "Fizz"
 * - Pour les nombres multiples de 5, les remplacer par "Buzz"
 * - Pour les nombres multiples de 3 et 5, les remplacer par "FizzBuzz"
 *
 * Exp :
 * Util.fizzBuzz(15) => [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]
 *
 * @param {number} n
 * @returns {array}
 */
Util.fizzBuzz = function(n) {
    var result = [];
    for(let i=1;i<=n;i++){

        if(i%3 ===0 && i%5 === 0){
            result.push("FizzBuzz")
        }
        else if(i%3 ===0){
            result.push("Fizz")
        }
        else if(i%5 === 0){
            result.push("Buzz")
        }
        else{
            result.push(i);
        }
    }
    return result;
};


/**
 * Chiffre une phrase selon la règle suivante : Les A deviennent des B, les B des C, etc.
 *
 * Exp :
 * Util.cipher("Test Unitaire") => "Uftu Tojubjsf"
 *
 * @param phrase
 * @returns {string}
 */
Util.cipher = function (text) {
  
    var map = {
        a: 'q', b: 'w', c: 'e',
        d: 'r', e: 't', f: 'y',
        g: 'u', h: 'i', i: 'o',
        j: 'p', k: 'a', l: 's',
        m: 'd', n: 'f', o: 'g',
        p: 'h', q: 'j', r: 'k',
        s: 'l', t: 'z', u: 'x',
        v: 'c', w: 'v', x: 'b',
        y: 'n', z: 'm'
    };


    map = (function() {
        var tmp = {};
        var k;
        
        for(k in map) {
            if(!map.hasOwnProperty(k)) continue;
            tmp[map[k]] = k;
        }

        return tmp;
    })();

    return text.split('').filter(function(v) {
        return map.hasOwnProperty(v.toLowerCase());
    }).map(function(v) {
        var r = map[v.toLowerCase()];
        return v.toLowerCase() == v ? r : r.toUpperCase();
    }).join('');
};


module.exports = Util;

