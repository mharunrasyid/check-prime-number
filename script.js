// Variable

let formPrime = document.querySelector(".card__form");
let iptPrime = document.querySelector(".card__input");

let popupBox = document.querySelector(".popup__container");
let popupTxt = document.querySelector(".popup__txt");

let clearBtn = document.querySelector(".card__btn--clear");
let closeBtn = document.querySelector(".popup__btn");

let switchIptCheck = document.querySelector(".switch__input");
let switchLabelContainer = document.querySelector(".switch__label-container");
let switchLabel = document.querySelector(".switch__label");
let switchTxt = document.querySelector(".switch__txt");

// Function

let notPrimeMsg = true;
let notPrimeArr = [];
let notPrimeNum = 0;

let primeMsg;
let mode = false;

function itsPrime(param) {
  let continueCheck = true;
  for (let i = 2; i <= param; i++) {
    if (param % i == 0) {
      if (mode) {
        if (param == i) {
          if (!continueCheck) {
            continue;
          } else {
            return true;
          }
        } else {
          continueCheck = false;
          notPrimeArr.push(i);
          continue;
        }
      } else {
        if (param == i) {
          return true;
        } else {
          notPrimeNum = i
          return false;
        }
      }
    } else {
      continue;
    }
  }

  if (param < 2) {
    notPrimeMsg = false;
    return false;
  }
}

function clearInput() {
  iptPrime.value = "";
}

function popupMsg() {
  let checkPrime = itsPrime(Number(iptPrime.value));

  if (checkPrime === true) {
    primeMsg = `${iptPrime.value} adalah <b><i style="color: rgba(255, 255, 255, 0.8);">bilangan prima</i></b> ✅`;
  } else {
    primeMsg = `${iptPrime.value} <b><i style="color: rgba(255, 255, 255, 0.8);">bukan bilangan prima</i></b> karena ${iptPrime.value} ${notPrimeMsg ? `bisa dibagi dengan angka ${mode ? notPrimeArr.join(", ") : notPrimeNum}` : `lebih kecil dari angka 2`} ❌`;
    notPrimeArr = [];
    notPrimeNum = 0;
    notPrimeMsg = true;
  }
}

// DOM

formPrime.addEventListener("submit", (e) => {
  popupMsg();
  popupTxt.innerHTML = primeMsg;
  popupBox.classList.remove("popup--hide");
  e.preventDefault();

  setTimeout(() => {
    clearInput();
  }, 500);
});

switchLabel.addEventListener("click", function () {
  if (switchIptCheck.checked) {
    mode = false;
    switchLabelContainer.style.background = "#22252D";
    switchLabel.style.left = "0";
    switchTxt.innerHTML = `Mode Kurang <i class="fas fa-question-circle" style="margin-left: 3px;"></i>`;
    switchTxt.setAttribute("title", "Mode Kurang menampilkan satu angka yang bisa dibagi");
  } else {
    mode = true;
    switchLabelContainer.style.background = "#51637e";
    switchLabel.style.left = "22px";
    switchTxt.innerHTML = `Mode Lengkap <i class="fas fa-question-circle" style="margin-left: 3px;"></i>`;
    switchTxt.setAttribute("title", "Mode Lengkap menampilkan semua angka yang bisa dibagi");
  }
})

clearBtn.addEventListener("click", () => {
  clearInput();
});

closeBtn.addEventListener("click", () => {
  popupBox.classList.add("popup--hide");
});