function chessBoardCellColor(cell1, cell2) {
    // Finds what color tile the chess piece is on  
    const rowSetOne = ['A', 'C', 'E', 'G'];
    let cellArr = [];
    cellArr.push(cell1, cell2);
    for (i = 0; i < cellArr.length; i++) {
        if (rowSetOne.filter((elem) => elem === cellArr[i][0]).length > 0) {
            if (cellArr[i][1] % 2 === 1) {
                cellArr[i] = 'black';
            } else {
                cellArr[i] = 'white';
            }
        } else {
            if (cellArr[i][1] % 2 === 1) {
                cellArr[i] = 'white';
            } else {
                cellArr[i] = 'black';
            }
        }
    }
    // Compares cellArr to see if pieces are same type and then returns answer
    return cellArr[0] === cellArr[1] ? true : false;
}
