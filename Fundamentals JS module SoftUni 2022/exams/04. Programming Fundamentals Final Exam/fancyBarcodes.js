function fancyBarcodes(input) {
    let count = Number(input.shift());
    let pattern = /(@[#]{1,})(?<barcode>[A-Z][A-Za-z0-9]{4,}[A-Z])(@[#]{1,})/g;
    let patternBarcode = /[0-9]+/g;

    for (let i = 0; i < count; i++) {
        let current = input[i];
        let validMatch = current.match(pattern);
        if (validMatch === null) {
            console.log('Invalid barcode');
        } else {
            let barcodeDig = '';
            validMatch = validMatch.join('')
            let digits = validMatch.match(patternBarcode);
            if (digits === null) {
                barcodeDig = '00';
            } else if (digits.length > 1) {
                digits.forEach((a) => {
                    barcodeDig += a
                })
            } else {
                barcodeDig = digits.join('')
            }
            console.log(`Product group: ${barcodeDig}`)
        }

    }
}
fancyBarcodes((["3",
"@#FreshFisH@#",
"@###Brea0D@###",
"@##Che4s6E@##"]))
