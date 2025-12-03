# Week 2: Filtering & Arrays

## 📁 Project Structure

├── job-filtering/ # Task 3: Job Listings with Filtering
│ ├── data/
│ │ └── jobs.json # Job data in JSON format
│ ├── scripts/
│ │ └── script.js # Main JavaScript file
│ ├── styles/
│ │ └── style.css # Styling for job listings
│ └── index.html # Main HTML file
├── notifications/ # Task 4: Notifications Page
│ ├── scripts/
│ │ └── script.js # Main JavaScript file
│ ├── styles/
│ │ └── styles.css # Styling for notifications
│ └── index.html # Main HTML file
├── README.md # Week 2 main documentation
└── README.md # Overall project README

## 📋 Task 3: Job Listings with Filtering

### 🎯 Objective

Create an interactive job listings component that fetches job data from a JSON file and provides dynamic filtering based on job tags.

### 🔧 Implementation

- **Data Source**: `jobs.json` file containing job listings
- **Core Logic**: Complex array filtering with multiple conditions
- **Interaction**: Click tags to filter jobs in real-time

### 🚀 Key Features

1. **JSON Data Loading**: Fetch and display jobs from local JSON file
2. **Tag-based Filtering**: Click job tags to add/remove filters
3. **AND Logic Filtering**: Jobs must match ALL selected tags
4. **Dynamic Filter Bar**: Selected tags appear at top for easy management
5. **Real-time Updates**: Job list updates instantly as filters change
