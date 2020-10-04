function keyUpHandler() {
    tb = document.getElementById("textbox");
    tb.value = tb.value.toUpperCase();

    words = document.getElementById("words");
    matches = tb.value.match(/[\w\d\’\'-]+/gi);
    numWords = matches ? matches.length : 0
    words.innerHTML = numWords + (numWords != 1 ? " words" : " word");

    characters = document.getElementById("characters");
    characters.innerHTML = tb.value.length + (tb.value.length != 1 ? " characters" : " character");
  }