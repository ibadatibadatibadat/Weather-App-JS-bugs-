const api_key = "3c3f1c4b6c2e5b84100cd82984b10e16";
const api_url = "https://api.openweathermap.org/data/2.5/weather?&units=metric";
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weather_icon = document.querySelector(".weather-icon");

const check_weather = async (city) => {
  const response = await fetch(api_url + city + `&appid=${api_key}`);
  let data = await response.json();

  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temperature").innerHTML =
    Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/s";
  if ((data.weather[0], main == "Clouds")) {
    weather_icon.src = "images/clouds.png";
  } else if ((data.weather[0], main == "Clear")) {
    weather_icon.src = "images/clear.png";
  } else if ((data.weather[0], main == "Rain")) {
    weather_icon.src = "images/rain.png";
  } else if ((data.weather[0], main == "Drizzle")) {
    weather_icon.src = "images/drizzle.png";
  } else if ((data.weather[0], main == "mist")) {
    weather_icon.src = "images/mist.png";
  }
};
searchbtn.addEventListener("click", () => {
  check_weather(searchbox.value);
});
check_weather();
