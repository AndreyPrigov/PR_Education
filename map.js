'use strict'

console.log('Loaded map.js')

mapboxgl.accessToken = 'pk.eyJ1IjoiYW5kcmV5cHJpZ292IiwiYSI6ImNqc280aHdoajBqMzY0NG41ODRwOG0wZnAifQ.9UHLZRigw6UorfQZwQe4uw'

if (!('remove' in Element.prototype)) {
  Element.prototype.remove = function() {
    if (this.parentNode) {
      this.parentNode.removeChild(this);
    }
  };
}

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10',
    center: [-66.403,18.142],
    zoom: 8.22,
    minZoom: 7.75
})

// create an instance of NavigationControl
let navigation = new mapboxgl.NavigationControl({
    showCompass: false
})

// add the navigation to your map
map.addControl(navigation, 'top-left')

// create an instance of ScaleControl
let scale = new mapboxgl.ScaleControl({
    maxWidth: 80,
    unit: 'imperial'
})

// add the scale to your map
map.addControl(scale, 'bottom-right')

var event = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
         -66.105912, 
         18.466780
        ]
      },
      "properties": {
        "places": "Capitolio de Puerto Rico",
        "description": "03/19/18: Public school teachers march to the Capitolio in San Juan to protest new charter schools and the privatization of public education.",
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -67.144705,
          18.200394
        ]
      },
      "properties": {
        "places": "Escuela Manuel A. Barreto",
        "description": "Receiving school that was in no physical condition to accept new students.",
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -67.08216,
          18.084532
        ]
      },
      "properties": {
        "places": "SU Galo Rosado",
        "description": "Parents and teachers protest after hearing about the planned closure of their neighborhood school.",
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -66.114359,
          18.465795
        ]
      },
      "properties": {
        "places": "Old San Juan",
        "description": "08/15/2018: FMPRLucha President Mercedes Martinez leads a protest of teachers in Puerto Rico against Secretary of Education Julia Keleher in old San Juan earlier today. The group wants better pay and no charter schools, among other demands.",
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -66.809920,
          18.459111
        ]
      },
      "properties": {
        "places": "Escuela Rosa E. Molinari",
        "description": "Parents and teachers in Hatillo worry about the physical and social implications of school closures on students, parents, and communities.",
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -66.653436,
          18.217290
        ]
      },
      "properties": {
        "places":"Paso Palmas",
        "description": "The restructuring of the school system marks the end of an era for children in schools like Paso Palmas, who have been educated in a close-knit, familial atmosphere for decades.",
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -66.487618,
          18.200748
        ]
      },
      "properties": {
        "places": "SU Matrullas",
        "description": "As SU Matrullas struggled to connect to electricity for months after Hurricane Maria, Puerto Rico's leaders progressively outsourced resposnibility to private enterprise.",
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -66.487636,
          18,427191
        ]
      },
      "properties": {
        "places": "Escuela Clemente Ramírez",
        "description": "Parents protest against the closing of their neighborhood school.",
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -65.876340,
          18.0445400
        ]
      },
      "properties": {
        "places": "Escuela Rosa Costa Valdivieso",
        "description": "Though students in underserved communities have seen piecemeal physical and psychosocial recovery, Hurricane Maria has left deep scars in small towns like Yabucoa.",
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -65.830400,
          18.153811
        ]
      },
      "properties": {
        "places": "Escuela Carlos Rivera Ufret",
        "description": "Battered by Maria, the school lacked basic amenities for months."
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -66.046750,
          18.214440
        ]
      },
      "properties": {
        "places": "Escuela Intermedia John F. Kennedy",
        "description": "The scheduled closure of the school galvanized teachers and parents to take to the streets and defend the community that the school long fostered."
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -66.0303053,
          18.3985773
        ]
      },
      "properties": {
        "places": "Escuela Gaspar Vila Mayans",
        "description": "Once it was back up and running after Maria, the school quickly became a lifeline for the community, providing meals, activities and a sense of normalcy to families and their children. Now, it's facing the possibility of closure for an entirely different reason – there aren't enough students to fill up its classrooms.",
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -66.261875,
          18.4599387
        ]
      },
      "properties": {
        "places": "Escuela Jacinto Lopez Martinez",
        "description": "School faced serious overcrowding after it received students from other schools."
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -66.3011869,
          18.4326245
        ]
      },
      "properties": {
        "places": "Escuela Ecológica de Dorado",
        "description": "Another Dorado school facing overcrowding afrer receiving new students from shuttered schools."
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -66.1861659,
          18.4576253
        ]
      },
      "properties": {
        "places":"Escuela Lorencita Ramírez de Arellano",
        "description": "Parents believe that the conditions at their original neighborhood schools did not merit the decision of the government to close them."
      }
    },
     {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -66.2663716,
          18.4755095
        ]
      },
      "properties": {
        "places": "Escuela Luis Muñoz Rivera",
        "description": "Despite the school being in good condition and despite the intense pressure put by parents and teachers to keep it open, Escuela Rivera was closed with insufficient consideration for the community that dependend on it."
      }
    },
     {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -66.144012,
          18.4298032
        ]
      },
      "properties": {
        "places": "Escuela Elemental Isaac del Rosario",
        "description": "Received over 200 new students at the start of the 2018-19 school year; while most families seem to be grappling with the changes effectively, some parents remain worried about the impact of the transition on their children. "
      }
    },
     {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -65.9631113,
          18.2657162
        ]
      },
      "properties": {
        "places": "Escuela de Segunda Unidad Josefina Sitiriche",
        "description": "Receiving school that some new parents have found difficult to access given how far away it is from the shuttered local school."

      }
    },
     {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -67.1446862,
          18.2960614
        ]
      },
      "properties": {
        "places": "Escuela Parcelas Maria",
        "description": "Parents of special needs children in Puerto Rico feel blindsided after school closures and limited access to special needs education a year after Hurricane Maria."
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.043959498405,
          38.903883387232
        ]
      },
      "properties": {
        "phoneFormatted": "(202) 331-3355",
        "phone": "2023313355",
        "address": "1901 L St. NW",
        "city": "Washington DC",
        "country": "United States",
        "crossStreet": "at 19th St",
        "postalCode": "20036",
        "state": "D.C."
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.043959498405,
          38.903883387232
        ]
      },
      "properties": {
        "phoneFormatted": "(202) 331-3355",
        "phone": "2023313355",
        "address": "1901 L St. NW",
        "city": "Washington DC",
        "country": "United States",
        "crossStreet": "at 19th St",
        "postalCode": "20036",
        "state": "D.C."
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.043959498405,
          38.903883387232
        ]
      },
      "properties": {
        "phoneFormatted": "(202) 331-3355",
        "phone": "2023313355",
        "address": "1901 L St. NW",
        "city": "Washington DC",
        "country": "United States",
        "crossStreet": "at 19th St",
        "postalCode": "20036",
        "state": "D.C."
      }
    },
  ]
};

