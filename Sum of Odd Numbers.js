function rowSumOddNumbers(n) {
    // Get first number of row
    var firstNum = 1;
    var loopCount = 0;
    for (var j = 0; loopCount < n; j = j + 2) {
        console.log(firstNum += j);
        loopCount++;
    }
    loopCount = 0;
    var total = 0;
    
    // Add the row together
    for (var i = firstNum; loopCount < n; i = i + 2) {
        total += i;
        loopCount++;
    }
    return total;
}
