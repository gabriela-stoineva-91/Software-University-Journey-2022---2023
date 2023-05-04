function rectangle(width, height, color) {
    let char = color.split('').shift().toUpperCase();
    let sec = color.split('').slice(1).join('');
    let colorToUp = char + sec;
    let obj = {
        width: Number(width),
        height: Number(height),
        color: colorToUp,
        calcArea(){
            let area = obj.width * obj.height;
            return area;
        },
    }
    return obj;
}