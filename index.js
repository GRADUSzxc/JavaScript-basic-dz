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
// let str = "aaa@bbb@ccc"

// str = str.split('@').join('!')

// console.log(str)


//     // ex2
// let helloWorld = "HELLOWORLD"

// helloWorld = helloWorld.charAt() + helloWorld.slice(1, 5).toLowerCase() + " " + helloWorld.slice(5).toLowerCase()

// console.log(helloWorld)


//     // ex3

// let js = "Hello, it is HTML"

// js = js.split('HTML').join('not JS')

// console.log(js)

   
//     // ex4

// let ex4 = `let a = 'alex'`

// ex4 = ex4.charAt().toUpperCase() + ex4.slice(1)

// console.log(ex4)


//     // ex 5


//     // ex6

// let alex = "Lex Luter has a big suit"

// alex = alex.slice(alex.search('a'), alex.search('a') + 1).toUpperCase() + alex.slice(alex.search('Lex'), alex.search('Lex') + 3)

// console.log(alex)




// 14.10.23
    // ex1
// let nameChet = prompt('Введите ваше имя!')

// if(nameChet.length % 2 === 0) {
//     alert('Добро Пожаловать!')
// } else {
//     alert('НЕТ, кто вам дал нечетное имя?')
// }

   
//     // ex2
// let numChet = prompt('Введите число!')

// if(numChet % 2 === 0) {
//     alert('Четное!')
// } else {
//     alert('Нечетное!')
// }

    
//     // ex3
// let nameCheck = prompt('Введите имя!')

// if(nameCheck.charAt() === 'A' || nameCheck.charAt() === 'a') {
//     alert('Добро Пожаловать!')
// } else {
//     alert('Нельзя! Имя должно начинаться на А/а')
// }



// 18.10.23
    // ex 1
let name = 'alex'
let money = 10000
let account = 7777

let namePr = prompt('Your name').toLowerCase().trim()

if(namePr === name) {
    alert('success')
} else {
    alert('user undefined')
}

let accountPr = +prompt('account number?')

if(accountPr === account) {
    alert('success')
} else {
    alert('wrong account')
}

let moneyPr = prompt('how much to cash out?')

if(moneyPr >=1 && moneyPr <=10000) {
    alert('success')
} else {
    alert('not enough money')
}


    // ex 2 
let capacity = 10
let filled = 6
alert('6 filled')

let clubName = prompt('your name').toLowerCase().trim()
let age = +prompt('how old are u?')
let clubMoney = +prompt('how much money do you have')
let persons = prompt('how many persons?')

if(clubName.charAt() === 'a' &&
 age >=20 && age <=40 &&
 clubMoney >= 100 &&
 persons <=4) {
    alert('welcome')
 } else {
    alert('sorry, we cant let you into the club ')
 }