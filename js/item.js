function lootR() {
    let arr = ['sword', 'pick'];
    arr[0] = Math.floor(Math.random() * arr.length);
    arr[1] = Math.random() * (1) + 1;
    arr.splice(2, 1);
    return arr;
}

function castle() {
    let arr = [['sword'][3], 'pick']
    arr.splice(2, 1);
    return arr;
}