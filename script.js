const container = document.querySelector(".container");
const rightPanel = document.querySelector(".right-panel");

console.log(rightPanel);
console.log(container);

/************* Check screen size**************/
const viewPortWidth = window.innerWidth;

console.log(viewPortWidth);

if (viewPortWidth >= 1200) {
  container.insertAdjacentHTML(
    "afterbegin",
    `<div class="left-panel"><h1>Hello Desktop</h1></div>`
  );
}

if (viewPortWidth < 1200) {
  rightPanel.insertAdjacentHTML(
    "beforeend",
    `<div class="zero snap"><h1>Hello Mobile</h1></div>`
  );
}

window.addEventListener("resize", () => {
  const viewPortWidth = window.innerWidth;
  console.log(viewPortWidth);

  if (viewPortWidth < 1200) {
    const leftPanel = document.querySelector(".left-panel");
    console.log(leftPanel);
    if (leftPanel) {
      leftPanel.remove();

      return rightPanel.insertAdjacentHTML(
        "beforeend",
        `<div class="zero snap">
                          <h1>Hello, Mobile</h1>
                        </div>`
      );
    }
  }
  if (viewPortWidth >= 1200) {
    const zeroDiv = document.querySelector(".zero");
    if (zeroDiv) {
      zeroDiv.remove();
      return container.insertAdjacentHTML(
        "afterbegin",
        `<div class="left-panel"><h1>Hello Desktop</h1></div>`
      );
    }
  }
});

/*************** Navigation ******************/

const home = document.querySelector("#home");
const portfolio = document.querySelector("#portfolio");
const about = document.querySelector("#about");
const contact = document.querySelector("#contact");

window.addEventListener("load", (e) => {
  console.log(e);
  console.log("Page is fully loaded.");
});
