

function reveal_vodka() {
  var x = document.getElementById("vodka");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


function reveal_gin() {
  var x = document.getElementById("gin");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function cancel_vodka() {
    // Removes an element from the document
    var element = document.getElementById("vodka");
    element.parentNode.removeChild("vodka");
}
