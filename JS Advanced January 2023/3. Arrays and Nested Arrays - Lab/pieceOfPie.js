function pieceOfPie(arr, target1, target2) {

    let ind1 = arr.indexOf(target1);
    let secInd = arr.indexOf(target2) + 1;
    let result = arr.slice(ind1, secInd);
    return result;

}