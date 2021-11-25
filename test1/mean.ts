const _ = module.exports = {}

_.join = function (array, separator = ',') {
    var newAry = ""
    for (var i = 0; i < array.length; i++) {
        newAry += array[i]
        if (i == array.length - 1) {
            break
        } else {
            newAry += separator
        }
    }
    return newAry
}

_.last = function (array) {
    return array[array.length - 1]
}

_.nth = function (array, n = 0) {
    if (n < 0) {
        return array[array.length + n]
    }
    else {
        return array[n]
    }
}