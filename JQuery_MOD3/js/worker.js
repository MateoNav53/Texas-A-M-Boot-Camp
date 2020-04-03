//Sample worker script

//send ready message(again - sample implementation)
self.postMessage('Ready');

//Sleep for two seconds
//simulate a long-running operation
sleep(2000);

//Send completed message
self.postMessage('Completed');

function sleep(miliseconds) {
    var startingTime = new Date().getTime();
    var stopTime = startingTime + miliseconds;

    while (stopTime >= new Date().getTime()) { };
};