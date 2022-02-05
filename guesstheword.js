window.onload = function () {
  let warr = ["диван", "тостер", "холодильник"];
  let n = warr[getRandomInt(warr.length + 1)];
  let word = n;
  let goButton = document.getElementById("go");
  let guessButton = document.getElementById("guess");
  let answ = document.getElementById("answ");
  let rem = document.getElementById("rem");
  let reloadButton = document.getElementById("reload");

  let remain = 0;
  let answer = [];
  let count = 0;
  //goButton.onclick = init;
  goButton.addEventListener("click", init);
  guessButton.addEventListener("click", check);
  reloadButton.addEventListener("click", reloading);

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function reloading() {
    location.reload();
  }

  function init() {
    remain = word.length - 2;
    answer[0] = word[0];
    console.log(answer[0]);
    answer[word.length - 1] = word[word.length - 1];
    console.log(answer[word.length - 1]);
    for (let i = 1; i < answer.length - 1; i++) {
      answer[i] = "_";
    }
    console.log(answer);
    answ.innerHTML = answer.join(" ");
    rem.innerHTML = remain;
    guessButton.removeAttribute("disabled");
    reloadButton.removeAttribute("disabled");
  }

  function check() {
    let guess = prompt("Guess a letter!");
    for (let i = 1; i < word.length - 1; i++) {
      if (word[i] == guess.toLowerCase()) {
        answer[i] = guess.toLowerCase();
        count++;
      } else if (word[i] != guess.toLowerCase()) {
        count.innerHTML += guess.toLowerCase();
      }
    }

    remain--;
    answ.innerHTML = answer.join(" ");
    rem.innerHTML = remain;
    // count.innerHTML = count;

    if (remain <= 0) {
      if (count < word.length - 2) {
        alert("game over");
        alert("end of game");
        reloading();
      } else if (count == word.length - 2) {
        alert("you won");
        alert("end of game");
        reloading();
      }
    }
  }
};
