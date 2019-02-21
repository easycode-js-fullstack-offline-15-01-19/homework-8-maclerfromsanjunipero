// -------------------------- Home work#8 --------------------------
// -------------------------- Vasilenko Max --------------------------

// This.Tasks.Part #1 -------------------------------------
// Task #1

const rectangle = {
    width: null,
    height: null,
    setWidth: function (val) {
        if (!val || isNaN(val)) return console.log('not a number');
        return this.width = val;
    },
    setHeight: function (val) {
        if (!val || isNaN(val)) return console.log('not a number');
        return this.height = val;
    },
    getSquare: function () {
        let sqr = this.height * this.width;
        return sqr;
    }
};

// Task #2

const price = {
    price: 10,
    discount: '15%',
    getPrice: function () {
        console.log(this.price);
        return this;
    },
    getPriceWithDiscount: function () {
        let priceWithDisc = this.price - (parseFloat(this.discount) / 100 * this.price);
        console.log(priceWithDisc);
        return this;
    }
};

// Task #3

const bulding = {
    height: 10,
    getHigher: function () {
        this.height++;
        console.log(this.height);
        return this;
    }
};

// Task #4

const numerator = {
    value: 1,
    double: function () {
        this.value *= 2;
        return this;
    },
    plusOne: function () {
        ++this.value;
        return this;
    },
    minusOne: function () {
        --this.value;
        return this;
    }
};

// This.Tasks.Part #2 -------------------------------------
// Task #1

const stock = {
    price: '10$',
    quantity: 25,
    totalCost: function () {
        return parseFloat(this.price) * this.quantity
    }
};

// Task #2
let tCost = stock.totalCost;

const carsShop = {
    quantity: 45,
    price: '20$',
    totalCost: tCost
};

// Task #3

let sizes = {
    width: 5,
    height: 10
};

getSquare = function () {
    return this.width * this.height
};

getSquare.call(sizes);

// Task #4

let element = {
    height: 25,
    getHeight: function () {return this.height;}
};

let getElementHeight = element.getHeight;
getElementHeight.call(element);

// Zamikanie.Tasks -------------------------------------
// Task #1

function minus(a) {
    return function (b) {
        return a - b;
    }
}

// Task #2

function multiplyMaker(x) {
    return function(y) {
        return x *= y;
    }
}
const multiply = multiplyMaker(2);

// Task #3

const moduleStr = {
    str: '',
    setStr: function(newStr) {
        if(!newStr) {
            str = '';
        } else if(typeof(newStr) === 'number') {
            str = newStr + '';
        } else {
            str = newStr;
        }
        return str;
    },

    getStr: function() { return str; },

    getStrLength: function() { return str.length; },

    getReverseStr: function() {
        return str.split("").reverse().join("");
    }
};

// Task #4

const calc = {
    number: 0,
    setNumb: function(newNumb) {
        if(!newNumb) {
            number = 0;
        } else if(typeof(newNumb) !== 'number') {
            alert('Введите число!');
        } else {
            number = newNumb;
        }
        return calc;
    },

    numbPlus: function(plus) {
        number += plus;
        return calc;
    },

    numbMinus: function(minus) {
        number -= minus;
        return calc;
    },

    numbMultiply: function(mult) {
        number *= mult;
        return calc;
    },

    numbSplit: function(split) {
        number /= split;
        return calc;
    },

    numbDegree: function(deg) {
        number = Math.pow(number, deg);
        return calc;
    },

    getNumb: function() {
        number = parseFloat(number.toFixed(2));
        console.log(number);
        return calc;
    }
};


