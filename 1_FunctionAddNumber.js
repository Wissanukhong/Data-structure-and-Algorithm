// solution 1
const findDuplicateNumber = (arr) => {
    let results = [];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1] == arr[i]) {
            results.push(arr[i]);
        }

        mm = results

    }
    if ((mm.length < 1)) {
        return -1;
    }
    return mm
};

let duplicatedArray = [1, 2, 3, 3, 4];
console.log(findDuplicateNumber(duplicatedArray));

// solution 2
function findDuplicateNumber(arr) {
    for (let i = 0; i < arr.length; ++i) {
        for (let j = i + 1; j < arr.length; ++j) {
            if (arr[i] === arr[j]) return arr[i];
        }
    }
    return -1;
}

// solution 3
function findDuplicateNumber(arr) {
    arr.sort();
    for (let i = 0; i < arr.length - 1; ++i) {
        if (arr[i] === arr[i+1]) return arr[i];
    }
    return -1;
}

// solution 4 
function findDuplicateNumber(arr) {
    const checker = {};
    for (let i = 0; i < arr.length; ++i) {
        if (checker[arr[i]]) return arr[i];
        checker[arr[i]] = true;
    }
    return -1;
}