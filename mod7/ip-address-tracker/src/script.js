import { API_KEY } from "./secrets.js";
const mapDiv = document.getElementById("map");
const form = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const searchResults = document.getElementById("search-results");

/**
 * GET user's IP address info on page load
 */
document.addEventListener("DOMContentLoaded", async () => {
  try {
    const res = await fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}`,
    );

    if (!res.ok) {
      throw new Error("Error fetching data");
    }
    const data = await res.json();
    console.log(data);

    // Map
    const map = L.map(mapDiv).setView(
      [data.location.lat, data.location.lng],
      13,
    );

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);
  } catch (error) {
    console.error(error);
  }
});
