function makeRequests() {
    $.ajax({
        url: 'http://www.example.com/api',
        method: 'GET',
        dataType: 'json'
    })
        .fail(function() {
            alert('An error has occured')
        });
}
$(document).ready(function () {
    makeRequests();
});