function accum(s) {
    var result = [];
    var arr = s.toLowerCase().split('');
    for (var i = 0; i < arr.length; i++) {
        result.push(arr[i].repeat(i + 1).replace(/\w/, arr[i].charAt(0).toUpperCase()));
    }
    return result.join('-');
}
