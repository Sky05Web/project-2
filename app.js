// Weather codes from the API translated into labels/themes the UI understands.
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

// Cache DOM lookups once so the render/update functions stay cleaner.
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

const PRELOAD_IMAGES = [
  'https://images.unsplash.com/photo-1601297183305-6df142704ea2?auto=format&fit=crop&w=1920&q=80', // clear
  'https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=1920&q=80', // cloudy
  'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=1920&q=80', // rain
  'https://images.unsplash.com/photo-1605727216801-e27ce1d0ce3c?auto=format&fit=crop&w=1920&q=80', // storm
  'https://images.unsplash.com/photo-1491002052546-bf38f186af56?auto=format&fit=crop&w=1920&q=80', // snow
  'https://images.unsplash.com/photo-1487621167305-5d248087c724?auto=format&fit=crop&w=1920&q=80'  // fog
];

const GEOCODE_ENDPOINT = "https://geocoding-api.open-meteo.com/v1/search";
const FORECAST_ENDPOINT = "https://api.open-meteo.com/v1/forecast";
const REVERSE_GEOCODE_ENDPOINT = "https://api.bigdatacloud.net/data/reverse-geocode-client";


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

// Parse the API's date strings manually so the browser does not make timezone
// assumptions for us behind the scenes.
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

// Small human-readable summary shown in the side panel.
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

  // Show the next 12 hours starting from the nearest current hour.
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

// Keeps all temperature-only UI refreshes in one place for the unit toggle.
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
  if (recents.length > 3) recents = recents.slice(0, 3);
  localStorage.setItem("recentSearches", JSON.stringify(recents));
  renderRecentSearches();
}

function renderRecentSearches() {
  let recents = JSON.parse(localStorage.getItem("recentSearches") || "[]");
  recents = recents.slice(0, 3); // Pehle ke save hue items ko bhi 3 tak limit kar dega
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

function renderDailyForecast(weather) {
  elements.dailyGrid.innerHTML = "";

  weather.daily.time.forEach((date, index) => {
    const profile = getWeatherProfile(weather.daily.weather_code[index]);
    const maxTemp = weather.daily.temperature_2m_max[index];
    const minTemp = weather.daily.temperature_2m_min[index];
    const wind = weather.daily.wind_speed_10m_max[index];
    const hourlyIndex = index * 24 + 12;
    const humidity = weather.hourly.relative_humidity_2m[hourlyIndex] || weather.current.relative_humidity_2m;

    const dayCard = document.createElement("article");
    dayCard.className = "p-4 border border-white/10 bg-white/5 rounded-lg flex flex-col gap-2 hover:-translate-y-2 hover:border-accent hover:shadow-[0_0_15px_var(--accent-soft)] transition-all duration-300 cursor-default";
    dayCard.innerHTML = `
      <h3 class="text-base font-bold m-0 border-b border-white/10 pb-2">${index === 0 ? "Today" : formatWeekday(date)} - ${formatLongDate(date).split(",")[1]}</h3>
      <div class="flex items-center gap-2 mt-1">
         <i class="${getIconClass(profile.theme)} text-xl"></i>
         <span class="font-medium text-sm text-muted">${profile.label}</span>
      </div>
      <div class="flex items-center gap-2 mt-2">
         <i class="fa-solid fa-temperature-half text-muted"></i>
         <span class="text-lg font-display">${Math.round(maxTemp)}°C / ${Math.round(minTemp)}°C</span>
      </div>
      <div class="flex justify-between items-center text-sm text-muted mt-2">
         <span title="Wind"><i class="fa-solid fa-wind text-accent"></i> ${Math.round(wind)} km/h</span>
         <span title="Humidity"><i class="fa-solid fa-droplet text-blue-300"></i> ${Math.round(humidity)}%</span>
      </div>
    `;
    elements.dailyGrid.appendChild(dayCard);
  });
}

function renderWeather(location, weather) {
  currentWeatherData = weather;
  const profile = getWeatherProfile(weather.current.weather_code);
  const locationName = formatLocationName(location);
  const metaParts = [locationName.subtitle, formatLongDate(weather.daily.time[0])].filter(
    Boolean
  );

  elements.body.classList.remove("theme-clear", "theme-cloudy", "theme-rain", "theme-storm", "theme-snow", "theme-fog");
  elements.body.classList.add(`theme-${profile.theme}`);
  elements.heroCaption.innerHTML = `<i class="${getIconClass(profile.theme)}"></i> ${profile.label} in ${location.name}`;
  elements.locationName.textContent = locationName.title;
  elements.locationMeta.textContent = metaParts.join(" | ");
  elements.conditionStamp.textContent = profile.stamp;
  elements.conditionText.textContent = profile.label;
  elements.updatedTime.textContent = `Updated ${formatClock(weather.current.time)}`;
  elements.humidityValue.textContent = `${Math.round(weather.current.relative_humidity_2m)}${weather.current_units.relative_humidity_2m}`;
  elements.windValue.textContent = `${Math.round(weather.current.wind_speed_10m)} ${weather.current_units.wind_speed_10m}`;
  elements.precipitationValue.textContent = `${weather.current.precipitation.toFixed(1)} ${weather.current_units.precipitation}`;
  elements.pressureValue.textContent = `${Math.round(weather.current.pressure_msl)} ${weather.current_units.pressure_msl}`;
  elements.sunriseValue.textContent = formatClock(weather.daily.sunrise[0]);
  elements.sunsetValue.textContent = formatClock(weather.daily.sunset[0]);
  elements.forecastNarrative.textContent = buildNarrative(profile, weather);

  updateTemperaturesUI(weather);

  if (weather.daily.temperature_2m_max[0] >= 40) {
    showToast(`Extreme Heat Warning: Expected high of ${convertTemp(weather.daily.temperature_2m_max[0])} today!`, "alert");
  }

  renderHourlyForecast(weather);
  renderDailyForecast(weather);
}

async function fetchJson(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  return response.json();
}

// One request gives us current, hourly, and daily blocks together.
async function fetchWeather(latitude, longitude) {
  const url = new URL(FORECAST_ENDPOINT);
  url.search = new URLSearchParams({
    latitude,
    longitude,
    current: [
      "temperature_2m",
      "apparent_temperature",
      "relative_humidity_2m",
      "precipitation",
      "pressure_msl",
      "weather_code",
      "wind_speed_10m",
    ].join(","),
    hourly: [
      "temperature_2m",
      "relative_humidity_2m",
      "weather_code",
      "precipitation_probability",
    ].join(","),
    daily: [
      "weather_code",
      "temperature_2m_max",
      "temperature_2m_min",
      "sunrise",
      "sunset",
      "precipitation_probability_max",
      "wind_speed_10m_max"
    ].join(","),
    timezone: "auto",
    forecast_days: "7",
  }).toString();

  return fetchJson(url);
}

async function searchLocations(query) {
  const url = new URL(GEOCODE_ENDPOINT);
  url.search = new URLSearchParams({
    name: query,
    count: "5",
    language: "en",
    format: "json",
  }).toString();

  const data = await fetchJson(url);
  return data.results || [];
}

// Try to turn raw coordinates into something friendlier for the header.
async function reverseGeocode(latitude, longitude) {
  const url = new URL(REVERSE_GEOCODE_ENDPOINT);
  url.search = new URLSearchParams({
    latitude,
    longitude,
    localityLanguage: "en",
  }).toString();

  try {
    const data = await fetchJson(url);
    return {
      name: data.city || data.locality || "Your Location",
      admin1: data.principalSubdivision || "",
      country: data.countryName || "",
      latitude,
      longitude,
    };
  } catch (error) {
    return {
      name: "Current Location",
      admin1: "",
      country: "",
      latitude,
      longitude,
    };
  }
}

function showLocationOptions(results) {
  elements.searchResults.hidden = false;
  elements.searchResults.innerHTML = "";

  results.forEach((location) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "w-full text-left border border-line rounded-md p-[0.95rem_1rem] bg-white/5 text-text cursor-pointer hover:-translate-y-[1px] focus-visible:border-accent transition-all";
    button.innerHTML = `
      <strong class="block text-base">${location.name}</strong>
      <span class="block mt-1 text-muted">${[location.admin1, location.country].filter(Boolean).join(", ")}</span>
    `;
    button.addEventListener("click", () => loadWeatherForLocation(location));
    elements.searchResults.appendChild(button);
  });
}

