/* =====================================================
   ELEMENTS
===================================================== */

const opening =
  document.getElementById("opening");

const openButton =
  document.getElementById("openButton");

const giftBox =
  document.getElementById("giftBox");

const mainContent =
  document.getElementById("mainContent");

const stars =
  document.getElementById("stars");

const floatingParticles =
  document.getElementById(
    "floatingParticles"
  );

const cakeSection =
  document.getElementById("cake");

const heroSection =
  document.getElementById("hero");


/* =====================================================
   CREATE STARS
===================================================== */

function createStars() {

  const amount = 90;

  for (let i = 0; i < amount; i++) {

    const star =
      document.createElement("span");

    star.className = "star";

    star.style.left =
      `${Math.random() * 100}%`;

    star.style.top =
      `${Math.random() * 100}%`;

    const size =
      Math.random() * 2.5 + 1;

    star.style.width =
      `${size}px`;

    star.style.height =
      `${size}px`;

    star.style.animationDelay =
      `${Math.random() * 3}s`;

    star.style.animationDuration =
      `${Math.random() * 2 + 1.5}s`;

    stars.appendChild(star);
  }
}

createStars();


/* =====================================================
   OPEN BIRTHDAY SURPRISE
===================================================== */

let websiteOpened = false;


function openSurprise() {

  if (websiteOpened) {
    return;
  }

  websiteOpened = true;


  /*
    Hide opening screen first.
    This prevents the old "Happy Birthday Aakriti"
    from visually overlapping with the hero.
  */

  opening.classList.add("hide");


  setTimeout(() => {

    mainContent.classList.add("visible");

    cakeSection.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });


    /*
      Start birthday effects
    */

    startTypingMessage();

    launchConfetti(120);

    createFloatingParticles(20);


    /*
      Activate reveal elements
    */

    setTimeout(() => {

      document
        .querySelectorAll(".reveal")
        .forEach((element) => {

          element.classList.add("show");

        });

    }, 250);


  }, 700);

}


openButton.addEventListener(
  "click",
  openSurprise
);


giftBox.addEventListener(
  "click",
  openSurprise
);


/* =====================================================
   BIRTHDAY MESSAGE
===================================================== */

const birthdayMessage = `
Aakriti,

Today is your day. ❤️

Nineteen years of life, memories, lessons,
laughter, dreams and countless little moments
have brought you to this beautiful chapter.

I hope your 19th year brings you closer to
everything you've ever wished for.

I hope you laugh more than you worry,
smile more than you cry,
and always remember how special you are.

May you have the courage to chase the dreams
that scare you, the strength to overcome
the difficult days, and the happiness you truly deserve.

Never forget to enjoy the little things —
the random laughs, beautiful sunsets,
unexpected adventures and all those tiny moments
that make life meaningful.

Here's to Chapter 19.

A new chapter.
A new beginning.
A new collection of memories.

Happy 19th Birthday, Aakriti. 🎂✨

May this year be one of your most beautiful years yet.

Keep smiling.
Keep shining.
Keep being you. 💗
`;


let typingStarted = false;


function startTypingMessage() {

  if (typingStarted) {
    return;
  }

  typingStarted = true;


  const element =
    document.getElementById(
      "typingMessage"
    );


  let index = 0;


  function typeNextCharacter() {

    if (
      index <
      birthdayMessage.length
    ) {

      element.textContent +=
        birthdayMessage.charAt(index);

      index++;

      setTimeout(
        typeNextCharacter,
        20
      );

    }

  }


  typeNextCharacter();
}


/* =====================================================
   19 WISHES
===================================================== */

