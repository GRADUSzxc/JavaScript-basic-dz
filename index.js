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
// let name = 'alex'
// let money = 10000
// let account = 7777

// let namePr = prompt('Your name').toLowerCase().trim()

// if(namePr === name) {
//     alert('success')
// } else {
//     alert('user undefined')
// }

// let accountPr = +prompt('account number?')

// if(accountPr === account) {
//     alert('success')
// } else {
//     alert('wrong account')
// }

// let moneyPr = prompt('how much to cash out?')

// if(moneyPr >=1 && moneyPr <=10000) {
//     alert('success')
// } else {
//     alert('not enough money')
// }
// alert(moneyPr + " " + "Снято")
// alert(money - moneyPr + " " + "Осталось")


//     // ex 2 
// let capacity = 10
// let filled = 6
// alert('6 filled')

// let clubName = prompt('your name').toLowerCase().trim()
// let age = +prompt('how old are u?')
// let clubMoney = +prompt('how much money do you have')
// let persons = prompt('how many persons?')

// if(clubName.charAt() === 'a' &&
//  age >=20 && age <=40 &&
//  clubMoney >= 100 &&
//  persons <=4) {
//     alert('welcome')
//  } else {
//     alert('sorry, we cant let you into the club ')
//  }

// 22.10.23
// ex1
// let arr = ['alex', 'jordan', 'michael', 'amira', 'dilruh', 'alla', 'tangir', 'daler']

// let evenNames = arr.filter((name) => name.length % 2 === 0)
// let oddNames = arr.filter((name) => name.length % 2 !== 0)

// console.log(evenNames)
// console.log(oddNames)


     // ex2
// let nums = [1,2,3,4,5,6,7,9]

// let evenNums = []
// let oddNums = []

// evenNums.push(nums.filter((num) => num % 2 === 0))
// oddNums.push(nums.filter((num) => num % 2 !== 0))

// console.log(evenNums)
// console.log(oddNums)

// 25.10.23
// ex1
// let arr = ['hello', 1234, '', false, NaN, 123, true, ' ', null]

// let trueElems = [arr.filter((elem => {
//     return Boolean(elem)
// }))]

// console.log(trueElems)




// 26.10.23
// ex1
// let cs2 = {
//     name: "Counter-Strike 2",
//     date: 2023,
//     age: "1 month",
//     engine: "Source 2",
//     systemRequirements: {
//         CPU: "Intel® Core™ i5-7500 / AMD Ryzen 5 1600.",
//         GPU: "NVIDIA® GeForce® GTX 1650 4 ГБ / AMD Radeon RX 580.",
//         RAM: "12 GB",
//         OS: "windows 10/11 64-bit",
//         MEMORY: "85 GB"
//     },
//     developer: "VALVE"
// }

// let miniObj = {
//     privet: "privet",
//     kakDela: "kak dela?",
//     chtoDelaesh: "cho delaesh?",
//     choEl: {
//         kashu: "kashu",
//         plov: "plov"
//     }
// }

// let newObj = Object.assign({}, cs2, miniObj)

// let newObjKeys = Object.keys(newObj)
// let newObjValue = Object.values(newObj)//.concat(newObjKeys)

// let KeyValConcat = newObjKeys.concat(newObjValue)

// let types = {
//     string: [],
//     number: [],
//     object: [],
//     boolean: []
// }

// KeyValConcat.filter((elem) => {
//     if(typeof elem === 'string') {
//         types.string.push(elem)
//     } else if(typeof elem === 'number') {
//         types.number.push(elem)
//     } else if(typeof elem === 'object') {
//         types.object.push(elem)
//     } else if(typeof elem === 'boolean') {
//         types.boolean.push(elem)
//     } 
// })

// console.log(types)



//30.10.23
    //ex1

// let team = [
//     {
//         name: 'Gradus',
//         age: 14,
//         role: 'tank',
//         isMarried: false
//     },

//     {
//         name: 'W1nn1e',
//         age: 15,
//         role: 'damage',
//         isMarried: true
//     },

//     {
//         name: 'Paradoxx',
//         age: 15,
//         role: 'damage',
//         isMarried: true
//     },

//     {
//         name: 'Fl1kyyy',
//         age: 14,
//         role: 'support',
//         isMarried: false
//     },

//     {
//         name: 'Marshmellouto',
//         age: 15,
//         role: 'support',
//         isMarried: false
        
//     }
// ]
// console.log(team)

//     // ex2
// let averageAge = 0

// team.forEach(player => {
//     averageAge += player.age
// })

// averageAge = averageAge / team.length

// console.log('average age =', averageAge)

//     // ex3
// let Married = []
// let Solo = []

// team.forEach(player => {
//     if(player.isMarried === true) {
//         Married.push(player)
//     } else {
//         Solo.push(player)
//     }
// })

// console.log('Married:', Married)
// console.log('Solo:', Solo)



