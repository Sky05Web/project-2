
const WEATHER_CODES = {
  0: { label: "Clear sky", theme: "clear", stamp: "Clear" },
  1: { label: "Mainly clear", theme: "clear", stamp: "Bright" },
  2: { label: "Partly cloudy", theme: "cloudy", stamp: "Clouds" },
  3: { label: "Overcast", theme: "cloudy", stamp: "Overcast" },
  45: { label: "Fog", theme: "fog", stamp: "Fog" },
  48: { label: "Depositing rime fog", theme: "fog", stamp: "Fog" },
  51: { label: "Light drizzle", theme: "rain", stamp: "Drizzle" },
  53: { label: "Moderate drizzle", theme: "rain", stamp: "Drizzle" },
  55: { label: "Dense drizzle", theme: "rain", stamp: "Drizzle" },
  56: { label: "Light freezing drizzle", theme: "snow", stamp: "Icy" },
  57: { label: "Dense freezing drizzle", theme: "snow", stamp: "Icy" },
  61: { label: "Slight rain", theme: "rain", stamp: "Rain" },
  63: { label: "Moderate rain", theme: "rain", stamp: "Rain" },
  65: { label: "Heavy rain", theme: "rain", stamp: "Rain" },
  66: { label: "Light freezing rain", theme: "snow", stamp: "Icy" },
  67: { label: "Heavy freezing rain", theme: "snow", stamp: "Icy" },
  71: { label: "Slight snowfall", theme: "snow", stamp: "Snow" },
  73: { label: "Moderate snowfall", theme: "snow", stamp: "Snow" },
  75: { label: "Heavy snowfall", theme: "snow", stamp: "Snow" },
  77: { label: "Snow grains", theme: "snow", stamp: "Snow" },
  80: { label: "Slight rain showers", theme: "rain", stamp: "Showers" },
  81: { label: "Moderate rain showers", theme: "rain", stamp: "Showers" },
  82: { label: "Violent rain showers", theme: "storm", stamp: "Storm" },
  85: { label: "Slight snow showers", theme: "snow", stamp: "Snow" },
  86: { label: "Heavy snow showers", theme: "snow", stamp: "Snow" },
  95: { label: "Thunderstorm", theme: "storm", stamp: "Thunder" },
  96: { label: "Thunderstorm with hail", theme: "storm", stamp: "Thunder" },
  99: { label: "Strong thunderstorm with hail", theme: "storm", stamp: "Thunder" },
  
 
  200: { label: "Thunderstorm with light rain", theme: "storm", stamp: "Thunder" },
  201: { label: "Thunderstorm with rain", theme: "storm", stamp: "Thunder" },
  202: { label: "Thunderstorm with heavy rain", theme: "storm", stamp: "Thunder" },
  210: { label: "Light thunderstorm", theme: "storm", stamp: "Thunder" },
  211: { label: "Thunderstorm", theme: "storm", stamp: "Thunder" },
  212: { label: "Heavy thunderstorm", theme: "storm", stamp: "Thunder" },
  221: { label: "Ragged thunderstorm", theme: "storm", stamp: "Thunder" },
  230: { label: "Thunderstorm with light drizzle", theme: "storm", stamp: "Thunder" },
  231: { label: "Thunderstorm with drizzle", theme: "storm", stamp: "Thunder" },
  232: { label: "Thunderstorm with heavy drizzle", theme: "storm", stamp: "Thunder" },
  300: { label: "Light drizzle", theme: "rain", stamp: "Drizzle" },
  301: { label: "Drizzle", theme: "rain", stamp: "Drizzle" },
  302: { label: "Heavy drizzle", theme: "rain", stamp: "Drizzle" },
  310: { label: "Light rain drizzle", theme: "rain", stamp: "Drizzle" },
  311: { label: "Rain drizzle", theme: "rain", stamp: "Drizzle" },
  312: { label: "Heavy rain drizzle", theme: "rain", stamp: "Drizzle" },
  313: { label: "Shower rain and drizzle", theme: "rain", stamp: "Showers" },
  314: { label: "Heavy shower rain and drizzle", theme: "rain", stamp: "Showers" },
  321: { label: "Shower drizzle", theme: "rain", stamp: "Drizzle" },
  500: { label: "Light rain", theme: "rain", stamp: "Rain" },
  501: { label: "Moderate rain", theme: "rain", stamp: "Rain" },
  502: { label: "Heavy rain", theme: "rain", stamp: "Rain" },
  503: { label: "Very heavy rain", theme: "rain", stamp: "Rain" },
  504: { label: "Extreme rain", theme: "rain", stamp: "Rain" },
  511: { label: "Freezing rain", theme: "snow", stamp: "Icy" },
  520: { label: "Light shower rain", theme: "rain", stamp: "Showers" },
  521: { label: "Shower rain", theme: "rain", stamp: "Showers" },
  522: { label: "Heavy shower rain", theme: "rain", stamp: "Showers" },
  531: { label: "Ragged shower rain", theme: "rain", stamp: "Showers" },
  600: { label: "Light snow", theme: "snow", stamp: "Snow" },
  601: { label: "Snow", theme: "snow", stamp: "Snow" },
  602: { label: "Heavy snow", theme: "snow", stamp: "Snow" },
  611: { label: "Sleet", theme: "snow", stamp: "Snow" },
  612: { label: "Light shower sleet", theme: "snow", stamp: "Snow" },
  613: { label: "Shower sleet", theme: "snow", stamp: "Snow" },
  615: { label: "Light rain and snow", theme: "snow", stamp: "Snow" },
  616: { label: "Rain and snow", theme: "snow", stamp: "Snow" },
  620: { label: "Light shower snow", theme: "snow", stamp: "Snow" },
  621: { label: "Shower snow", theme: "snow", stamp: "Snow" },
  622: { label: "Heavy shower snow", theme: "snow", stamp: "Snow" },
  701: { label: "Mist", theme: "fog", stamp: "Fog" },
  711: { label: "Smoke", theme: "fog", stamp: "Fog" },
  721: { label: "Haze", theme: "fog", stamp: "Fog" },
  731: { label: "Sand/Dust", theme: "fog", stamp: "Fog" },
  741: { label: "Fog", theme: "fog", stamp: "Fog" },
  751: { label: "Sand", theme: "fog", stamp: "Fog" },
  761: { label: "Dust", theme: "fog", stamp: "Fog" },
  762: { label: "Volcanic ash", theme: "fog", stamp: "Fog" },
  771: { label: "Squalls", theme: "storm", stamp: "Storm" },
  781: { label: "Tornado", theme: "storm", stamp: "Storm" },
  800: { label: "Clear sky", theme: "clear", stamp: "Clear" },
  801: { label: "Few clouds", theme: "cloudy", stamp: "Clouds" },
  802: { label: "Scattered clouds", theme: "cloudy", stamp: "Clouds" },
  803: { label: "Broken clouds", theme: "cloudy", stamp: "Overcast" },
  804: { label: "Overcast clouds", theme: "cloudy", stamp: "Overcast" },
};

