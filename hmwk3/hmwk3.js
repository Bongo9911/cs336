
function showHint() {
    var hintElement = document.getElementById("hint");          //gets the hint
    var hintButton = document.getElementById("hintButton");     //gets the hint button

    if (hintElement.style.display === "none") {                 //checks if hidden
      hintElement.style.display = "block";
      hintButton.innerHTML = "Hide Hint";
    } else {                                                    //checks if shown
      hintElement.style.display = "none";
      hintButton.innerHTML = "Show Hint";
    }
  }