// 01.11.23
    // ex1

    let cars = [
        {
            model: "malibu",
            company: "general motors",
            color: "dry asphalt",
            engine: 2.4,
            price: 30000,
            beaten: false,
            year: 2022,
            mileage: 1000,
            tech_passport: {
                date: 2022,
                exp_date: 2032,
            }
        },
        {
            model: "tracker",
            company: "general motors",
            color: "black",
            engine: "2.2",
            price: 22000,
            beaten: false,
            year: 2021,
            mileage: 2000,
            tech_passport: {
                date: 2021,
                exp_date: 3031
            }
        },
        {
            model: "gentra",
            company: "general motors",
            color: "black",
            engine: 1.5,
            price: 17000,
            beaten: false,
            year: 2021,
            mileage: 6000,
            tech_passport: {
                date: 2021,
                exp_date: 2031,
            }
        },
        {
            model: 'cobalt',
            company: 'general motors',
            engine: 1.5,
            price: 15000,
            beaten: true,
            year: 2022,
            mileage: 13000,
            tech_passport: {
                date: 2022,
                exp_date: 2032,
            }
    
        },
        {
            model: 'Damas',
            company: 'Chevrolet',
            color: 'White',
            engine: 2.4,
            price: 10000,
            beaten: false,
            year: 2023,
            mileage: 100,
            tech_passport: {
                date: 2023,
                exp_date: 2033
            }
        },
        {
            model: "Spark",
            company: "general motors",
            color: "dirtygreen",
            engine: 1.250,
            price: 7000,
            beaten: true,
            year: 2008,
            mileage: 328000,
            tech_passport: {
                date: 2008,
                exp_date: 2023,
            }
        },
        {
            model: "bmw m5",
            engine: "бензиновыми двигателями рабочим объёмом 3453-4999 см3",
            year: 1998,
            beaten: false,
            price: 37000,
            color: "black",
            company: "BMW",
            tech_passport: {
                date: 2022,
                exp_date: 2032,
            }
    
        },
        {
            model: "Labo",
            company: "GM ",
            color: "white",
            engine: 0.8,
            price: 10000,
            beaten: false,
            year: 2023,
            mileage: 0,
            tech_passport: {
                date: 2023,
                exp_date: 2033,
            }
        },
        {
            model: "tico",
            company: "daewoo",
            color: "black",
            engine: 1.5,
            price: 10000,
            beaten: true,
            year: 2010,
            mileage: 1000,
            tech_passport: {
                date: 2022,
                exp_date: 2025,
            }
        },
        {
            model: 'traverse',
            company: 'chevrolet',
            color: 'black',
            engine: 3.6,
            price: 60000,
            beaten: false,
            year: 2023,
            mileage: 500,
            tech_passport: {
                date: 2023,
                exp_date: 2033
            }
        },
        {
            model: "volga",
            company: "uaz",
            color: "white",
            engine: 0.4,
            price: 700000,
            beaten: true,
            year: 1964,
            mileage: 3000000,
            tech_passport: {
                date: 1964,
                exp_date: 2023,
            }
        },
        {
            model: "ВАЗ 2106",
            company: "ВАЗ",
            color: "dry asphalt",
            engine: 1.5,
            price: 3000,
            beaten: true,
            year: 1995,
            mileage: 100000,
            tech_passport: {
                date: 1996,
                exp_date: 2026,
            }
        },
        {
            model: "velik",
            company: "Philips",
            color: "red",
            engine: "v12",
            price: 12000,
            beaten: false,
            year: 2009,
            mileage: 0,
            tech_passport: {
                date: 2022,
                exp_date: 2032,
            }
        },
        {
            model: 'Tahoe',
            company: 'CHEVROLET',
            color: 'black',
            engine: 5.3,
            price: 110000,
            beaten: false,
            year: 2022,
            mileage: 0,
            tech_passport: {
                date: 2022,
                exp_date: 2032
            }
        },
        {
            model: "Mercedes-Benz CLS",
            company: "Mercedes-Benz",
            color: "black",
            engine: 3.0,
            price: 110000,
            beaten: false,
            year: 2023,
            mileage: 200,
            tech_passport: {
                date: 2023,
                exp_date: 2033,
            }
        },
        {
            model: "malibu",
            company: "Chevrolet",
            color: "sky rim",
            engine: 2.4,
            price: 15000,
            year: 2022,
            beaten: false,
            mileage: 1500,
            tech_passport: {
                date: 2022,
                exp_date: 2054
            }
        },
        {
            model: "matiz",
            company: "general motors",
            color: "yellow",
            engine: 0.8,
            price: 4000,
            beaten: false,
            year: 2018,
            mileage: 5000,
            tech_passport: {
                date: 2018,
                exp_date: 2028,
            }
        },
        {
            model: "porter",
            company: "hyundai",
            color: "blue",
            engine: 2.5,
            price: 31000,
            beaten: false,
            year: 2023,
            mileage: 100,
            tech_passport: {
                date: 2023,
                exp_date: 2033,
            }
        },
        {
            year: 2023,
            price: 85000,
            engine: 6.5,
            mileage: 11.29,
            beaten: false,
            color: "black"
        }
    ]
    
    
    let from = prompt('from')
    let up = prompt('up')
    
    
    let result = []
    
    cars.forEach(car => {
        if (car.price >= from && car.price <= up) {
            result.push(`model: ${car.model}, price: ${car.price} \n`)
        }
    })
    
    
    let oneOfThem = prompt('По вашей ценовой категории найдено вот эти машины ' + result + " Выберите один из этого списка написав название машины")
    
    
    let findedCar = cars.find(car => car.model === oneOfThem)
    
    let toBuy = confirm(
        `Model: ${findedCar.model} 
        Company: ${findedCar.company} 
        Color: ${findedCar.color} 
        Engine: ${findedCar.engine} 
        Beaten: ${findedCar.beaten} 
        Year: ${findedCar.year} 
        Mileage: ${findedCar.mileage} 
        Tech Passport: date ${findedCar.tech_passport.date + ' - ' + 'exp date ' + findedCar.tech_passport.exp_date}
        PRICE: ${findedCar.price}`
    )
    
    if (toBuy === true) {
        let paying = prompt('введите сумму, цена машины: ' + findedCar.price)
        if (paying == findedCar.price) {
            alert('Поздравляем с покупкой!')
        } else if (paying < findedCar.price) {
            alert('Не верная сумма!')
        } else if (paying > findedCar.price) {
            alert(`Поздравляем с покупкой! ваша здача: ${paying - findedCar.price}`)
        }
    }



