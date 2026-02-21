import React, { useEffect, useRef, useState } from "react";

const CoverageMap = () => {
  const mapRef = useRef(null);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetch("/cities.json")
      .then((res) => res.json())
      .then((data) => setCities(data));
  }, []);

  useEffect(() => {
    if (mapRef.current && cities.length > 0) {
      mapRef.current.innerHTML = "";
      cities.forEach((city) => {
        const dot = document.createElement("div");
        dot.className = "absolute bg-lime-600 rounded-full animate-bounce";
        dot.style.width = "18px";
        dot.style.height = "18px";
        dot.style.left = `${city.lng * 2.5 + 40}%`;
        dot.style.top = `${city.lat * 1.2 - 10}%`;
        dot.title = city.name;
        mapRef.current.appendChild(dot);
      });
    }
  }, [cities]);

  return (
    <div className="relative w-full h-96 bg-blue-50 rounded-xl shadow-lg overflow-hidden">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Bangladesh_location_map.svg"
        alt="Bangladesh Map"
        className="w-full h-full object-cover opacity-80"
      />
      <div ref={mapRef} className="absolute top-0 left-0 w-full h-full"></div>
      <div className="absolute bottom-4 left-4 bg-white bg-opacity-80 p-3 rounded shadow text-gray-800">
        <h2 className="text-lg font-bold mb-1">Coverage Map</h2>
        <p className="text-sm">Books can be delivered to these cities!</p>
      </div>
    </div>
  );
};

export default CoverageMap;