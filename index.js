var inputvalue = document.querySelector('#cityinput');
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput');
var descrip = document.querySelector('#description');
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');
var apik = "32f048d53f28c79d711900a7521c0afb";

function conversion(val) {
    return (val - 273).toFixed(3);
}

btn.addEventListener('click', function () {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputvalue.value + '&appid=' + apik)
        .then(res => res.json())
        .then(data => {
            var nameval = data.name;
            var description = data.weather[0].description;
            var temperature = data.main.temp;
            var windSpeed = data.wind.speed;

            city.innerHTML = `Weather of <span>${nameval}</span>`;
            temp.innerHTML = `Temperature: <span>${conversion(temperature)} C</span>`;
            descrip.innerHTML = `Sky Conditions: <span>${description}</span>`;
            wind.innerHTML = `Wind Speed: <span>${windSpeed} km/h</span>`;
        })
        .catch(err => alert('You entered the wrong name'));
});
