## 📋 Task 5: IP Address Tracker

### 🎯 Objective

Create an IP address tracker that fetches geographical location data from an API and displays it on an interactive map using LeafletJS.

### 🔧 Implementation Requirements

- **API Integration**: Connect to IP geolocation API (e.g., ipify or similar)
- **Map Display**: Implement LeafletJS mapping library
- **User Input**: Accept IP addresses or domains for lookup
- **Data Presentation**: Show location details (country, city, ISP, timezone)

### 🚀 Key Features

1. **IP Geolocation**: Fetch location data based on IP address or domain
2. **Interactive Map**: Display location with marker using LeafletJS
3. **Auto-detect**: Option to show user's current IP location
4. **Detailed Info Panel**: Display all retrieved location information
5. **Error Handling**: Graceful handling of invalid IPs/API errors

### 💡 Technical Highlights

```javascript
// API Fetch Example
async function fetchIPData(ipAddress) {
	try {
		const response = await fetch(
			`https://geo.ipify.org/api/v2/country,city?apiKey=YOUR_KEY&ipAddress=${ipAddress}`
		);
		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Error fetching IP data:", error);
	}
}

// LeafletJS Map Implementation
function initMap(lat, lng) {
	const map = L.map("map").setView([lat, lng], 13);
	L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
		attribution: "© OpenStreetMap",
	}).addTo(map);
	L.marker([lat, lng]).addTo(map);
}
```
