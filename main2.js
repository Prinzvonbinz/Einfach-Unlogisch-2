const app = document.getElementById("app");

let clickCount = 0;
let foundCount = 0;

function showMainMenu() {
  app.innerHTML = `
    <h1 onclick="gotoA4Hunt()">Einfach Unlogisch 2</h1>
    <button onclick="startGame()">Start</button>
  `;
}

function startGame() {
  app.innerHTML = `<p>Eine neue Ära. Ein neues Spiel.</p>`;
  setTimeout(showTitleSpin, 10000);
}

function showTitleSpin() {
  app.innerHTML = `<div class="spin">Einfach Unlogisch 2</div>`;
  setTimeout(zoomToTwo, 10000);
}

function zoomToTwo() {
  app.innerHTML = `<div class="zoom-in">2</div>`;
  setTimeout(() => {
    app.innerHTML = `<button onclick="handleClicks()">Start</button>`;
    clickCount = 0;
  }, 10000);
}

function handleClicks() {
  clickCount++;
  if (clickCount >= 10) {
    simulateCrash();
  }
}

function simulateCrash() {
  app.innerHTML = "";
  document.body.style.backgroundColor = "black";
  setTimeout(() => {
    app.innerHTML = `<div class="loader"></div>`;
    setTimeout(() => {
      showError404(() => {
        setTimeout(() => {
          showFakeMainMenu();
        }, 10000);
      });
    }, 10000);
  }, 100);
}

function showError404(callback) {
  app.innerHTML = `
    <h1>Error 404</h1>
    <p>Die angeforderte Seite wurde nicht gefunden.<br>Bitte überprüfen Sie die URL oder versuchen Sie es später erneut.</p>
  `;
  setTimeout(callback, 10000);
}

function showFakeMainMenu() {
  app.innerHTML = `
    <h1 onclick="gotoA4Hunt()">Einfach Unlogisch 2</h1>
    <button onclick="fakeStart()">Start</button>
    <button onclick="fakeExit()">Beenden</button>
  `;
}

function fakeStart() {
  app.innerHTML = `<div class="big-text">NÖ</div>`;
  setTimeout(showFakeMainMenu, 5000);
}

function fakeExit() {
  app.innerHTML = `<div class="big-text">NÖ</div>`;
  setTimeout(showFakeMainMenu, 5000);
}

function gotoA4Hunt() {
  generateA4Grid();
}

function generateA4Grid() {
  const index = Math.floor(Math.random() * 100);
  app.innerHTML = `<div class="a-grid"></div>`;
  const grid = app.querySelector(".a-grid");

  for (let i = 0; i < 100; i++) {
    const span = document.createElement("span");
    span.textContent = "A";
    if (i === index) {
      span.textContent = "4";
      span.style.color = "red";
      span.onclick = () => {
        foundCount++;
        if (foundCount >= 5) {
          showFinalMessage();
        } else {
          generateA4Grid();
        }
      };
    }
    grid.appendChild(span);
  }
}

function showFinalMessage() {
  app.innerHTML = `
    <h2>Teilt das Spiel mit euren Freunden (wenn ihr welche habt) ❤️</h2>
    <p>Coming Soon<br>Teil 3 (vielleicht, vielleicht auch nicht)</p>
  `;
}

// Starte mit dem Hauptmenü
showMainMenu();
