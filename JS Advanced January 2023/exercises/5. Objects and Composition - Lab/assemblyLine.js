function createAssemblyLine() {

    return {
        hasClima(car) {
            car.temp = 21;
            car.tempSettings = 21;
            car.adjustTemp = function () {
                if (car.tempSettings > car.temp) {
                    car.temp++;
                } else if (car.temp > car.tempSettings) {
                    car.temp++;
                }
            }

        },
        hasAudio(car) {
            car.currentTrack = {
                name: null,
                artist: null,
            };
            car.nowPlaying = () => {
                if (car.currentTrack.name !== null && car.currentTrack.artist !== null) {
                    console.log(`Now playing '${car.currentTrack.name}' by ${car.currentTrack.artist}`);
                }
            };
        },
        hasParktronic(car) {
            car.checkDistance = (dist) => {
                if (Number(dist) < 0.1) {
                    console.log('Beep! Beep! Beep!');
                } else if (Number(dist) < 0.25) {
                    console.log('Beep! Beep!');
                } else if (Number(dist) < 0.5) {
                    console.log('Beep!');
                } else {
                    console.log('');
                }
            }

        },
    };
}