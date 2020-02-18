var worker;
function startWorker() {
    worker = new Worker('js/worker.js');
    worker.onmessage = function(event) {
        document.getElementById('output').innerHTML += '<li>' + event.data + '</li>';
    };
}
function stopWorker() {
    worker.terminate();
}
//It's not opening the worker file nor the js folder