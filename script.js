const ApiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&appid=";
const ApiKey = "1f6f21828b08b569f80b255ebcc4e877";

const SearchBox = document.querySelector(".search input");
const SearchBtn = document.querySelector(".search button");
const WeatherIcon = document.querySelector(".weather-icon");

async function checkweather(city) {
  const response = await fetch(`${ApiUrl}${ApiKey}&q=${city}`);
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    const data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "KM/H";

    if (data.weather[0].main === "Clouds") {
      WeatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main === "Clear") {
      WeatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main === "Rain") {
      WeatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main === "drizzle") {
      WeatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main === "mist") {
      WeatherIcon.src = "images/mist.png";
    }
    document.querySelector(".weather").style.display = "block";
  }
}

SearchBtn.addEventListener("click", () => {
  const city = SearchBox.value; // Get the value from the search box
  checkweather(city);
});

// 1) First of all i called the API and store the API Url and API Key using a variable.
// 2) Now i select the input box, button and the weather icon class and store it in the weathericon.
// 3) Now we use async because first we are saying to function that wait something will happen. till that you can do other work
// 4) Now we put all data like APIURL,KEY AND CIty to get fetch.
// 4) Now we run the if block in which we write the condition that if status responce is 404 then it should print the error messege and hide the weather data.
// 5) and then in else block we show all the data.
// 6) here first of all we select city and change its inner html. and similay we done for temperature, humidity and wind.
// 7) Then we use if and else if condition to change the image of weather as per the temperature.
// 8) after that we hind the .weather data becuase we want that it should only show us the result when we type in search box.
// 8) now we have added the event listner on button and then store the value added in search box in city.
// 9) after that we display the city using the checkweather function.
