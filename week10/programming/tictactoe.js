let pattern = [
    [0, 2, 0],
    [0, 1, 0],
    [0, 0, 0]   
]

let color = 1

function show() {
    let board = document.querySelector('#board')
    board.innerHTML = ''

    for(let i = 0; i < 3; i++) {
        for(let j = 0; j < 3; j++) {
            let cell = document.createElement('div')
            cell.classList.add('cell')
            cell.innerText = pattern[i][j] === 2 ? 'x' :
                pattern[i][j] === 1 ? "o" : "";

            cell.addEventListener('click', () => move(j, i))

            board.appendChild(cell)
        }
    }
}

function move(x, y) {
    if (pattern[y][x]) return false
    pattern[y][x] = color
    if(check(pattern, color)){
        alert(color === 2 ? "x is winner" : "o is winner")
    }
    color = 3 - color
    show()
    if (willWin(pattern, color)) {
        console.log(color === 2 ? "x will win" : "o will win");
    }
}
 
function check(pattern, color) {
    for(let i = 0; i < 3; i++) {
        let win = true
        for(let j = 0; j < 3; j++) {
            if(pattern[i][j] !== color) {
                win = false
            }
        }
        if (win) return true
    }
    for(let i = 0; i < 3; i++) {
        let win = true
        for(let j = 0; j < 3; j++) {
            if(pattern[j][i] !== color) {
                win = false
            }
        }
        if (win) return true
    }
    {
    let win = true;
        for(let i = 0; i < 3; i++) {
            for(let j = 0; j < 3; j++) {
                if(pattern[j][j] !== color) {
                    win = false
                }
            }
            if (win) return true
        }
    }
    {
    let win = true;
        for(let i = 0; i < 3; i++) {
            for(let j = 0; j < 3; j++) {
                if(pattern[j][2 - j] !== color) {
                    win = false
                }
            }
            if (win) return true
        }
    }
}

function clone(pattern) {
    return JSON.parse(JSON.stringify(pattern))
}

function willWin(pattern, color) {
    for(let i = 0; i < 3; i++) {
        for(let j = 0; j < 3; j++) {
            if(pattern[i][j] !== 0) {
                continue
            }
            let tmp = clone(pattern)
            tmp[i][j] = color
            if(check(tmp, color)) {
                return [j, i]
            }
        }
    }
    return null
}

// 自己有2个以上将要赢得情况，对方没有一个

function bestChoice(pattern, color) {
    let point = null
    if (point = willWin(pattern, color)) {
        return {
            point: point,
            result: 1
        }
    }

    let result = -1;
    for(let i = 0; i < 3; i++) {
        for(let j = 0; j < 3; j++) {
            if(pattern[i][j] !== 0) {
                continue
            }
            let tmp = clone(pattern)
            tmp[i][j] = color
            let opp = bestChoice(tmp, 3 - color)
            if(-opp.result >= result) {
                point = [j, i]
                result = -opp.result
            }
        }
    }

    return {
        point: point,
        result: point ? result : 0
    }
}

show(pattern)