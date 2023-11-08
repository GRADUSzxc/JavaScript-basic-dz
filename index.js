// 08.11.23

let attempts = 3

while(attempts > 0) {
    let pwd = +prompt('password')

    if(pwd === 7777) {
        alert('welcome')
        break
    } else {
        attempts--
        alert(`incorrect! attempts left : ${attempts}`)
    }

    if(attempts === 0) {
        alert('attempts are over')
    }
}