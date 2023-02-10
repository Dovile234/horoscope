const form = document.getElementById("form");
const signsSelect = document.getElementById("signs");
const daySelect = document.getElementById("day");
const btn = document.getElementById("submit");
const output = document.querySelector(".text-wrapper");

btn.addEventListener("click", (event) => {
  event.preventDefault();
  let signsSelectValue = signsSelect.value;
  let daySelectValue = daySelect.value;
  const options = {
    method: "POST",
    headers: {
      "X-RapidAPI-Key": "581de7aa05mshd7735e7a675a7dbp1fb4f0jsnb36c14cd02e8",
      "X-RapidAPI-Host": "sameer-kumar-aztro-v1.p.rapidapi.com",
    },
  };
  fetch(
    `https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=${signsSelectValue}&day=${daySelectValue}`,
    options
  )
    .then((response) => response.json())
    .then((data) => {
      output.innerHTML = `
<p>Date range: ${data.date_range}</p>
<p>Current date: ${data.current_date}</p>
<p>Compatibility: ${data.compatibility}</p>
<p>Mood: ${data.mood}</p>
<p>Color: ${data.color}</p>
<p>Lucky number: ${data.lucky_number}</p>
<p>Lucky time: ${data.lucky_time}</p>
<p>Horoscope: ${data.description}</p>`;
    });
});
