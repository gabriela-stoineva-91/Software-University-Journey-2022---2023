function cutAndReverse(text) {

    let middleIndex = text.length / 2;

    let startPart = text.substring(0, middleIndex).split('').reverse();
    let endPart = text.substring(middleIndex).split('').reverse();

    console.log(startPart.join(''));
    console.log(endPart.join(''))

}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')