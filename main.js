const prompt = require('prompt')

prompt.start()


const hashValue = (str, hash) => {
    let count = 0
    for (let i = 0; i < str.length; i++){
        if (hash[str[i]] === undefined){
            count = 0
            hash[str[i]] = ++count
        } else {
            ++hash[str[i]]
        }
    }
    return hash
}


prompt.get(['str1', 'str2'], (err, result) => {
    if (err) return onError(err)
    let firstStr = result.str1
    let secondStr = result.str2
    if (firstStr.length !== secondStr.length){
        return false
    }
    let hashStr1 = hashValue(firstStr, {})
    let hashStr2 = hashValue(secondStr, {})
    console.log(hashStr1)

})

const onError = (err)=> {
    console.log(err)
    return 1
}