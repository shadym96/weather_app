let toggle = document.querySelector(`.toggle-icon`);


toggle.addEventListener(`click`, function(){
    let links = document.querySelector(`header .container .links`);
    links.classList.add(`d-block`);
})


let finalRes = {};
let dayName = ``;
let dayName2 = ``;
let dayName3 = ``;
// let forecast = [];

async function showingWeather(country) {

    var res =await fetch(`https://api.weatherapi.com/v1/forecast.json?key=5fbf7eecc1ec43f497294415230908&q=${country}&days=7`,);
    finalRes =await res.json();
    x = finalRes.forecast.forecastday;

    var d = new Date(x[0].date);
    dayName = d.toString().split(' ')[0];

    var d = new Date(x[1].date);
    dayName2 = d.toString().split(' ')[0];

    var d = new Date(x[2].date);
    dayName3 = d.toString().split(' ')[0];

    
    
    display(x);
    
    
}
showingWeather(`lond`);


let cartona = ``;


function display(x) {
    cartona=` <div class="today forecast">                  
    <div class="header" id="head">
    <div class="day">${dayName}</div>
    <div class="date">${x[0].date}</div>
</div> 
<div class="forecast-content">
    <div class="location">${finalRes.location.name}</div>
    <div class="degree">
        <div class="num">
            ${x[0].day.maxtemp_c}<sup>o</sup>C</div>
        <div class="forecast-icon">
            <img src="https:${x[0].day.condition.icon}" alt="temp icon">
        </div>
    </div>
    <div class="status">${x[0].day.condition.text}</div>
    <span>
        <img src="images/icon-umberella@2x.png" alt="">
        20%
    </span>
    <span>
        <img src="images/icon-compass@2x.png" alt="">
       ${ x[0].day.maxwind_kph} km/hr
    </span>
    <span>
        <img src="images/icon-wind@2x.png" alt="">
        East
    </span> 
</div></div>
<div class="tomorrow forecast">
                    <div class="header">
                        <div class="day text-center">${dayName2}</div>
                    </div>
                    <div class="forecast-content">
                        <div class="degree">
                            <div class="forecast-icon">
                                <img src="https:${x[1].day.condition.icon}" alt="temp icon">
                            </div>
                            <div class="num">${x[1].day.maxtemp_c}<sup>o</sup>C</div>
                            <span>${x[1].day.mintemp_c}<sup>o</sup></span>
                        </div>
                        <div class="status">${x[1].day.condition.text}</div>
                    </div>
                </div>
                <div class="last forecast">
                <div class="header">
                    <div class="day text-center">${dayName3}</div>
                </div>
                <div class="forecast-content">
                    <div class="degree">
                        <div class="forecast-icon">
                            <img src="https:${x[2].day.condition.icon}" alt="temp icon">
                        </div>
                        <div class="num">${x[2].day.maxtemp_c}<sup>o</sup>c</div>
                        <span>${x[2].day.mintemp_c}<sup>o</sup></span>
                    </div>
                    <div class="status">${x[2].day.condition.text}</div>
                </div>
            </div>
`;
    
document.querySelector(`#weather`).innerHTML = cartona;
}


let search = document.getElementById(`search`);


search.addEventListener(`input`, function(){

    showingWeather(this.value)
})


