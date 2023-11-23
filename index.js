// 21.11.23

function randomID(length) {
    let ID = ''
    let letters = 'qwertyuiopasdfghjklzxcvbnm1234567890'
    for(let i = 0; i < length; i++) {
        ID += letters.charAt(Math.round(Math.random() * letters.length))
    }
    alert(ID)
}

randomID(10)



// ex2

function sortArray(arr) {
    let sorted = false
    while (sorted === false) {
      sorted = true
      for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          let vremenniy = arr[i]
          arr[i] = arr[i + 1]
          arr[i + 1] = vremenniy
          sorted = false
        }
      }
    }
    return arr
  }
  
  
  let sortedArr = sortArray([9,7,6,8,5,3,4])
  console.log(sortedArr)
  



