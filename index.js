

const weatherdataE1 = document.getElementById("weather-data")

const cityInputE1 = document.getElementById("city-input")


const formE1 = document.querySelector("form")

formE1.addEventListener("submit", (event)=>{
    event.preventDefault();
    const cityValue = cityInputE1.value;
    getWeatherData(cityValue);
});

async function getWeatherData(cityValue){
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather? q=${cityValue}&appid=${apikey}&units=metric`)

        if(!response.ok){
            throw new Error("Network response was not ok")
        }
        const data = await response.json();

        const tempereture = math.rounddata);
    } catch (error) {}
}