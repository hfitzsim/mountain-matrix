import { Injectable } from '@angular/core';

declare const L: any;

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor() { }

  createMap() {
    if (!navigator.geolocation) {
      console.log('location is not supported');
    }

    navigator.geolocation.getCurrentPosition((position) => {
      const coords = [position.coords.latitude, position.coords.longitude];

      let map = L.map('map').setView(coords, 8);

      L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaGZpdHpzaW0iLCJhIjoiY2wybmozdzFsMHhjMjNiczMxcjYwN2FlbyJ9.eBnOgWl7LtvS_7gD6A8g9Q', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'your.mapbox.access.token'
      }).addTo(map);

      let marker = L.marker(coords).addTo(map);
      marker.bindPopup('<b>Your Location</b>').openPopup();
    });
    this.watchPosition();
    }

  watchPosition() {
    navigator.geolocation.watchPosition((position) => {

    }, (err) => {
      console.log(err);
    }, {
      enableHighAccuracy: false,
      timeout: 5000,
      maximumAge: 0
    })
  }

  /*
  
  addMarker(lat, lng) {

    let map = L.map('map').setView([lat,lng], 8);

    let redIcon = new L.Icon({
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });

    L.marker([lat, lng], {icon: redIcon}).addTo(map);

  }

  addMtnMarker() {

    let map = L.map('map').setView({latitude: 43.1640, longitude: -71.7977}, 8);

    let redIcon = new L.Icon({
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });


    let mtnMarker = L.marker({latitude: 43.1640, longitude: -71.7977}, {icon: redIcon})
    mtnMarker.bindPopup('Pats Peak', {
      closeButton: true
    })

    mtnMarker.addTo(this.map);
  
  }
  

*/

}
