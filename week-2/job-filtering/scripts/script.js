document.addEventListener("DOMContentLoaded", async function () {
	let jobs = [];
	let selectedTags = new Set(); // For unique tags and easy add/remove

	const filterBar = document.getElementById("filterBar");
	const jobList = document.getElementById("jobList");
	const clearBtn = document.getElementById("clearFilters");

	// Fetch and load jobs
	async function loadJobs() {
		try {
			const response = await fetch("./jobs.json");
			jobs = await response.json();
			renderJobs(jobs);
		} catch (error) {
			console.error("Error loading jobs:", error);
		}
	}

	// Render filtered jobs
	function renderJobs(filteredJobs) {
		jobList.innerHTML = "";
		filteredJobs.forEach((job) => {
			const card = document.createElement("article");
			card.className = "job-card";
			card.innerHTML = `
        <h3>${job.title}</h3>
        <p><strong>${job.company}</strong></p>
        <p>${job.location}</p>
        <div class="job-tags">
          ${job.tags
						.map((tag) => `<span class="tag" data-tag="${tag}">${tag}</span>`)
						.join("")}
        </div>
      `;
			jobList.appendChild(card);
		});

		// Add event listeners to new tags (delegation via parent)
		jobList.addEventListener("click", handleTagClick);
	}

	// Handle tag click (add/remove from filter)
	function handleTagClick(e) {
		if (e.target.classList.contains("tag")) {
			const tag = e.target.dataset.tag;
			if (selectedTags.has(tag)) {
				selectedTags.delete(tag);
				e.target.style.background = "#e9ecef";
				e.target.style.color = "#495057";
			} else {
				selectedTags.add(tag);
			}
			renderFilterBar();
			filterAndRenderJobs();
		}
	}

	// Render filter bar
	function renderFilterBar() {
		filterBar.innerHTML = "";
		selectedTags.forEach((tag) => {
			const tagEl = document.createElement("span");
			tagEl.className = "filter-tag";
			tagEl.textContent = tag;
			tagEl.dataset.tag = tag;
			tagEl.addEventListener("click", () => {
				selectedTags.delete(tag);
				renderFilterBar();
				filterAndRenderJobs();
			});
			filterBar.appendChild(tagEl);
		});
	}

	// Filter jobs (ALL tags must match)
	function filterAndRenderJobs() {
		if (selectedTags.size === 0) {
			renderJobs(jobs);
			return;
		}
		const filtered = jobs.filter((job) =>
			Array.from(selectedTags).every((tag) => job.tags.includes(tag))
		);
		renderJobs(filtered);
	}

	// Clear filters
	clearBtn.addEventListener("click", () => {
		selectedTags.clear();
		renderFilterBar();
		filterAndRenderJobs();
	});

	// Init
	loadJobs();
});
