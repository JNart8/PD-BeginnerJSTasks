document.addEventListener("DOMContentLoaded", function () {
	// Initial data
	let totalBacked = 5250;
	let backers = 100;
	const goal = 10000;

	const modal = document.getElementById("pledgeModal");
	const progressFill = document.getElementById("progressFill");
	const backedEl = document.getElementById("backed");
	const backersEl = document.getElementById("backers");
	const pledgeBtns = document.querySelectorAll(".pledge-btn");
	const confirmBtn = document.getElementById("confirmPledge");
	const cancelBtn = document.getElementById("cancelPledge");
	const customInput = document.getElementById("customAmount");

	// Update UI
	function updateUI() {
		const percentage = Math.min(100, (totalBacked / goal) * 100); // Math for progress
		progressFill.style.width = `${percentage}%`;
		backedEl.textContent = `$${totalBacked.toLocaleString()}`;
		backersEl.textContent = backers;
	}

	// Open modal with preset amount
	pledgeBtns.forEach((btn) => {
		btn.addEventListener("click", function () {
			const amount = parseInt(this.dataset.amount) || 0;
			customInput.value = amount;
			modal.style.display = "flex";
		});
	});

	// Confirm pledge
	confirmBtn.addEventListener("click", function () {
		const amount = parseInt(customInput.value) || 0;
		if (amount >= 5) {
			// Min pledge
			totalBacked += amount;
			backers += 1;
			updateUI();
			modal.style.display = "none";
			customInput.value = "";
			alert(
				`Pledged $${amount}! Total backed: $${totalBacked.toLocaleString()}`
			);
		} else {
			alert("Minimum pledge is $5");
		}
	});

	// Cancel
	cancelBtn.addEventListener("click", function () {
		modal.style.display = "none";
		customInput.value = "";
	});

	// Close on outside click
	modal.addEventListener("click", function (e) {
		if (e.target === modal) {
			cancelBtn.click();
		}
	});

	// Init
	updateUI();
});
