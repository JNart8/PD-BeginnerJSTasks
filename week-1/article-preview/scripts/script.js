document.addEventListener("DOMContentLoaded", function () {
	const shareBtn = document.getElementById("shareBtn");
	const tooltip = document.getElementById("tooltip");
	const closeBtn = document.getElementById("closeBtn");
	let isMobile = window.innerWidth < 768;

	function toggleTooltip() {
		isMobile = window.innerWidth < 768; // Re-check on resize
		tooltip.classList.toggle("show");
	}

	function closeTooltip() {
		tooltip.classList.remove("show");
	}

	// Share button click
	shareBtn.addEventListener("click", toggleTooltip);

	// Close button
	closeBtn.addEventListener("click", closeTooltip);

	// Close on outside click (desktop only, to avoid mobile issues)
	document.addEventListener("click", function (e) {
		if (
			!isMobile &&
			!shareBtn.contains(e.target) &&
			!tooltip.contains(e.target)
		) {
			closeTooltip();
		}
	});

	// Handle window resize for responsiveness
	window.addEventListener("resize", function () {
		isMobile = window.innerWidth < 768;
		if (!isMobile && tooltip.classList.contains("show")) {
			// Switch to desktop style if resizing from mobile
			closeTooltip();
		}
	});
});
