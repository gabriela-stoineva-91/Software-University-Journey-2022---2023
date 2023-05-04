function timeToWalk(steps, footprint, speedHour) {
    
    let lengthInMeters = steps * footprint;
    let plusMinInSec = Math.floor(lengthInMeters / 500) * 60;
    let speedInSec = speedHour / 3.6;
    let timeInSec = lengthInMeters / speedInSec + plusMinInSec;

    let hours = Math.floor(timeInSec / 3600);
    let min = Math.floor(timeInSec / 60);
    let seconds = Math.round(timeInSec - (hours * 3600 + min * 60))
    
    let hourToPrint = hours < 10 ? `0${hours}`: `${hours}`;
    let minToPrint = min < 10 ? `0${min}`: `${min}`;
    let secToPrint = seconds < 10 ? `0${seconds}` : `${seconds}`;

    console.log(`${hourToPrint}:${minToPrint}:${secToPrint}`);
}
