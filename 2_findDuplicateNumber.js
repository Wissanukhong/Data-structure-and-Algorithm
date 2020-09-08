function findDuplicateNumber() {
    let arr = [1,2,3,3,4];
    let result = arr.filter(a => (arr.filter(b => (a == b)).length != 1));
    if(result.length >= result){
        console.log(result)
    }else 
    console.log("-1")
}

findDuplicateNumber()
