// Import the data to customize and insert them into page
const fetchData = () => {
  fetch("customize.json")
    .then(data => data.json())
    .then(data => {
      dataArr = Object.keys(data);
      dataArr.map(customData => {
        if (data[customData] !== "") {
          if (customData === "imagePath") {
            document
              .querySelector(`[data-node-name*="${customData}"]`)
              .setAttribute("src", data[customData]);
          } else {
            document.querySelector(`[data-node-name*="${customData}"]`).innerText = data[customData];
          }
        }

        // Check if the iteration is over
        // Run amination if so
        if ( dataArr.length === dataArr.indexOf(customData) + 1 ) {
          animationTimeline();
        } 
      });
    });
};

// Animation Timeline
const animationTimeline = () => {
  // Spit chars that needs to be animated individually
  const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
  const hbd = document.getElementsByClassName("wish-hbd")[0];

  textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
    .split("")
    .join("</span><span>")}</span`;

  hbd.innerHTML = `<span>${hbd.innerHTML
    .split("")
    .join("</span><span>")}</span`;

  const ideaTextTrans = {
    opacity: 0,
    y: -20,
    rotationX: 5,
    skewX: "15deg"
  };

  const ideaTextTransLeave = {
    opacity: 0,
    y: 20,
    rotationY: 5,
    skewX: "-15deg"
  };

  const tl = new TimelineMax();

  tl
    .to(".container", 0.1, {
      visibility: "visible"
    })
    .from(".one", 1.4, {
      opacity: 0,
      y: 10
    })
    .from(".two", 0.8, {
      opacity: 0,
      y: 10
    })
    .to(
      ".one",
      1.4, {
        opacity: 0,
        y: 10
      },
      "+=2.5"
    )
    .to(
      ".two",
      1.4, {
        opacity: 0,
        y: 10
      },
      "-=1"
    )
    .from(".three", 1.4, {
      opacity: 0,
      y: 10
    })
    .to(
      ".three",
      1.4, {
        opacity: 0,
        y: 10
      },
      "+=2"
    )
    .from(".four", 1.4, {
      scale: 0.2,
      opacity: 0
    })
    .from(".fake-btn", 0.6, {
      scale: 0.2,
      opacity: 0
    })
    .staggerTo(
      ".hbd-chatbox span",
      1, {
        visibility: "visible"
      },
      0.1
    )
    .to(".fake-btn", 0.2, {
      backgroundColor: "rgb(127, 206, 248)"
    })
    .to(
      ".four",
      1, {
        scale: 0.2,
        opacity: 0,
        y: -150
      },
      "+=0.7"
    )
    .from(".idea-1", 1.4, ideaTextTrans)
    .to(".idea-1", 1.4, ideaTextTransLeave, "+=1.5")
    .from(".idea-2", 1.4, ideaTextTrans)
    .to(".idea-2", 1.4, ideaTextTransLeave, "+=1.5")
    .from(".idea-3", 1.4, ideaTextTrans)
    .to(".idea-3 strong", 1, {
      scale: 1.2,
      x: 10,
      backgroundColor: "rgb(21, 161, 237)",
      color: "#fff"
    })
    .to(".idea-3", 1.4, ideaTextTransLeave, "+=1.5")
    .from(".idea-4", 1.4, ideaTextTrans)
    .to(".idea-4", 1.4, ideaTextTransLeave, "+=1.5")
    .from(
      ".idea-5",
      1.4, {
        rotationX: 15,
        rotationZ: -10,
        skewY: "-5deg",
        y: 50,
        z: 10,
        opacity: 0
      },
      "+=0.5"
    )
    .to(
      ".idea-5 .smiley",
      1.4, {
        rotation: 90,
        x: 8
      },
      "+=0.4"
    )
    .to(
      ".idea-5",
      1.4, {
        scale: 0.2,
        opacity: 0
      },
      "+=2"
    )
    .staggerFrom(
      ".idea-6 span",
      1.6, {
        scale: 3,
        opacity: 0,
        rotation: 15,
        ease: Expo.easeOut
      },
      0.4
    )
    .staggerTo(
      ".idea-6 span",
      1.6, {
        scale: 3,
        opacity: 0,
        rotation: -15,
        ease: Expo.easeOut
      },
      0.4,
      "+=1"
    )
    .staggerFromTo(
      ".baloons img",
      5, {
        opacity: 0.9,
        y: 1400
      },
      {
        opacity: 1,
        y: -1000
      },
      0.4
    )
    .from(
      ".lydia-dp",
      1, {
        scale: 3.5,
        opacity: 0,
        x: 25,
        y: -25,
        rotationZ: -45
      },
      "-=2"
    )
    .from(".hat", 1, {
      x: -100,
      y: 350,
      rotation: -180,
      opacity: 0
    })
    .staggerFrom(
      ".wish-hbd span",
      1.4, {
        opacity: 0,
        y: -50,
        rotation: 150,
        skewX: "30deg",
        ease: Elastic.easeOut.config(1, 0.5)
      },
      0.2
    )
    .staggerFromTo(
      ".wish-hbd span",
      1.4, {
        scale: 1.4,
        rotationY: 150
      },
      {
        scale: 1,
        rotationY: 0,
        color: "#ff69b4",
        ease: Expo.easeOut
      },
      0.2,
      "party"
    )
    .from(
      ".wish h5",
      1, {
        opacity: 0,
        y: 10,
        skewX: "-15deg"
      },
      "party"
    )
    .staggerTo(
      ".eight svg",
      120, { // Set the duration to 120 seconds (2 minutes)
        visibility: "visible",
        opacity: 0,
        scale: 80,
        repeat: -1, // Infinite loop to keep it running
        repeatDelay: 0, // No delay between repeats
        ease: Power1.easeInOut
      },
      0.6 // Stagger delay between each SVG
    )
    .to(".six", 120, { // Keep the .six class visible for 120 seconds (2 minutes)
      opacity: 1, // Ensure it's fully visible
      ease: Power1.easeInOut
    })
    .to(".six", 1, { // Fade out after 2 minutes
      opacity: 0,
      y: 30,
      zIndex: "-1"
    })
    .staggerFrom(".nine p", 2, ideaTextTrans, 2.4)
    .to(
      ".last-smile",
      1, {
        rotation: 90
      },
      "+=1"
    );

  // tl.seek("currentStep");
  // tl.timeScale(2);

  // Restart Animation on click
  const replyBtn = document.getElementById("replay");
  replyBtn.addEventListener("click", () => {
    tl.restart();
  });
};

// Run fetch and animation in sequence
document.addEventListener("DOMContentLoaded", () => {
  const audio1 = document.getElementById("audio1");
  const audio2 = document.getElementById("audio2");
  const startButton = document.getElementById("startAudio");

  function startAudio() {
    audio1.play().then(() => {
      audio1.addEventListener("ended", () => {
        audio2.play();
      });
      startButton.style.display = 'none';
    }).catch(error => {
      console.log("Autoplay failed:", error);
    });
  }

  startButton.addEventListener("click", startAudio);
  startAudio(); // Attempt autoplay
});

fetchData();