document.addEventListener("DOMContentLoaded", function () {
	const form = document.getElementById("ipForm");
	const map = L.map("map").setView([0, 0], 2); // Default world view
	let marker; // For updating marker

	// Init OpenStreetMap tiles (per Leaflet docs)
	L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
		attribution:
			'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	}).addTo(map);

	// Track IP function
	async function trackIP(ip = "") {
		try {
			const url = ip
				? `https://ipapi.co/${ip}/json/`
				: "https://ipapi.co/json/";
			const response = await fetch(url);
			if (!response.ok) throw new Error("Invalid IP or API error");
			const data = await response.json();

			// Update info card
			document.getElementById("ipDisplay").textContent = `IP: ${data.ip}`;
			document.getElementById("city").textContent = data.city || "N/A";
			document.getElementById("region").textContent = data.region || "N/A";
			document.getElementById("country").textContent =
				data.country_name || "N/A";
			document.getElementById(
				"latLng"
			).textContent = `${data.latitude}, ${data.longitude}`;
			document.getElementById("timezone").textContent = data.timezone || "N/A";
			document.getElementById("infoCard").style.display = "block";

			// Update map (per Leaflet docs: setView, marker with popup)
			const lat = parseFloat(data.latitude);
			const lng = parseFloat(data.longitude);
			map.setView([lat, lng], 10);

			if (marker) marker.remove(); // Remove old marker
			marker = L.marker([lat, lng])
				.addTo(map)
				.bindPopup(
					`<b>${data.city}</b><br>${data.country_name}<br>IP: ${data.ip}`
				)
				.openPopup();
		} catch (error) {
			alert("Error tracking IP: " + error.message);
		}
	}

	// Form submit
	form.addEventListener("submit", function (e) {
		e.preventDefault();
		const ip = document.getElementById("ipInput").value.trim();
		trackIP(ip || ""); // Blank uses current IP
	});

	// Load current IP on start
	trackIP();
});