const elements = {
  body: document.body,
  cityInput: document.getElementById("cityInput"),
  searchForm: document.getElementById("searchForm"),
  searchButton: document.getElementById("searchButton"),
  geoButton: document.getElementById("geoButton"),
  searchResults: document.getElementById("searchResults"),
  heroTemp: document.getElementById("heroTemp"),
  heroCaption: document.getElementById("heroCaption"),
  locationName: document.getElementById("locationName"),
  locationMeta: document.getElementById("locationMeta"),
  conditionStamp: document.getElementById("conditionStamp"),
  currentTemp: document.getElementById("currentTemp"),
  conditionText: document.getElementById("conditionText"),
  updatedTime: document.getElementById("updatedTime"),
  todayRange: document.getElementById("todayRange"),
  feelsLikeText: document.getElementById("feelsLikeText"),
  humidityValue: document.getElementById("humidityValue"),
  windValue: document.getElementById("windValue"),
  precipitationValue: document.getElementById("precipitationValue"),
  pressureValue: document.getElementById("pressureValue"),
  sunriseValue: document.getElementById("sunriseValue"),
  sunsetValue: document.getElementById("sunsetValue"),
  forecastNarrative: document.getElementById("forecastNarrative"),
  hourlyGrid: document.getElementById("hourlyGrid"),
  dailyGrid: document.getElementById("dailyGrid"),
  toastContainer: document.getElementById("toastContainer"),
  unitToggle: document.getElementById("unitToggle"),
  recentSearches: document.getElementById("recentSearches"),
  loadingOverlay: document.getElementById("loadingOverlay"),
};

let isCelsius = true;
let currentWeatherData = null;

const GEOCODE_ENDPOINT = "https://geocoding-api.open-meteo.com/v1/search";
const FORECAST_ENDPOINT = "https://api.open-meteo.com/v1/forecast";



