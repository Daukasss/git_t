document.getElementById('submitButton').addEventListener('click', async () => {
    let input = document.getElementById('timeInput');
    var time = input.value.trim();
    if (!isNaN(time) && time > 0) { // Проверка на корректность ввода числа
        gettime(time);
    } else {
        alert("Please enter a valid positive number.");
    }
});

function gettime(time) {
    setTimeout(function () {
        alert("This function worked after " + time + " milliseconds.");
    }, time*10);
}
            