const wishes = [

  {
    icon: "🌸",
    title: "Happiness",
    text:
      "May your days be filled with genuine happiness and beautiful reasons to smile."
  },

  {
    icon: "✨",
    title: "Dreams",
    text:
      "May every dream you carry in your heart slowly become a beautiful reality."
  },

  {
    icon: "💗",
    title: "Love",
    text:
      "May you always be surrounded by people who genuinely care about you."
  },

  {
    icon: "🦋",
    title: "Freedom",
    text:
      "May you always have the courage to choose the life that makes you happy."
  },

  {
    icon: "🌙",
    title: "Peace",
    text:
      "May your heart find peace even during the most difficult days."
  },

  {
    icon: "🌟",
    title: "Success",
    text:
      "May your hard work open doors to opportunities you never imagined."
  },

  {
    icon: "😊",
    title: "Smiles",
    text:
      "May your smile become a permanent part of every chapter of your life."
  },

  {
    icon: "🌷",
    title: "Beautiful Days",
    text:
      "May ordinary days unexpectedly turn into some of your favorite memories."
  },

  {
    icon: "🫶",
    title: "Good People",
    text:
      "May the right people always find their way into your life."
  },

  {
    icon: "🎓",
    title: "Growth",
    text:
      "May every experience make you wiser, stronger and even more confident."
  },

  {
    icon: "🌈",
    title: "Hope",
    text:
      "Whenever life feels difficult, may you always have a reason to keep believing."
  },

  {
    icon: "💫",
    title: "Magic",
    text:
      "May life surprise you with beautiful moments when you least expect them."
  },

  {
    icon: "🦄",
    title: "Adventure",
    text:
      "May your 19th year be filled with new experiences, adventures and unforgettable memories."
  },

  {
    icon: "☀️",
    title: "Bright Future",
    text:
      "May the future ahead of you be brighter than anything you have imagined."
  },

  {
    icon: "🌻",
    title: "Confidence",
    text:
      "May you always remember your worth and never underestimate yourself."
  },

  {
    icon: "💎",
    title: "Strength",
    text:
      "May you become stronger without losing the kindness that makes you special."
  },

  {
    icon: "🎀",
    title: "Little Things",
    text:
      "May you always notice and appreciate the small moments that make life beautiful."
  },

  {
    icon: "🥂",
    title: "New Chapter",
    text:
      "May Chapter 19 become a chapter filled with stories worth remembering forever."
  },

  {
    icon: "❤️",
    title: "One Last Wish",
    text:
      "Above everything else, may you always be happy, healthy, loved and proud of the person you are becoming."
  }

];


const wishGrid =
  document.getElementById(
    "wishGrid"
  );


wishes.forEach(
  (wish, index) => {

    const card =
      document.createElement("button");

    card.className =
      "wish-card reveal";

    card.setAttribute(
      "type",
      "button"
    );


    card.setAttribute(
      "aria-label",
      `Wish ${index + 1}: ${wish.title}`
    );


    card.innerHTML = `

      <div class="wish-inner">

        <div class="wish-front">

          <span class="wish-number">
            ${String(index + 1).padStart(2, "0")}
          </span>

          <div class="wish-icon">
            ${wish.icon}
          </div>

          <h3 class="wish-title">
            ${wish.title}
          </h3>

          <p class="wish-hint">
            Tap to reveal
          </p>

        </div>


        <div class="wish-back">

          <p class="wish-text">
            ${wish.text}
          </p>

        </div>

      </div>

    `;


    card.addEventListener(
      "click",
      () => {

        card.classList.toggle(
          "active"
        );


        if (
          card.classList.contains(
            "active"
          )
        ) {

          createFloatingParticles(2);

        }

      }
    );


    wishGrid.appendChild(card);

  }
);


/* =====================================================
   19 CANDLES
===================================================== */

const candlesContainer =
  document.getElementById(
    "candles"
  );


/*
  19 candle positions.
  Positions are percentages relative to the cake-stage.
  Keeping the group around the center of the stage keeps the
  candles aligned with the cake on smaller screens as well.
*/

const candlePositions = [

  [25, 170],
  [33, 155],
  [41, 145],
  [49, 140],
  [57, 145],
  [65, 155],
  [73, 170],

  [29, 190],
  [37, 178],
  [45, 175],
  [53, 178],
  [61, 190],

  [33, 208],
  [41, 202],
  [49, 202],
  [57, 208],

  [41, 220],
  [49, 218],
  [57, 220]

];