const DEFAULT_CITY = {
  name: "New York",
  admin1: "New York",
  country: "United States",
  latitude: 40.7128,
  longitude: -74.006,
};

function getWeatherProfile(code) {
  return WEATHER_CODES[code] || {
    label: "Weather unavailable",
    theme: "cloudy",
    stamp: "Forecast",
  };
}

function getIconClass(theme) {
  switch (theme) {
    case 'clear': return 'fa-solid fa-sun text-yellow-400';
    case 'cloudy': return 'fa-solid fa-cloud text-gray-300';
    case 'rain': return 'fa-solid fa-cloud-rain text-blue-400';
    case 'storm': return 'fa-solid fa-cloud-bolt text-purple-400';
    case 'snow': return 'fa-solid fa-snowflake text-cyan-200';
    case 'fog': return 'fa-solid fa-smog text-gray-400';
    default: return 'fa-solid fa-cloud text-gray-300';
  }
}

function showToast(message, type = "info") {
  if (!elements.toastContainer) return;
  const toast = document.createElement("div");
  const bgClass = type === "error" ? "bg-red-500/90 border-red-500" : (type === "alert" ? "bg-orange-500/90 border-orange-500" : "bg-panel-strong border-line");
  toast.className = `p-4 border backdrop-blur-md rounded-lg shadow-lg text-white transform transition-transform duration-300 translate-x-full flex items-center gap-3 ${bgClass}`;
  const icon = type === "error" ? "fa-circle-xmark" : (type === "alert" ? "fa-triangle-exclamation" : "fa-circle-info");
  toast.innerHTML = `<i class="fa-solid ${icon} text-xl"></i><span>${message}</span>`;
  
  elements.toastContainer.appendChild(toast);
  requestAnimationFrame(() => toast.classList.remove("translate-x-full"));

  setTimeout(() => {
    toast.classList.add("translate-x-full");
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

function setLoadingState(isLoading) {
  elements.searchButton.disabled = isLoading;
  elements.geoButton.disabled = isLoading;
  
  if (isLoading) {
    elements.loadingOverlay.classList.remove("hidden");
    requestAnimationFrame(() => {
      elements.loadingOverlay.classList.remove("opacity-0");
    });
  } else {
    elements.loadingOverlay.classList.add("opacity-0");
    setTimeout(() => {
      elements.loadingOverlay.classList.add("hidden");
    }, 300);
  }
}

function formatLocationName(location) {
  const regionParts = [location.admin1, location.country].filter(Boolean);
  return {
    title: location.name,
    subtitle: regionParts.join(", "),
  };
}

function parseDateParts(value) {
  const [datePart, timePart = "00:00"] = value.split("T");
  const [year, month, day] = datePart.split("-").map(Number);
  const [hours, minutes] = timePart.split(":").map(Number);

  return { year, month, day, hours, minutes };
}

function formatClock(value) {
  const { hours, minutes } = parseDateParts(value);
  const suffix = hours >= 12 ? "PM" : "AM";
  const hour12 = hours % 12 || 12;
  return `${hour12}:${String(minutes).padStart(2, "0")} ${suffix}`;
}

function formatWeekday(value) {
  const { year, month, day } = parseDateParts(`${value}T12:00`);
  const date = new Date(Date.UTC(year, month - 1, day));
  return new Intl.DateTimeFormat("en-US", { weekday: "short" }).format(date);
}

function formatLongDate(value) {
  const { year, month, day } = parseDateParts(`${value}T12:00`);
  const date = new Date(Date.UTC(year, month - 1, day));
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
  }).format(date);
}

function toTimeValue(value) {
  const { year, month, day, hours, minutes } = parseDateParts(value);
  return Date.UTC(year, month - 1, day, hours, minutes);
}

function buildNarrative(profile, weather) {
  const todayRain = weather.daily.precipitation_probability_max[0];
  const wind = weather.current.wind_speed_10m;
  const high = weather.daily.temperature_2m_max[0];

  if (profile.theme === "storm") {
    return `Stormy conditions are in the area. Expect a more unsettled day with gustier winds near ${Math.round(wind)} km/h and stay alert for changing conditions.`;
  }

  if (profile.theme === "rain") {
    return `Showers are shaping today's outlook with precipitation chances up to ${Math.round(todayRain)}%. Keep a light layer handy as temperatures peak near ${convertTemp(high)}.`;
  }

  if (profile.theme === "snow") {
    return `Cold conditions are leading the forecast. Watch for wintry travel conditions and a brisk feel even as the temperature tops out around ${convertTemp(high)}.`;
  }

  if (profile.theme === "fog") {
    return `Visibility may stay reduced through parts of the day. If you're heading out early, take a little extra time and expect softer light until conditions lift.`;
  }

  return `A calm weather window is in place with a high near ${convertTemp(high)} and precipitation chances around ${Math.round(todayRain)}%.`;
}

function renderHourlyForecast(weather) {
  const currentTimeValue = toTimeValue(weather.current.time);
  const currentIndex = weather.hourly.time.findIndex(
    (time) => toTimeValue(time) >= currentTimeValue
  );
  const startIndex = currentIndex >= 0 ? currentIndex : 0;
  const items = weather.hourly.time.slice(startIndex, startIndex + 12);

  elements.hourlyGrid.innerHTML = "";

  items.forEach((time, index) => {
    const forecastIndex = startIndex + index;
    const profile = getWeatherProfile(weather.hourly.weather_code[forecastIndex]);
    const card = document.createElement("article");
    card.className = "p-4 border border-white/10 bg-white/5 rounded-lg hover:-translate-y-2 hover:border-accent hover:shadow-[0_0_15px_var(--accent-soft)] transition-all duration-300 cursor-default";
    card.innerHTML = `
      <time datetime="${time}" class="text-[0.95rem] m-0">${formatClock(time)}</time>
      <p class="my-[0.55rem] text-[1.35rem] font-display">${Math.round(weather.hourly.temperature_2m[forecastIndex])}${weather.hourly_units.temperature_2m}</p>
      <p class="m-0 text-muted leading-[1.45]">${profile.label}</p>
      <p class="m-0 text-muted leading-[1.45]">Rain ${Math.round(weather.hourly.precipitation_probability[forecastIndex])}${weather.hourly_units.precipitation_probability}</p>
    `;
    elements.hourlyGrid.appendChild(card);
  });
}

function convertTemp(celsiusValue) {
  if (isCelsius) return `${Math.round(celsiusValue)}°C`;
  return `${Math.round((celsiusValue * 9/5) + 32)}°F`;
}

function updateTemperaturesUI(weather) {
  elements.heroTemp.textContent = convertTemp(weather.current.temperature_2m);
  elements.currentTemp.textContent = convertTemp(weather.current.temperature_2m);
  elements.todayRange.textContent = `${convertTemp(weather.daily.temperature_2m_max[0])} / ${convertTemp(weather.daily.temperature_2m_min[0])}`;
  elements.feelsLikeText.textContent = `Feels like ${convertTemp(weather.current.apparent_temperature)}`;
}

elements.unitToggle.addEventListener("click", () => {
  isCelsius = !isCelsius;
  elements.unitToggle.textContent = isCelsius ? "Switch to °F" : "Switch to °C";
  if (currentWeatherData) {
    updateTemperaturesUI(currentWeatherData);
  }
});

function saveRecentSearch(location) {
  let recents = JSON.parse(localStorage.getItem("recentSearches") || "[]");
  recents = recents.filter(r => r.name !== location.name);
  recents.unshift(location);
  if (recents.length > 5) recents.pop();
  localStorage.setItem("recentSearches", JSON.stringify(recents));
  renderRecentSearches();
}

function renderRecentSearches() {
  let recents = JSON.parse(localStorage.getItem("recentSearches") || "[]");
  if (recents.length === 0) {
    elements.recentSearches.classList.add("hidden");
    elements.recentSearches.classList.remove("flex");
    return;
  }
  
  elements.recentSearches.innerHTML = '<div class="p-3 text-xs text-muted uppercase border-b border-line bg-white/5">Recently Searched</div>';
  recents.forEach(loc => {
    const btn = document.createElement("button");
    btn.className = "text-left p-3 hover:bg-white/10 transition-colors border-b border-white/5 last:border-0 cursor-pointer flex justify-between items-center";
    btn.innerHTML = `<span><i class="fa-solid fa-clock-rotate-left mr-2 text-muted"></i> ${loc.name}, ${loc.country || ''}</span>`;
    btn.onclick = () => {
      elements.cityInput.value = loc.name;
      elements.recentSearches.classList.add("hidden");
      loadWeatherForLocation(loc);
    };
    elements.recentSearches.appendChild(btn);
  });
}
