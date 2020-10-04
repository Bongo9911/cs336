function keyUpHandler() {
    tb = document.getElementById("textbox");
    tb.value = tb.value.toUpperCase(); //converts all characters to uppercase

    words = document.getElementById("words");
    matches = tb.value.match(/[\w\d\’\'-]+/gi); //finds words by checking for non-space characters then a space
    numWords = matches ? matches.length : 0;
    words.innerHTML = numWords + (numWords != 1 ? " words" : " word"); //uses plural when needed

    characters = document.getElementById("characters");
    characters.innerHTML = tb.value.length + (tb.value.length != 1 ? " characters" : " character");
  }
