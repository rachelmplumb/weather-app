function getCoords() {
    const apiKey = "e6aed0d7d84da97868df0f1d067e245b";
    const cityName = document.getElementById("city-name").value;
    const apiUrl0 = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${apiKey}`;  
    fetch(apiUrl0)
    .then((response) => response.json())
    .then((data) => {
        console.log(data); //for viewing data
        const latitude = data[0].lat;
        const longitude = data[0].lon;
        const name = data[0].name;
        const state = data[0].state;
        const apiUrl1 = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`;
        fetch(apiUrl1)
        .then((response) => response.json())
        .then((data) => {
            console.log(data); //for viewing data
            const weather = data.weather[0].description;
            const temperature = data.main.temp;
            document.getElementById("city").innerHTML = `Location: ${name}, ${state}`;
            document.getElementById("weather").innerHTML = `Current Weather: ${weather}`;
            document.getElementById("temperature").innerHTML = `Current Temperature: ${temperature}°F`;
        })
        .catch((error) => {
            console.error('Error fetching weather data:', error);
        });
    })
    .catch((error) => {
        console.error('Error fetching coordinates:', error);
    });
    document.getElementById("city-name").value="";
}