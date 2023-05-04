function centuriesToMinutes(cent) {
    let centuries = Number(cent);
    let years = centuries * 100;
    let days = Math.trunc(years * (365.2422))
    let hours = days * 24
    let minutes = hours * 60
    
    let print = (`${centuries} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`)
    console.log(print)
    
}