map.on('load', function(e) {
  // Add the data to your map as a layer
  map.addSource({
    "type": 'geojson',
    // Add a GeoJSON source containing place coordinates and information.
    "data": event
    });
  buildLocationList(event);
});

event.features.forEach(function(marker, i){
  var el = document.createElement('div');
  el.id = "marker-" + i;
  el.className = 'marker';
  new mapboxgl.Marker(el, {offset: [0,-23]})
    .setLngLat(marker.geometry.coordinates)
    .addTo(map);

  el.addEventListener('click', function(e){
    flyToEvent(marker);
    createPopUp(marker);
    var activeItem = document.getElementsByClassName('active');

  e.stopPropagation();
  if (activeItem[0]){
    activeItem[0].classList.remove('active');
  }

  var listing = document.getElementById('listing-' + i);
  listing.classList.add('active');

  });
});

function flyToEvent(currentFeature) {
  map.flyTo({
    center: currentFeature.geometry.coordinates,
    zoom: 14
  });
}

function createPopUp(currentFeature) {
  var popUps = document.getElementsByClassName('mapboxgl-popup');
  // Check if there is already a popup on the map and if so, remove it
  if (popUps[0]) popUps[0].remove();

  var popup = new mapboxgl.Popup({ closeOnClick: true })
    .setLngLat(currentFeature.geometry.coordinates)
    .setHTML('<h3>' + currentFeature.properties.places + '</h3>' +
      '<h4>' + currentFeature.properties.description + '</h4>')
    .addTo(map);
}

function buildLocationList(data) {
  // Iterate through the list of events
  for (i = 0; i < data.features.length; i++) {
    var currentFeature = data.features[i];
    // Shorten data.feature.properties to `prop` so we're not
    // writing this long form over and over again.
    var prop = currentFeature.properties;
    // Select the listing container in the HTML and append a div
    // with the class 'item' for each event
    var listings = document.getElementById('listings');
    var listing = listings.appendChild(document.createElement('div'));
    listing.className = 'item';
    listing.id = 'listing-' + i;

    // Create a new link with the class 'title' for each store
    // and fill it with the store address
    var link = listing.appendChild(document.createElement('a'));
    link.href = '#';
    link.className = 'title';
    link.dataPosition = i;
    link.innerHTML = prop.title;

    // Create a new div with the class 'details' for each store
    // and fill it with the city and phone number
    var details = listing.appendChild(document.createElement('div'));
    details.innerHTML = prop.description;
  }
}

// Add an event listener for the links in the sidebar listing
link.addEventListener('click', function(e) {
  // Update the currentFeature to the store associated with the clicked link
  var clickedListing = data.features[this.dataPosition];
  // 1. Fly to the point associated with the clicked link
  flyToEvent(clickedListing);
  // 2. Close all other popups and display popup for clicked store
  createPopUp(clickedListing);
  // 3. Highlight listing in sidebar (and remove highlight for all other listings)
  var activeItem = document.getElementsByClassName('active');
  if (activeItem[0]) {
    activeItem[0].classList.remove('active');
  } 
  this.parentNode.classList.add('active');
});


