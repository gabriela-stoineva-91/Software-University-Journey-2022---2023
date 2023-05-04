function attachEventsListeners() {

    const timeObject = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400,
    };

    let buttonDaysElement = document.getElementById('daysBtn');
    let buttonHoursElement = document.getElementById('hoursBtn');
    let buttonMinutesElement = document.getElementById('minutesBtn');
    let buttonSecondsElement = document.getElementById('secondsBtn');

    let daysInputElement = document.getElementById('days');
    let hoursInputElement = document.getElementById('hours');
    let minutesInputElement = document.getElementById('minutes');
    let secondsInputElement = document.getElementById('seconds');

    buttonDaysElement.addEventListener('click', () => {
        hoursInputElement.value = Number(daysInputElement.value) * timeObject['hours'];
        minutesInputElement.value = Number(daysInputElement.value) * timeObject['minutes'];
        secondsInputElement.value = Number(daysInputElement.value) * timeObject['seconds'];
    });
    buttonHoursElement.addEventListener('click', () => {
        daysInputElement.value = Number(hoursInputElement.value) / 24;
        minutesInputElement.value = Number(hoursInputElement.value) * 60;
        secondsInputElement.value = Number(hoursInputElement.value) * 60 * 60;
    });
    buttonMinutesElement.addEventListener('click', () => {
        daysInputElement.value = Number(minutesInputElement.value) / 60 / 24;
        hoursInputElement.value = Number(minutesInputElement.value) / 60;
        secondsInputElement.value = Number(minutesInputElement.value) * 60;
    });
    buttonSecondsElement.addEventListener('click', () => {
        daysInputElement.value = Number(secondsInputElement.value) / 60 / 60/ 24;
        hoursInputElement.value = Number(secondsInputElement.value) / 60 / 60;
        minutesInputElement.value = Number(secondsInputElement.value) / 60;
     })

    // One day is equal to 24 hours / 1440 minutes / 86400 seconds. 
    // Whichever button we click, the input fields should change depending 
    // on the added value on the left. (For example, if we write
    // 48 hours and click convert the days, the field value should change t
}