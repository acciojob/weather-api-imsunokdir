//your JS code here. If required.

const btn = document.getElementById("btn");

btn.addEventListener('click', getWeatherData);

function getWeatherData(){
	const city = 'London';
	const api = '52bfc667ece724dfe46b5f0625a7ee93';
	const apiUri = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`

	fetch(apiUri)
	.then(res=>{
		if(!res.ok){
			throw new Error("Opps there was an error.")
		}
		return res.json();
	})
	.then(data=>{
		const weatherDescription = data.weather[0].description;
		const weatherDiv = document.getElementById("weatherData");
		weatherDiv.textContent = `Current weather in ${city}: ${weatherDescription}`

	})
	.catch(error=>{
		console.error('There was a problem with the fetch operation:', error);
		const weatherDiv = document.getElementById('weatherData');
        weatherDiv.textContent = 'Failed to fetch weather data. Please try again later.';
	})
}












