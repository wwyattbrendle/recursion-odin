function fibs(n) {
    let array = [];
    if(n === 0) {
        return array;
    } else if (n === 1) {
        return array.push(0);
    } else if (n === 2) {
        return array.push(0, 1);
    } else {
        array.push(0, 1);
        for (let i = 2; i < n; i++){ //i is effectively array length and n is desired length
            array.push(array[i - 1] + array[i - 2]);
        }
        return array;
    }
}

function fibsRec(n) {
    if (n === 2) {
        return array = [n - 2, n - 1];
    } else if (n < 2) {
        return array = [n - 1];
    } else {
        return [...fibsRec(n - 1),
                fibsRec(n - 1)[n - 3] + fibsRec(n - 1)[n - 2]];
    }
}