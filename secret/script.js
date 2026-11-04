const envelopeBtn =
  document.getElementById("envelopeBtn");

const introScreen =
  document.getElementById("introScreen");

const questionScreen =
  document.getElementById("questionScreen");

const answerScreen =
  document.getElementById("answerScreen");

const yesBtn =
  document.getElementById("yesBtn");

const noBtn =
  document.getElementById("noBtn");

const againBtn =
  document.getElementById("againBtn");



/* =========================
   OPEN ENVELOPE
========================= */

envelopeBtn.addEventListener("click", () => {

  envelopeBtn.classList.add("open");

  setTimeout(() => {

    introScreen.classList.add("hidden");

    questionScreen.classList.remove("hidden");

  }, 900);

});



/* =========================
   YES BUTTON
========================= */

yesBtn.addEventListener("click", () => {

  questionScreen.classList.add("hidden");

  answerScreen.classList.remove("hidden");

  createConfetti();

});



/* =========================
   NO BUTTON
========================= */

function moveNoButton() {

  const parent =
    noBtn.parentElement;

  const maxX =
    Math.max(
      30,
      parent.clientWidth -
      noBtn.offsetWidth
    );

  const x =
    Math.random() *
    maxX -
    maxX / 2;

  const y =
    Math.random() *
    100 -
    50;

  noBtn.style.transform =
    `translate(${x}px, ${y}px)`;

}


/* Desktop */

noBtn.addEventListener(
  "mouseenter",
  moveNoButton
);


/* Phone */

noBtn.addEventListener(
  "touchstart",
  (event) => {

    event.preventDefault();

    moveNoButton();

  },
  {
    passive: false
  }
);



/* =========================
   AGAIN BUTTON
========================= */

againBtn.addEventListener(
  "click",
  () => {

    answerScreen.classList.add(
      "hidden"
    );

    introScreen.classList.remove(
      "hidden"
    );

    envelopeBtn.classList.remove(
      "open"
    );

    noBtn.style.transform = "";

  }
);



/* =========================
   CONFETTI
========================= */

function createConfetti() {

  const colors = [
    "#c95861",
    "#e98e94",
    "#f2b56e",
    "#fff7ed",
    "#8e5960"
  ];


  for (
    let i = 0;
    i < 38;
    i++
  ) {

    const piece =
      document.createElement("span");

    piece.className =
      "confetti";


    const angle =
      Math.random() *
      Math.PI * 2;

    const distance =
      100 +
      Math.random() * 220;


    piece.style.setProperty(
      "--x",
      `${Math.cos(angle) * distance}px`
    );

    piece.style.setProperty(
      "--y",
      `${Math.sin(angle) * distance}px`
    );

    piece.style.setProperty(
      "--r",
      `${Math.random() * 900 - 450}deg`
    );


    piece.style.background =
      colors[
        Math.floor(
          Math.random() *
          colors.length
        )
      ];


    piece.style.animationDelay =
      `${Math.random() * .15}s`;


    answerScreen.appendChild(
      piece
    );


    setTimeout(() => {

      piece.remove();

    }, 1500);

  }

}