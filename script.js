function updateClock() {
    const now = new Date();

    const date = now.toLocaleDateString("id-ID");
    const time = now.toLocaleTimeString("id-ID");

    document.getElementById("clock").innerHTML =
        date + " | " + time;
}

setInterval(updateClock, 1000);
