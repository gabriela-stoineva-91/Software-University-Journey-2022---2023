function dayOfWeek(n) {
    let number = Number(n);
    let dayOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let print = '';
    if (number >= 0 && number <= 7) {
        print = dayOfWeek[number - 1];

        //switch (number) {
            ////case 1: print = dayOfWeek[0]; break;
            //case 2: print = dayOfWeek[1]; break;
            //case 3: print = dayOfWeek[2]; break;
            //case 4: print = dayOfWeek[3]; break;
            //case 5: print = dayOfWeek[4]; break;
            //case 6: print = dayOfWeek[5]; break;
            //case 7: print = dayOfWeek[6]; break;

        //}
        console.log(print);
    } else {
        console.log('Invalid day!');
    }
}
dayOfWeek(5)