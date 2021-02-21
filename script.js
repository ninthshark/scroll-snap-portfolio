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

// window.addEventListener("resize", () => {
//   let w = window.outerWidth;

//   const zeroDiv = document.querySelector(".zero");
//   const leftPanel = document.querySelector(".left-panel");

//   console.log(zeroDiv);
//   console.log(w);
//   if (w < 1200 && !zeroDiv) {
//     // if (document.querySelector(".zero").classList.contains("zero")) {
//     //   return;
//     // }
//     rightPanel.insertAdjacentHTML(
//       "afterbegin",
//       `<div class="zero snap">
//       <h1>Hello, Mobile</h1>
//     </div>`
//     );

//     leftPanel.remove();
//   }

//   if (w > 1200 && !leftPanel) {
//     return container.insertAdjacentHTML(
//       "afterbegin",
//       `<div class="left-panel">
//           <h1>Hello Desktop</h1>
//           </div>`
//     );
//   }
// });

// function checkElementExist(el) {
//   return;
// }
