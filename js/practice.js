module.exports = {
    recursiveCountDown,
    sumFunction,
    countList,
}

function recursiveCountDown(i, store) {    
    store.push(i)
    return i <= 0 ? store : recursiveCountDown(i -= 1, store)
}

function sumFunction(list) {
    if ( list.length === 0 ) { return 0 }

    let firstElement = list.shift()
    return firstElement + sumFunction(list)
}

function countList(list) {
    if (list.length === 0) { return 0 }
    
    return 1 + countList(list.slice(1))
}