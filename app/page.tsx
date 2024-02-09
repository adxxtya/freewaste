"use client";

import Cookies from "js-cookie";
import { useEffect, useState, useRef } from "react";
import mapboxgl, { type LngLatLike } from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import "mapbox-gl/dist/mapbox-gl.css";

export const dynamic = "force-dynamic";

const Home = () => {
  const data = [
    {
      Unit1: {
        Name: "GreenTech Recyclers",
        Designation: "E-Waste Facility Manager",
        Address: "Plot No. 123, Electronic City, Bangalore-560001",
        "Telephone No.": "080-12345678",
        "Unit Control Room No.": "080-87654321",
        Coordinates: {
          Latitude: 12.9715988,
          Longitude: 77.5945627,
        },
      },
      Unit2: {
        Name: "EcoFriendly Waste Solutions",
        Designation: "E-Waste Facility Manager",
        Address: "Green Avenue, Eco Park, Kolkata, West Bengal 700156",
        "Telephone No.": "033-12345678",
        "Unit Control Room No.": "033-87654321",
        Coordinates: {
          Latitude: 22.572646,
          Longitude: 88.363895,
        },
      },
      Unit3: {
        Name: "Oceanic Electronics Recycling",
        Designation: "E-Waste Facility Manager",
        Address: "Recycling Zone, Coastal Road, Paradip, Odisha 754142",
        "Telephone No.": "0671-1234567",
        "Unit Control Room No.": "0671-7654321",
        Coordinates: {
          Latitude: 20.285702,
          Longitude: 86.666863,
        },
      },
      Unit4: {
        Name: "TechCycle Innovations",
        Designation: "E-Waste Facility Manager",
        Address: "EcoPark, TechCity, Chennai, Tamilnadu-600001",
        "Telephone No.": "044-12345678",
        "Unit Control Room No.": "044-87654321",
        Coordinates: {
          Latitude: 13.08268,
          Longitude: 80.2707184,
        },
      },
      Unit5: {
        Name: "EcoTech Recyclers",
        Designation: "E-Waste Facility Manager",
        Address: "Green Lane, Environmental Area, Pune (Maharashtra) 411001",
        "Telephone No.": "020-12345678",
        "Unit Control Room No.": "020-87654321",
        Coordinates: {
          Latitude: 18.5204303,
          Longitude: 73.8567437,
        },
      },
      Unit6: {
        Name: "EcoRevive Solutions",
        Designation: "E-Waste Facility Manager",
        Address: "Green Campus, Eco Street, Vadodara, Pin - 391510",
        "Telephone No.": "0265-1234567",
        "Unit Control Room No.": "0265-7654321",
        Coordinates: {
          Latitude: 22.307159,
          Longitude: 73.181219,
        },
      },
      Unit7: {
        Name: "Punjab EcoRecycle",
        Designation: "E-Waste Facility Manager",
        Address: "EcoZone, Green Road, Bhatinda (Punjab) 151001",
        "Telephone No.": "0164-1234567",
        "Unit Control Room No.": "0164-7654321",
        Coordinates: {
          Latitude: 30.208372,
          Longitude: 74.948762,
        },
      },
      Unit8: {
        Name: "GreenEarth Recycling",
        Designation: "E-Waste Facility Manager",
        Address: "EcoZone, Earth Street, Ghaziabad (UP) 201002",
        "Telephone No.": "0120-1234567",
        "Unit Control Room No.": "0120-7654321",
        Coordinates: {
          Latitude: 28.669156,
          Longitude: 77.453758,
        },
      },
      Unit9: {
        Name: "EcoBihar Waste Solutions",
        Designation: "E-Waste Facility Manager",
        Address: "Bihata Green Campus, Patna, Bihar 801103",
        "Telephone No.": "0611-1234567",
        "Unit Control Room No.": "0611-7654321",
        Coordinates: {
          Latitude: 25.594095,
          Longitude: 85.137564,
        },
      },
      Unit10: {
        Name: "Andhra E-Recycle",
        Designation: "E-Waste Facility Manager",
        Address:
          "Eco Village, Recycle Road, Gannavaram Mandal, Krishna (AP) 521212",
        "Telephone No.": "08676-123456",
        "Unit Control Room No.": "08676-654321",
        Coordinates: {
          Latitude: 16.521405,
          Longitude: 80.666924,
        },
      },
      Unit11: {
        Name: "EcoVaranasi Recycling",
        Designation: "E-Waste Facility Manager",
        Address: "GreenTech Zone, Cultural Avenue, Varanasi, UP - 221002",
        "Telephone No.": "0542-1234567",
        "Unit Control Room No.": "0542-7654321",
        Coordinates: {
          Latitude: 25.294807,
          Longitude: 83.008904,
        },
      },
      Unit12: {
        Name: "Arunachal EcoRecycle",
        Designation: "E-Waste Facility Manager",
        Address: "Green City, Eco Street, Itanagar, Arunachal Pradesh-791112",
        "Telephone No.": "0360-1234567",
        "Unit Control Room No.": "0360-7654321",
        Coordinates: {
          Latitude: 27.097966,
          Longitude: 93.623729,
        },
      },
      Unit13: {
        Name: "Ludhiana GreenTech Recyclers",
        Designation: "E-Waste Facility Manager",
        Address: "Green Street, Recycling Road, Ludhiana, Punjab-141008",
        "Telephone No.": "0161-1234567",
        "Unit Control Room No.": "0161-7654321",
        Coordinates: {
          Latitude: 30.924264,
          Longitude: 75.790557,
        },
      },
      Unit14: {
        Name: "Himalayan EcoRecycle",
        Designation: "E-Waste Facility Manager",
        Address: "EcoHill, Mountain View, Kangra, Himachal Pradesh PIN- 176201",
        "Telephone No.": "0189-1234567",
        "Unit Control Room No.": "0189-7654321",
        Coordinates: {
          Latitude: 32.163254,
          Longitude: 76.460511,
        },
      },
      Unit15: {
        Name: "Uttarakhand GreenCycle Solutions",
        Designation: "E-Waste Facility Manager",
        Address:
          "EcoVillage, Nature's Zone, Udham Singh Nagar, Uttarakhand PIN- 263152",
        "Telephone No.": "0594-1234567",
        "Unit Control Room No.": "0594-7654321",
        Coordinates: {
          Latitude: 29.214072,
          Longitude: 79.457935,
        },
      },
      Unit16: {
        Name: "Delhi EcoRecycle",
        Designation: "E-Waste Facility Manager",
        Address:
          "Green Plaza, Environmental Street, Dwarka New Delhi, PIN-110077",
        "Telephone No.": "011-1234567",
        "Unit Control Room No.": "011-7654321",
        Coordinates: {
          Latitude: 28.57097,
          Longitude: 77.07760499,
        },
      },
    },
  ];

  const [location, setLocation] = useState<any | null>(null);
  const mapNode = useRef<HTMLDivElement | null>(null);
  const [agencies, setAgencies] = useState<any>([]);

  useEffect(() => {
    const node = mapNode.current;

    if (typeof window === "undefined" || node === null) return;

    let centerCoordinates: LngLatLike;
    let zoomLevel: number;

    if (location) {
      centerCoordinates = [location.longitude, location.latitude];
      zoomLevel = 9;
    } else {
      centerCoordinates = [78.9629, 20.5937];
      zoomLevel = 4;
    }

    const mapboxMap = new mapboxgl.Map({
      container: node,
      accessToken: process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN,
      style: "mapbox://styles/mapbox/streets-v11",
      center: centerCoordinates,
      zoom: zoomLevel,
    });

    const userMarkerColor = "blue";
    const rescueReliefMarkerColor = "red";
    const agencyMarkerColor = "yellow";

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const userLocation: LngLatLike = [longitude, latitude];

          new mapboxgl.Marker({ color: userMarkerColor })
            .setLngLat(userLocation)
            .addTo(mapboxMap);

          // Zoom to the user's marker location
          mapboxMap.flyTo({
            center: userLocation,
            zoom: 14,
            essential: true,
          });
        },
        (error) => {
          console.error("Error getting user location:", error);
        }
      );
    }

    // Create a styled legend with colored boxes
    const legend = document.createElement("div");
    legend.innerHTML = `
    <div class="map-legend">
      <div class="legend-item">
        <div class="legend-color-box" style="background-color: ${userMarkerColor};"></div>
        <span class="legend-text">User's Location</span>
      </div>
      <div class="legend-item">
        <div class="legend-color-box" style="background-color: ${rescueReliefMarkerColor};"></div>
        <span class="legend-text">E-waste Management Facilities</span>
      </div>
    </div>
  `;
    legend.className = "mapboxgl-ctrl";

    // Apply CSS styles to the legend
    legend.style.position = "absolute";
    legend.style.bottom = "5px";
    legend.style.left = "5px";
    legend.style.zIndex = "99999999";
    legend.style.backgroundColor = "white";
    legend.style.padding = "10px";
    legend.style.border = "1px solid #ccc";
    legend.style.borderRadius = "5px";

    // Style the color boxes
    const colorBoxes = legend.querySelectorAll(".legend-color-box");
    colorBoxes.forEach((box: any) => {
      box.style.display = "inline-block";
      box.style.width = "20px";
      box.style.height = "20px";
      box.style.marginRight = "10px";
    });

    const legendText = legend.querySelectorAll(".legend-text");
    legendText.forEach((text: any) => {
      text.style.verticalAlign = "top";
    });

    node.appendChild(legend);

    data.forEach((unitData: any) => {
      for (let unitKey in unitData) {
        const unit = unitData[unitKey];
        const { Coordinates, Name, Address } = unit;

        if (Coordinates) {
          const { Latitude, Longitude } = Coordinates;
          const unitLocation: LngLatLike = [Longitude, Latitude];

          new mapboxgl.Marker({ color: rescueReliefMarkerColor })
            .setLngLat(unitLocation)
            .setPopup(
              new mapboxgl.Popup().setHTML(`<h3>${Name}</h3><p>${Address}</p>`)
            )
            .addTo(mapboxMap);
        }
      }
    });

    if (agencies.length > 0) {
      agencies.forEach(
        (
          agency: {
            location: { latitude: number; longitude: number };
            name: any;
            address: any;
          },
          index: any
        ) => {
          console.log("debug", agency);

          if (
            agency.location &&
            !isNaN(agency.location.latitude) &&
            !isNaN(agency.location.longitude)
          ) {
            const offset = 0.0001 * (Math.random() - 0.5);
            const agencyLocation: LngLatLike = [
              agency.location.longitude + offset,
              agency.location.latitude + offset,
            ];

            new mapboxgl.Marker({ color: agencyMarkerColor })
              .setLngLat(agencyLocation)
              .setPopup(
                new mapboxgl.Popup().setHTML(
                  `<h3>${agency.name}</h3><p>${agency.address}</p>`
                )
              )
              .addTo(mapboxMap);
          }
        }
      );
    }

    return () => {
      if (mapboxMap) {
        mapboxMap.remove();
      }
    };
  }, [location, agencies]);

  useEffect(() => {
    const apiUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/get-agency-locations`;

    // Make a GET request to the API endpoint
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json(); // Parse the response body as JSON
      })
      .then((data) => {
        // Update the 'agencies' state variable with the fetched data
        setAgencies(data);
        console.log("agency", data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  console.log("agency out", agencies);

  return (
    <div>
      <div ref={mapNode} style={{ width: "100%", height: "80vh" }} />
    </div>
  );
};

export default Home;
