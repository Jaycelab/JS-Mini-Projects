const numHours = document.querySelector(".num-hours");

const numberElement = [];

// create nummber hours
for (let i = 1; i <= 12; i++) {
  numberElement.push(
    `<span style="--index:${i};"><p>${i}</p></span>`
    );
}

numHours.insertAdjacentHTML("afterbegin", numberElement.join(""));
