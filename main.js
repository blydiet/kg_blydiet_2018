const prompt = require('prompt')

prompt.start()


prompt.get(['str1', 'str2'], (err, result) => {
    if (err) return onError(err)
    let firstStr = result.str1
    let secondStr = result.str2
    mapString(firstStr, secondStr)
    
})



function mapString (firstStr, secondStr) {
    if (firstStr.length !== secondStr.length){
        console.log('false')
        return false
    }
    let arrayStr1 = new Map
    let arrayStr2 = new Map
    hashValue(firstStr, arrayStr1)
    hashValue(secondStr, arrayStr2)
    let strPtr1 = 0
    let strPtr2 = 0
    let totalMapVal = 0

    while (strPtr1< arrayStr1.length && strPtr2 < arrayStr2.length){
        if (arrayStr1[strPtr1] > arrayStr2[strPtr2]){
            console.log('false')
            return false
        } else if (arrayStr1[strPtr1] < arrayStr2[strPtr2]){
            totalMapVal += arrayStr2[strPtr1]
            strPtr1++
        } else if (totalMapVal === arrayStr2[strPtr2]) {
            totalMapVal = 0
            strPtr2++
        } else {
            strPtr1++
            strPtr2++
        }
    }
    console.log('true')
    return true
}

function hashValue (str, hash) {
    let count = 0
    for (let i = 0; i < str.length; i++){
        if (hash.get(str[i]) === undefined){
            count = 0
            hash.set(str[i], count) = ++count
        } else {
            ++count 
            hash.set(str[i], count)
        }
    }
    return hash
}


const onError = (err)=> {
    console.log(err)
    return 1
}


  