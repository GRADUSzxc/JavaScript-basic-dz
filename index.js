
// 19.11.23
   // ex1

function checkAge(age) {
    if(age >= 18) {
        alert('welcome')
    } else if(age > 0 && age < 18) {
        alert('you are small')
    } else if(age !== 'number' || age < 1) {
        alert('goofball!')
    }
}

checkAge(prompt('age'))



    // ex2

function maxName(name, name1, name2) {
    let max = Math.max(name.length, name1.length, name2.length) 
    if(name.length === max) {
        alert(name)
    } else if(name1.length === max) {
        alert(name1)
    } else if(name2.length === max) {
        alert(name2)
    }
}

maxName('alex', 'george', 'Michael')



// ex3
function min(a, b) {
    if(a && b >= 1) {
        alert(Math.min(a, b))
    } else if(Array.isArray(a)) {

        let minNumArr = a[0]

        for(let i = 1; i < a.length; i++) {
            if(a[i] < minNumArr) {
                minNumArr = a[i]
            }
        }
        alert(minNumArr)
    } else if(typeof(a) === 'object') {

        let arrForObj = Object.values(a)
        let minNumArr1 = arrForObj[0]

        for(let i = 1; i < arrForObj.length; i++) {
            if(arrForObj[i] < minNumArr1) {
                minNumArr1 = arrForObj[i]
            }
        }
        alert(minNumArr1)

    } else if(typeof(a) === 'object' && typeof(b) === 'object') {

        let concat = Object.values(a)
        let concat1 =  Object.values(b)
        let arrForObj1 = concat.concat(concat1)

        let minNumArr2 = arrForObj1[0]

        for(let i = 1; i < arrForObj1.length; i++) {
            if(arrForObj1[i] < minNumArr2) {
                minNumArr2 = arrForObj1[i]
            }
        }
        alert(minNumArr2)
    }
}
min(1, 2)
min([1, 2])
min({a: 1, b: 2})
min({a: 1, b: 2}, {a: 11, b: 12})



// ex4

function findProportion(total, broken) {
    alert('total: ' + total + ' ' + 'broken: ' + broken + ' ' + '= ' + broken / total * 100 + '%')
}

findProportion(100000, 66666)


