document.addEventListener("DOMContentLoaded", function () {
	const form = document.getElementById("subscribeForm");
	const emailInput = document.getElementById("emailInput");
	const errorMsg = document.getElementById("errorMsg");
	const successMsg = document.getElementById("successMsg");
	const resetBtn = document.getElementById("resetBtn");

	// Email validation regex (basic)
	function validateEmail(email) {
		const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return re.test(email);
	}

	// Show error
	function showError(message) {
		errorMsg.textContent = message;
		errorMsg.style.display = "block";
		emailInput.style.borderColor = "#dc3545";
	}

	// Hide error
	function hideError() {
		errorMsg.style.display = "none";
		emailInput.style.borderColor = "#ddd";
	}

	// Handle form submit
	form.addEventListener("submit", function (e) {
		e.preventDefault(); // No page reload

		const email = emailInput.value.trim();
		hideError();

		if (!email) {
			showError("Email is required.");
			return;
		}

		if (!validateEmail(email)) {
			showError("Please enter a valid email address.");
			return;
		}

		// Simulate success (in real app, send to API/server)
		console.log("Subscribing:", email); // Replace with fetch() to backend

		// Hide form, show success
		form.style.display = "none";
		successMsg.style.display = "block";
	});

	// Reset form
	resetBtn.addEventListener("click", function () {
		form.style.display = "flex";
		successMsg.style.display = "none";
		emailInput.value = "";
		hideError();
	});
});
