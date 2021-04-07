const weather = document.querySelector('.js-weather')

const API_KEY = '5b4e30d177d607450f15900e3fc465a5';
const COORDS = 'coords';

getWeather = (lat, lng) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    ).then((res) => {
        // console.log(res.json());
        return res.json();
    }).then((json) => {
        // console.log(json);
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature} @ ${place}`;
    });
}

saveCoords = (coordsObj) => {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

handleGeoSuccess = (position) => {
    console.log(position.coords.latitude);
    const latitude = position.coords.latitude;  
    const longitude = position.coords.longitude;  
    const coordsObj = {
        // latitude: latitude,
        // longitude: longitude
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude)
}

handleGeoError = () => {
    console.log('Cant access geo location');
}

askForCoords = () => {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

laodCoords = () => {
    const loadedCoords = localStorage.getItem(COORDS)
    if (loadedCoords === null) {
        askForCoords();
    } else {
        const parsedCoords = JSON.parse(loadedCoords)
        console.log(parsedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
} 

init = () => {
    laodCoords();
}

init(); 