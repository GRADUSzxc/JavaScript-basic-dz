// let admin = "jhon" 
// let name = "jhon"

// console.log (admin)


// // баланс
// let balance = 25000

// // траты
// let car = 4480
// let food = 890

// // доходы
// let invoice = 5500
// let stock = 4200

// // итоги
// let totalBalance = balance-car-food+invoice+stock

// console.log (totalBalance)



// dz 3

    //  ex1
let str = "aaa@bbb@ccc"

str = str.split('@').join('!')

console.log(str)


    // ex2
let helloWorld = "HELLOWORLD"

helloWorld = helloWorld.charAt() + helloWorld.slice(1, 5).toLowerCase() + " " + helloWorld.slice(5).toLowerCase()

console.log(helloWorld)


    // ex3

let js = "Hello, it is HTML"

js = js.split('HTML').join('not JS')

console.log(js)

   
    // ex4

let ex4 = `let a = 'alex'`

ex4 = ex4.charAt().toUpperCase() + ex4.slice(1)

console.log(ex4)


    // ex 5


    // ex6

let alex = "Lex Luter has a big suit"

alex = alex.slice(alex.search('a'), alex.search('a') + 1).toUpperCase() + alex.slice(alex.search('Lex'), alex.search('Lex') + 3)

console.log(alex)
