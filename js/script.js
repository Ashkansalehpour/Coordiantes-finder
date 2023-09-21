/*
* Project name: Coordinates Finder


* Contributors: Ashkan Salehpour


* Description: Coordinates Finder is a geolocation platform developed using the leaflet library. It empowers users to discover latitude and longitude coordinates by interacting with a user-friendly interface. Whether you need to pinpoint a specific location or explore various coordinates, this tool has you covered. Find coordinates effortlessly and efficiently.
* Technology:  


Programming Languages:

* JavaScript: Used for client-side development.
* HTML/CSS: Utilized for crafting the user interface and managing styling.

Front-End Frameworks/Libraries:

*leaflet: A mapping library used for accurate and up-to-date mapping data.

* Create Date: 1402.6.30 / 2023.21.11
*/

// Create a map centered at a specific latitude and longitude
// This line of JavaScript code is used to create a Leaflet map and set its initial view
// Making map object and set it in variable name 'map'
let map = L.map('map').setView([51.505, -0.09], 13); //This line show us where it should be placed in HTML doc .
// .setView show us where the first pin should be and the number is coordinate
//[51.505, -0.09] it show us where the initial latitude and longitude coordinator
// 13 is the initial zoom level of the map , when is on 13 it means that the map will be displayed with level 13 and also you can change the level
//---------------------------------------------------------------

// Add a tile layer (OpenStreetMap) to the map
// L.tileLayer() make us a layers for map , this layer use to display map data and tiles , for make this happen we use specific link (which is in ()) 
// z,x,y is use to show us the coordinator
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    // this part of the text set the attribute which is a required to give information to OpenStreetMap for knowing map data
}).addTo(map); // Add this tile layer to Leaflet map by calling .addTo(map) and it will be display the layer of OpenStreetMap
//----------------------------------------------------------
// Initialize a variable to store the marker for no-click events
let defaultMarker = L.marker([28.957792750926597, 50.837150074136275]).addTo(map); // create default coordinator for marker which it display for times you don't click on anyplace in map and with .addTo(map) the marker add to map

// making popup massage to make default  coordinates of maps is
defaultMarker.bindPopup('Default Coordinates: 28.957792750926597, 50.837150074136275').openPopup();



// Initialize a variable to store the marker
//This variable stored the information which the marker track , when the user click it marker will be add to map and with the click event listener function you can access to all ove your map
let marker;

// Add a click event listener to the map
// It display user click on map , when the click occurs, the function provided as the second argument is executed , and the 'e' parameter represents the event object containing information about click event
map.on('click', function (e) {
    // Remove the existing marker, if any
    // This conditional statement (if) checks if the marker variable has a value (not null or undefined). 
    //if there is an exiting marker on the map (marker is defined), it will be remove it from the map using map.removeLayer(marker) (Pin will be deleted) 
    //It will make it only displayed at a time on the map.
    if (marker) {
        map.removeLayer(marker);

    }

    // Get the clicked coordinates
    // e.latlng property of the event object contains coordinates where user click
    let lat = e.latlng.lat; // extract the latitude (lat)
    let lng = e.latlng.lng; //extract longitude (lng) 

    // Create a red pin icon

    let redIcon = L.icon({
        iconUrl: 'images/pin.png', // path of image icon , which is use for pin
        iconSize: [32, 32], // iconSize is the size of marker which is in pixel , and two values is [width,height]
        iconAnchor: [15, 16], //it show the position of marker [x,y]
        popupAnchor: [0, -32] // Where the popups will open relative to icon's position [x,y]
        //[0,-32] it means popup will open just above the marker icon
    });

    // Create a marker at the clicked location with the red pin icon
    // create a new marker location using the latitude (x) and longitude (y) 
    // it show us red marker again 
    //adding this marker to map with addTo(map)
    marker = L.marker([lat, lng], { icon: redIcon }).addTo(map);

    // Display the coordinates in a popup
    // Creating popup with using L.popup().
    // You set the popup's position using setLat
    L.popup()
        .setLatLng(e.latlng) // You set the popup's position using this code
        .setContent('Your coordinators is: ' + lat + ', ' + lng) // set content of the popup
        .openOn(map); // open popup page on map to show what is the coordinator 
});