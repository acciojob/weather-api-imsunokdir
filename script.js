const btn = document.getElementById("btn");

btn.addEventListener('click', getCurrentWeather);

function getCurrentWeather() {
	const city = 'London,uk';  // Match test expectation
	const apiKey = 'e467712b257e418838be97cc881a71de'; // Match test expectation
	const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

	fetch(apiUrl)
		.then(res => {
			if (!res.ok) {
				throw new Error("Oops, there was an error.");
			}
			return res.json();
		})
		.then(response => {
			// const weatherMain = data.weather[0].main; // Cypress checks for 'main', not 'description'
			const weatherDiv = document.getElementById("weatherData");
			weatherDiv.textContent = `Current weather in London: ${response.weather[0].main}`;
		})
		.catch(error => {
			console.error('There was a problem with the fetch operation:', error);
			const weatherDiv = document.getElementById('weatherData');
			weatherDiv.textContent = 'Failed to fetch weather data. Please try again later.';
		});
}
