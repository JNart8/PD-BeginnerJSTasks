/**
 * @typedef {Object} Notification
 * @property {number} id - Unique ID
 * @property {string} message - Notification text
 * @property {boolean} isRead - Read state
 */

/** @type {Notification[]} */
const notifications = [
	{
		id: 1,
		message: "Week 2 tasks are due today.",
		isRead: false,
	},
	{ id: 2, message: "Your post got 5 new likes.", isRead: false },
	{ id: 3, message: "System update available.", isRead: false },
	{ id: 4, message: "Welcome to the platform!", isRead: true },
	{ id: 5, message: "Friend request from Jane Smith.", isRead: true },
];

document.addEventListener("DOMContentLoaded", function () {
	const list = document.getElementById("notificationList");
	const counter = document.getElementById("unreadCounter");
	const markAllBtn = document.getElementById("markAllRead");

	// Render notifications
	function renderNotifications() {
		list.innerHTML = "";
		notifications.forEach((notif) => {
			const li = document.createElement("li");
			li.className = `notification-item ${notif.isRead ? "read" : "unread"}`;
			li.innerHTML = `
        <span class="unread-dot"></span>
        <span>${notif.message}</span>
      `;
			li.addEventListener("click", () => markAsRead(notif.id));
			list.appendChild(li);
		});
		updateCounter();
	}

	// Mark single as read
	function markAsRead(id) {
		const notif = notifications.find((n) => n.id === id);
		if (notif && !notif.isRead) {
			notif.isRead = true;
			renderNotifications();
		}
	}

	// Mark all as read
	function markAllAsRead() {
		notifications.forEach((notif) => {
			notif.isRead = true;
		});
		renderNotifications();
	}

	// Update unread counter
	function updateCounter() {
		const unreadCount = notifications.filter((n) => !n.isRead).length;
		counter.textContent =
			unreadCount > 0 ? `${unreadCount} unread` : "All caught up!";
		counter.style.background = unreadCount > 0 ? "#007bff" : "#28a745";
	}

	// Events
	markAllBtn.addEventListener("click", markAllAsRead);

	// Init
	renderNotifications();
});
