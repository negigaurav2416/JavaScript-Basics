let clock = document.getElementById('clock');

setInterval(function () { // function will run again and again after every given amount of time.
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000); // 1000 ms = 1 sec