function clearLocationOptions() {
  elements.searchResults.hidden = true;
  elements.searchResults.innerHTML = "";
}

async function loadWeatherForLocation(location) {
  setLoadingState(true);
  clearLocationOptions();

  try {
    const [weather] = await Promise.all([
      fetchWeather(location.latitude, location.longitude),
      // Short delay keeps the loading state from flashing too quickly.
      new Promise(res => setTimeout(res, 800)) // 800ms ka animation delay
    ]);
    renderWeather(location, weather);
    saveRecentSearch(location);
  } catch (error) {
    console.error(error);
    showToast("Unable to load the forecast right now. Please try again.", "error");
  } finally {
    setLoadingState(false);
  }
}

async function handleSearch(query) {
  setLoadingState(true);
  clearLocationOptions();

  try {
    const [results] = await Promise.all([
      searchLocations(query),
      new Promise(res => setTimeout(res, 800)) // 800ms ka animation delay
    ]);

    if (!results.length) {
      showToast(`No locations matched "${query}". Try a larger nearby city.`, "error");
      return;
    }

    if (results.length === 1) {
      await loadWeatherForLocation(results[0]);
      return;
    }

    showLocationOptions(results);
  } catch (error) {
    console.error(error);
    showToast("City lookup failed. Please check your connection and try again.", "error");
  } finally {
    setLoadingState(false);
  }
}

async function handleGeolocation() {
  showToast("Current location feature is temporarily disabled.", "info");
}

// All UI event wiring lives here so app startup stays easy to follow.
function bindEvents() {
  elements.searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const query = elements.cityInput.value.trim();
    if (!query) {
      showToast("Enter a city name to search for a forecast.", "error");
      return;
    }

    handleSearch(query);
  });

  elements.cityInput.addEventListener("focus", () => {
    let recents = JSON.parse(localStorage.getItem("recentSearches") || "[]");
    if (recents.length > 0) {
      elements.recentSearches.classList.remove("hidden");
      elements.recentSearches.classList.add("flex");
    }
  });

  // Close the recent-search dropdown when the click happens outside it.
  document.addEventListener("click", (e) => {
    if (!e.target.closest("#searchForm") && !e.target.closest("#recentSearches")) {
      elements.recentSearches.classList.add("hidden");
      elements.recentSearches.classList.remove("flex");
    }
  });

  elements.geoButton.addEventListener("click", handleGeolocation);

  document.querySelectorAll("[data-city]").forEach((button) => {
    button.addEventListener("click", () => {
      const city = button.dataset.city;
      elements.cityInput.value = city;
      handleSearch(city);
    });
  });
}

async function initializeApp() {
  bindEvents();
  
  // Preload background images so they switch instantly without network delay
  PRELOAD_IMAGES.forEach(url => {
    new Image().src = url;
  });

  renderRecentSearches();
  elements.cityInput.value = DEFAULT_CITY.name;
  // Load a sensible default so the dashboard never opens empty.
  await loadWeatherForLocation(DEFAULT_CITY);
}

initializeApp();
