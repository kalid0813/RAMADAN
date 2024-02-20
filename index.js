document.addEventListener("DOMContentLoaded", function () {
  // Set the date for the start of Ramadan (change this date as needed)
  var ramadanStartDate = new Date("march 11, 2024 00:00:00").getTime();

  // Update the countdown every 1 second
  var x = setInterval(function () {
    // Get the current date and time
    var now = new Date().getTime();

    // Calculate the distance between now and the start of Ramadan
    var distance = ramadanStartDate - now;

    // Calculate days, hours, minutes, and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdown in the element with id="countdown"
    document.getElementById("countdown").innerHTML = `
      <div>${days}<span>Days</span></div>
      <div>${hours}<span>Hours</span></div>
      <div>${minutes}<span>Minutes</span></div>
      <div>${seconds}<span>Seconds</span></div>
    `;

    // If the countdown is over, display a message
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdown").innerHTML =
        "<div>RAMADAN HAS BEGUN!</div>";
    }
  }, 1000);
});
