let people = [
    {
        name: "bobur",
        age: 43,
        isMarried: false,
        wifes: ['kamila', 'safir', 'allayor']
    },
    {
        name: "ismail",
        age: 12,
        isMarried: true,
        wifes: ['nikita', 'malika']
    },
    {
        name: "allayor",
        age: 14,
        isMarried: true,
        wifes: ['denis', 'dima', 'dimon', 'xbegim']
    },
    {
        name: "sarodr ml",
        age: 18,
        isMarried: false,
        wifes: ['safiya']
    },
]

let guilties = []
let legit = []

for(let person of people) {
    if(person.wifes.length > 1 || person.age < 18) {
        guilties.push(person)
    } else {
        legit.push(person)
    }
}


for(let person of guilties) {
    document.write('GUILTY:' + '<br>' + ' Name: ' + person.name + '<br>' + ' Age: ' + person.age + '<br>' + ' Wifes: ' + person.wifes + '<br>' + '<br>')
}

for(let person of legit) {
    document.write('LEGIT:' + '<br>' + ' Name: ' + person.name + '<br>' + ' Age: ' + person.age + '<br>' + ' Wifes: ' + person.wifes + '<br>' + '<br>')
}