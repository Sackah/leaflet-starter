import "./style.css";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet.markercluster";
import "leaflet-providers";

//initialize the map
const map = L.map("map").setView([51.505, -0.09], 13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors ",
}).addTo(map);

const customIcon = L.icon({
  iconUrl: "./public/assets/location.svg",
});

//add markers
// const marker = L.marker([51.5, -0.09], {
//   icon: customIcon,
//   iconSize: [38, 38],
// }).addTo(map);
// const marker2 = L.marker([51.51, -0.09], {}).addTo(map);
// const marker3 = L.marker([51.49, -0.09], {}).addTo(map);

//add marker cluster
const clusterLayer = L.markerClusterGroup({
  iconCreateFunction: function (cluster) {
    return L.divIcon({
      html: `<div class="cluster-div">${cluster.getChildCount()}</div>`,
    });
  },
});

const marker = L.marker([51.5, -0.09], {
  icon: customIcon,
  iconSize: [38, 38],
});
marker.bindPopup(`<h1 style="margin: none;">This is a location</h1>`);
const marker2 = L.marker([51.51, -0.09], {});
const marker3 = L.marker([51.49, -0.09], {});

// Add layers and markers
clusterLayer.addLayer(marker);
clusterLayer.addLayer(marker2);
clusterLayer.addLayer(marker3);

map.addLayer(clusterLayer);
