window.onload = function () {
  var headings = document.querySelectorAll("#heading-section h1");
  var currentIndex = 0;

  function displayNextHeading() {
    // Hide the current heading
    headings[currentIndex].classList.add("hide");

    // Move to the next heading
    currentIndex++;
    if (currentIndex >= headings.length) {
      currentIndex = 0; // Restart from the first heading
    }

    // Display the next heading
    headings[currentIndex].classList.remove("hide");
  }

  // Hide all headings except the first one initially
  for (var i = 1; i < headings.length; i++) {
    headings[i].classList.add("hide");
  }

  // Display the headings one by one every 3 seconds
  setInterval(displayNextHeading, 2000);

  // moving boxes
  var box = document.getElementById("leftbox");
  setTimeout(function () {
    box.style.left = "0"; // Move the box to the left edge of the viewport
  }, 100);

  var box1 = document.getElementById("rightbox");
  setTimeout(function () {
    box1.style.right = "0"; // Move the box to the left edge of the viewport
  }, 100);
  

};

// for scrollup button
// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}




