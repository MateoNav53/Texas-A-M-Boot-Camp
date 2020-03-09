document.getElementById("signup-button").addEventListener("click", function() {
    document.querySelector(".modal-background").style.display = "flex";
});
document.querySelector(".close-button").addEventListener('click', function() {
    document.querySelector(".modal-background").style.display = "none";
});