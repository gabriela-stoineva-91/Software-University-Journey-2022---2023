function roadRadar(speed, area) {
    const obj = {
        'motorway': 130,
        'interstate': 90,
        'city': 50,
        'residential': 20
    }
    if (obj[area] >= speed) {
        console.log(`Driving ${speed} km/h in a ${obj[area]} zone`);
    } else {
        let status; 
        let diff = speed - obj[area];
        if (diff > 40) {
            status = 'reckless driving';    
        } else if (diff > 20) {
            status = 'excessive speeding';
        } else {
            status = 'speeding';
        }
        console.log(`The speed is ${diff} km/h faster than the allowed speed of ${obj[area]} - ${status}`);
    }
}