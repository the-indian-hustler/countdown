const endDate = "1 January 2024 00:00 AM";
document.getElementById("end-date").innerText = endDate;

const inputs = document.querySelectorAll('.timebox input');

function clock() {
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now) / 1000;

    //storing the days
    inputs[0].value = Math.floor(diff / 3600 / 24);
    //storing the hours
    inputs[1].value = Math.floor(diff / 3600) % 24;
    //storing the minutes
    inputs[2].value = Math.floor(diff / 60) % 60;
    //storing the seconds
    inputs[3].value = Math.floor(diff) % 60;
}

//initial call to the function
clock();

setInterval(() => {
    clock();
}, 1000);
