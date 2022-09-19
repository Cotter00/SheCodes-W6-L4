let now = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let timeZone = now.toLocaleTimeString([], {
  hour: "numeric",
  minute: "2-digit",
  timeZoneName: "short",
});
let day = days[now.getDay()];
let date = now.getDate();
let year = now.getFullYear();
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = months[now.getMonth()];

function formatDate() {
  let newDates = `${day}, ${month} ${date}, ${year}`;
  return newDates;
}
function formatTime() {
  let newTimes = `${timeZone}`;
  return newTimes;
}
function search(event) {
  event.preventDefault();
  let cityElement = document.querySelector("h1");
  let cityInput = document.querySelector("#city-input");
  cityElement.innerHTML = cityInput.value;
}

//Feature #1

let todaysDate = document.querySelector("h3");
todaysDate.innerHTML = formatDate();

let todaysTime = document.querySelector("h4");
todaysTime.innerHTML = formatTime();

//Feature #2
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

//Bonus Feature

let mainTemp = document.querySelector("#mainTemp");

function fTemp() {
  let tempF = "79";
  return tempF;
}
function cTemp() {
  let tempcc = "26";
  return "26";
}

function switchFunction() {
  let tempc = "26";

  if (mainTemp !== true) {
    mainTemp.addEventListener("checked", fTemp);
  } else {
    mainTemp === fTemp;
  }
}
