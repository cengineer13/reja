<div align="center">

# 🌟 Modern Personal Portfolio Website

A responsive, dynamic personal portfolio website built with **Node.js**, **Express.js**, and the **EJS** (Embedded JavaScript) templating engine.

[![Node.js](https://img.shields.io/badge/Node.js-18.x%20%7C%2020.x-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-4.x-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![EJS](https://img.shields.io/badge/EJS-Templating-B4CA65?style=for-the-badge&logo=ejs&logoColor=black)](https://ejs.co/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

---

### 📸 Preview

![Portfolio Screenshot](./public/author/portfolio_screenshot.png)

</div>

---

## 📌 Overview

This repository contains a full-stack personal portfolio website showcasing developer skills, professional experience, language proficiencies, and service offerings with modern sidebar navigation and an interactive UI layout.

---

## ✨ Key Features

- 👤 **Profile & Bio Sidebar**: Highlights contact details, residence, age, language skills with custom progress bars, and technical skill proficiencies.
- 💼 **Interactive Service Cards**: Modular grid displaying service offerings (Web Development, UI/UX Design, Sound Design, Game Design, Photography, and Advertising).
- 🧩 **Modular EJS Architecture**: Structured with reusable EJS components (partials for header, sidebar, navigation, and service cards).
- 🎨 **Responsive & Clean UI**: Clean white-and-gold aesthetic with sidebar navigation icons and dark/light mode toggle readiness.
- ⚡ **Express.js Routing**: Fast and lightweight SSR (Server-Side Rendering) architecture.

---

## 🛠️ Tech Stack

- **Backend:** [Node.js](https://nodejs.org/), [Express.js](https://expressjs.com/)
- **Templating Engine:** [EJS](https://ejs.co/) (Embedded JavaScript)
- **Styling:** CSS3, Flexbox, CSS Grid, Custom UI components
- **Icons & Assets:** Custom SVG / FontAwesome icons

---

## 📂 Project Structure

```bash
portfolio-ejs/
├── public/
│   │   └── style.css       # Main styling
│   └── author/             #All of website images, icons
── js/
    ── server.js            # Client-side scripts
├── views/
│   ├── author.ejs │           # Author portfolio website
│   └── index.ejs              # Main home page
├── package.json               # Dependencies and scripts
└── README.md                  # Project documentation