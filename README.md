# Skycast | Professional Weather Forecast Application

Welcome to **Skycast**! A modern, fully responsive weather forecast application built with HTML, Tailwind CSS, and Vanilla JavaScript. This application provides real-time weather updates, location-based forecasting, and an intuitive user interface to help users track current conditions and extended forecasts.

## Features

- **Location-Based Forecast:** Search for any city globally or click the "Current Location" button to fetch weather details using browser Geolocation.
- **Recent Searches Dropdown:** Automatically saves your recent successful city searches in LocalStorage for quick access.
- **Dynamic Backgrounds:** The application background and animations (rain, snow, storm, etc.) change dynamically based on the current weather conditions.
- **Temperature Unit Toggle:** Easily switch today's temperatures between Celsius (°C) and Fahrenheit (°F).
- **Extended Forecast:** View a detailed 12-hour hourly forecast and a 7-day extended daily forecast complete with temperature, wind, and humidity indicators.
- **Extreme Weather Alerts:** Custom visual alerts for extreme temperatures (e.g., above 40°C).
- **Graceful Error Handling:** Custom-built toast notifications (pop-ups) for API errors, invalid inputs, and location denial, entirely replacing native `alert()` boxes.
- **Responsive UI:** Carefully designed to fit Desktop, iPad Mini, and iPhone SE screen sizes flawlessly.

## Tech Stack

- **Frontend:** HTML5, Vanilla JavaScript (ES6+), Tailwind CSS
- **APIs Used:** 
  - Open-Meteo API (For weather and forecasting)
  - Open-Meteo Geocoding API (For city search)
  - BigDataCloud Reverse Geocoding API (For fetching city name from coordinates)

## Folder Structure

```text
project-2/
│
├── index.html       # Main HTML layout
├── styles.css       # Custom CSS for dynamic animations and theme variables
├── app.js           # Core logic, API integration, and DOM manipulation
└── README.md        # Project documentation
```

## How to Run Locally

1. **Clone the repository** (if using Git):
   
   git clone https://github.com/Sky05Web/project-2.git
   
2. **Open the project folder** in your preferred code editor (e.g., VS Code).
3. **Launch the application:**
   - Simply open the `index.html` file in any modern web browser.
   - *Alternatively:* Use the **Live Server** extension in VS Code for a better development experience.

## Usage Instructions

1. **Search for a City:** Enter a valid city name in the top search bar and press Enter or click the search icon.
2. **Use Current Location:** Click the target/location icon next to the search bar. Allow the browser to access your location when prompted.
3. **Recent Searches:** Click on the search input field to view up to 3 recently searched cities. Click any of them to quickly view its weather.
4. **Toggle Units:** Click the "Switch to °F" or "Switch to °C" button to toggle the temperature units for today's forecast.

## Version Control Details

This project follows a clean version control history using Git. Commits are divided meaningfully across HTML, CSS, JavaScript, and Documentation changes to reflect the structured development process.
