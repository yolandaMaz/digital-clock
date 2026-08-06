function clock () {

    let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let today = new Date();

    document.getElementById('Date').innerHTML = (dayNames [today.getDay()] + " " + today.getDate() + " " + monthNames [today.getMonth()] + " " + today.getFullYear());
    
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    let day = hours <11 ? "AM" : "PM";

    if (hours <10 ) {
        hours = "0" + hours;
    }

    if (minutes <10 ) {
        minutes = "0" + minutes;
    }

    if (seconds <10 ) {
        seconds = "0" + seconds;
    }

    document.getElementById("hours").innerHTML = hours;
    document.getElementById("min").innerHTML = minutes;
    document.getElementById("sec").innerHTML = seconds;
}
let inter = setInterval(clock, 1000);