candlePositions.forEach(
  (position, index) => {

    const candle =
      document.createElement("div");


    candle.className =
      "candle";


    candle.style.left =
      `${position[0]}%`;


    candle.style.bottom =
      `${position[1]}px`;


    candle.innerHTML = `
      <span class="flame"></span>
    `;


    candle.setAttribute(
      "aria-label",
      `Birthday candle ${index + 1}`
    );


    candlesContainer.appendChild(
      candle
    );

  }
);


/* =====================================================
   BLOW CANDLES
===================================================== */

const blowButton =
  document.getElementById(
    "blowButton"
  );


const cakeMessage =
  document.getElementById(
    "cakeMessage"
  );


let candlesBlown = false;
let cakeUnlocked = false;


blowButton.addEventListener(
  "click",
  () => {

    if (candlesBlown) {

      /*
        Relight candles
      */

      document
        .querySelectorAll(".candle")
        .forEach(
          (candle) => {

            candle.classList.remove(
              "blown"
            );

          }
        );


      cakeMessage.textContent =
        "The candles are glowing again... ✨";


      blowButton.innerHTML =
        "🎂 Blow Out the Candles";


      candlesBlown = false;

      return;
    }


    candlesBlown = true;

    blowButton.disabled = true;


    /*
      Blow candles one by one
    */

    document
      .querySelectorAll(".candle")
      .forEach(
        (candle, index) => {

          setTimeout(
            () => {

              candle.classList.add(
                "blown"
              );

            },
            index * 75
          );

        }
      );


    setTimeout(
      () => {

        cakeMessage.textContent =
          "✨ Your wish is on its way... ✨";


        blowButton.innerHTML =
          "✨ Relight the Candles";

        blowButton.disabled = false;

        if (!cakeUnlocked) {
          cakeUnlocked = true;
          mainContent.classList.add("cake-complete");
          heroSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }

        launchConfetti(180);

        createFloatingParticles(35);

      },
      1800
    );

  }
);


/* =====================================================
   CONFETTI
===================================================== */

function launchConfetti(
  amount = 100
) {

  const colors = [

    "#f472b6",
    "#f9a8d4",
    "#c084fc",
    "#a78bfa",
    "#facc15",
    "#60a5fa",
    "#fb7185",
    "#ffffff"

  ];


  for (
    let i = 0;
    i < amount;
    i++
  ) {

    const confetti =
      document.createElement(
        "span"
      );


    confetti.className =
      "confetti";


    confetti.style.left =
      `${Math.random() * 100}vw`;


    confetti.style.background =
      colors[
        Math.floor(
          Math.random() *
          colors.length
        )
      ];


    confetti.style.width =
      `${Math.random() * 7 + 5}px`;


    confetti.style.height =
      `${Math.random() * 8 + 7}px`;


    confetti.style.borderRadius =
      Math.random() > 0.5
        ? "50%"
        : "2px";


    confetti.style.setProperty(
      "--x",
      `${(Math.random() - 0.5) * 300}px`
    );


    confetti.style.setProperty(
      "--rotation",
      `${Math.random() * 1000 - 500}deg`
    );


    confetti.style.animationDuration =
      `${Math.random() * 3 + 3}s`;


    confetti.style.animationDelay =
      `${Math.random() * 0.8}s`;


    document.body.appendChild(
      confetti
    );


    setTimeout(
      () => {

        confetti.remove();

      },
      6500
    );

  }

}


/* =====================================================
   FLOATING PARTICLES
===================================================== */

function createFloatingParticles(
  amount = 10
) {

  const particles = [

    "♥",
    "♡",
    "✦",
    "✧",
    "✨",
    "🌸",
    "🦋"

  ];


  for (
    let i = 0;
    i < amount;
    i++
  ) {

    const particle =
      document.createElement(
        "span"
      );


    particle.className =
      "floating-particle";


    particle.textContent =
      particles[
        Math.floor(
          Math.random() *
          particles.length
        )
      ];


    particle.style.left =
      `${Math.random() * 100}vw`;


    particle.style.fontSize =
      `${Math.random() * 18 + 14}px`;


    particle.style.animationDuration =
      `${Math.random() * 5 + 5}s`;


    particle.style.animationDelay =
      `${Math.random() * 2}s`;


    particle.style.color =
      "#f9a8d4";


    floatingParticles.appendChild(
      particle
    );


    setTimeout(
      () => {

        particle.remove();

      },
      9000
    );

  }

}


