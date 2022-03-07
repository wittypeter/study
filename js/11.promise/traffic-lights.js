function red() {
    console.log('red')
}

function green() {
    console.log('green');
}

function yellow() {
    console.log('yellow');
}

function flashing(light, holdOn) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            light();
            resolve();
        }, holdOn);
    })
}

function trafficLights() {
    flashing(red, 3 * 1000).then(() => {
        return flashing(green, 2 * 1000);
    }).then(() => {
        return flashing(yellow, 1 * 1000);
    }).then(() => {
        trafficLights();
    })
}

trafficLights();