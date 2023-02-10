const form = document.getElementById("form");
const signsSelect = document.getElementById("signs");
const daySelect = document.getElementById("day");
const btn = document.getElementById("submit");
const output = document.querySelector(".text-wrapper");

btn.addEventListener("click", (event) => {
  event.preventDefault();
  let signsSelectValue = signsSelect.value;
  let daySelectValue = daySelect.value;
  fetch(
    `http://sandipbgt.com/theastrologer/api/horoscope/${signsSelectValue}/${daySelectValue}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      output.innerHTML = `
<p>Sign: ${data.sunsign}</p>
<p>Mood: ${data.meta.mood}</p>
<p>Horoscope: ${data.horoscope}</p>`;
    });
});