/* =====================================================
   MEMORY LIGHTBOX
===================================================== */

const memoryCards =
  document.querySelectorAll(
    ".memory-card"
  );


const lightbox =
  document.getElementById(
    "lightbox"
  );


const lightboxImage =
  document.getElementById(
    "lightboxImage"
  );


const closeLightbox =
  document.getElementById(
    "closeLightbox"
  );


memoryCards.forEach(
  (card) => {

    card.addEventListener(
      "click",
      () => {

        const image =
          card.dataset.image;


        const alt =
          card.dataset.alt;


        lightboxImage.src =
          image;


        lightboxImage.alt =
          alt;


        lightbox.classList.add(
          "active"
        );


        lightbox.setAttribute(
          "aria-hidden",
          "false"
        );


        document.body.style.overflow =
          "hidden";

      }
    );

  }
);


function closeImageLightbox() {

  lightbox.classList.remove(
    "active"
  );


  lightbox.setAttribute(
    "aria-hidden",
    "true"
  );


  document.body.style.overflow =
    "";

}


closeLightbox.addEventListener(
  "click",
  closeImageLightbox
);


lightbox.addEventListener(
  "click",
  (event) => {

    if (
      event.target === lightbox
    ) {

      closeImageLightbox();

    }

  }
);


/* =====================================================
   ESCAPE KEY
===================================================== */

document.addEventListener(
  "keydown",
  (event) => {

    if (
      event.key === "Escape"
    ) {

      closeImageLightbox();

    }

  }
);


/* =====================================================
   CELEBRATE AGAIN
===================================================== */

const celebrateButton =
  document.getElementById(
    "celebrateButton"
  );


celebrateButton.addEventListener(
  "click",
  () => {

    cakeUnlocked = false;
    candlesBlown = false;
    mainContent.classList.remove("cake-complete");

    document
      .querySelectorAll(".candle")
      .forEach(
        (candle) => {

          candle.classList.remove(
            "blown"
          );

        }
      );

    cakeMessage.textContent = "";
    blowButton.innerHTML =
      "🎂 Blow Out the Candles";
    blowButton.disabled = false;

    cakeSection.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

    launchConfetti(250);

    createFloatingParticles(50);

  }
);


/* =====================================================
   BACK TO TOP
===================================================== */

const backToTop =
  document.getElementById(
    "backToTop"
  );


window.addEventListener(
  "scroll",
  () => {

    if (
      window.scrollY > 600
    ) {

      backToTop.classList.add(
        "show"
      );

    } else {

      backToTop.classList.remove(
        "show"
      );

    }

  }
);


backToTop.addEventListener(
  "click",
  () => {

    window.scrollTo({

      top: 0,

      behavior: "smooth"

    });

  }
);


/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealObserver =
  new IntersectionObserver(
    (entries) => {

      entries.forEach(
        (entry) => {

          if (
            entry.isIntersecting
          ) {

            entry.target.classList.add(
              "show"
            );


            revealObserver.unobserve(
              entry.target
            );

          }

        }
      );

    },
    {
      threshold: 0.12
    }
  );


function observeRevealElements() {

  document
    .querySelectorAll(
      ".reveal"
    )
    .forEach(
      (element) => {

        revealObserver.observe(
          element
        );

      }
    );

}


observeRevealElements();


/* =====================================================
   INITIAL AMBIENCE
===================================================== */

setTimeout(
  () => {

    createFloatingParticles(8);

  },
  1200
);


/* =====================================================
   KEYBOARD OPEN
===================================================== */

document.addEventListener(
  "keydown",
  (event) => {

    if (
      event.key === "Enter" &&
      !websiteOpened
    ) {

      openSurprise();

    }

  }
);