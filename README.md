# Kloudspot Crowd Management System

[![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)](https://angular.io/)
[![Socket.io](https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=socket.io&logoColor=white)](https://socket.io/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

> **Live Demo:** [https://kloudspot-assignment-opal.vercel.app](https://kloudspot-assignment-opal.vercel.app)

## 📖 Overview

A comprehensive, real-time Crowd Management Dashboard designed to provide actionable insights into occupancy, demographics, and footfall patterns. Architected with **Angular 21**, this application leverages **Socket.IO** for instantaneous data streaming, ensuring operators have the most up-to-date information at a glance.

## ✨ Key Features

- **🚀 Real-Time Analytics**: Live occupancy tracking powered by WebSockets.
- **📊 Interactive Visualizations**:
    - **Demographics**: Dynamic charts (Pie/Donut) breaking down age and gender distribution.
    - **Footfall Trends**: Historical and real-time entry/exit data.
- **🔐 Secure Authentication**: Robust JWT-based login system.
- **📱 Responsive Design**: Fully adaptive interface optimized for desktop and tablet viewports.
- **⚡ Performance Optimized**: Utilizes Angular's latest change detection strategies for smooth rendering.

## 🛠️ Technology Stack

- **Frontend Framework**: Angular 21 (Standalone Components)
- **Styling**: Vanilla CSS (Scoped & Modular)
- **Real-Time Communication**: Socket.IO Client
- **State Management**: RxJS (Reactive Extensions)
- **Charts**: ApexCharts / Chart.js

## 🚀 Getting Started

### Prerequisites
- Node.js (Latest LTS recommended)
- npm (Node Package Manager)

### Installation

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/upadhyaygithub/Kloudspot_Assignment.git
    cd Kloudspot_Assignment
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Run Development Server**
    ```bash
    npm start
    ```
    Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## 🔑 Test Credentials

To explore the dashboard functionalities, please use the following credentials:

| Type | Username | Password |
| :--- | :--- | :--- |
| **Admin** | `test@test.com` | `1234567890` |

## 📦 Deployment

This project is configured for seamless deployment on Vercel.

**Build Command:**
```bash
npm run build
```

**Output Directory:**
```
dist/kloudspot-assignment/browser
```

---
*Developed by Umang Upadhyay*
