function chessKnight(cell) {
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const numbers = ['1', '2', '3', '4', '5', '6', '7', '8'];
    const chessBoard = [];
    for (i = 0; i < letters.length; i++) {
        for (j = 0; j < numbers.length; j++) {
            chessBoard.push(letters[i] + numbers[j]);
        }
    }
    let posMoves = [];
    let resultsArr = [];

    const curMove = cell.split('');
    let ind = letters.indexOf(curMove[0]);
    posMoves.push(letters[ind - 2], letters[ind + 2]);
    ind = numbers.indexOf(curMove[1]);
    posMoves.push(numbers[ind - 2], numbers[ind + 2]);
    posMoves = posMoves.filter((elem) => elem !== undefined);

    for (i = 0; i < posMoves.length; i++) {
        if (posMoves[i].match(/[a-zA-Z]/i)) {
            resultsArr.push(posMoves[i] + numbers[(numbers.indexOf(curMove[1])) + 1], posMoves[i] + numbers[(numbers.indexOf(curMove[1])) - 1]);
        }
        if (posMoves[i].match(/[0-9]/)) {
            resultsArr.push(letters[(letters.indexOf(curMove[0]) - 1)] + posMoves[i], letters[(letters.indexOf(curMove[0]) + 1)] + posMoves[i]);
        }
    }
    
    resultsArr = resultsArr.filter((elem) => chessBoard.indexOf(elem) !== -1);
    return resultsArr.length;
}
