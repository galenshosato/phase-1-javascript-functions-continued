// code your solution here

function saturdayFun(funtime) {
    let x 
    if (funtime) {
        return x = `This Saturday, I want to ${funtime}!`
    }
    else {
        funtime = 'roller-skate'
        return x = `This Saturday, I want to ${funtime}!`
    }
}

const mondayWork = function (sadtime) {
    let x
    if (sadtime) {
        return x = `This Monday, I will ${sadtime}.`
    }
    else {
        sadtime = 'go to the office'
        return x = `This Monday, I will ${sadtime}.`
    }
}

function wrapAdjective (symbol = '*') {
    return function (encourage = 'special') {
        return `You are ${symbol}${encourage}${symbol}!`
    }
}