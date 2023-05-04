function extract(currentUrl) {
    const arrUrl = currentUrl.split('\\');
    let template = arrUrl.pop();
    let lastDot = template.lastIndexOf('.');
    let lastPart = template.substring(lastDot+1);
    let name = template.substring(0, lastDot)

    console.log(`File name: ${name}\nFile extension: ${lastPart}`)
}
extract('C:\\Internal\\training-internal\\Template.pptx')
