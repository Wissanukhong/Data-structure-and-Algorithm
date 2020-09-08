function findDuplicateNumber() {
    let arr = [1, 2, 3, 3, 4];
    let result = arr.filter(a => (arr.filter(b => (a == b)).length != 1));

    if (result.length == 0) {
        result = -1;
    }

    console.log(result);
}

findDuplicateNumber()


// https://i.learnalgorithm.com/lesson/2-time-complexity-analysis