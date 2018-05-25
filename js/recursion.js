module.exports = {
    recursiveCountDown,

}

function recursiveCountDown(i, store) {    
    store.push(i)
    return i <= 0 ? store : recursiveCountDown(i -= 1, store)
}

