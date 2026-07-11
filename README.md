# E-Commerce-Route 🛒

A full-featured e-commerce web application built with React 19, allowing users to browse products, manage their cart and wishlist, and complete a smooth shopping experience with a modern, responsive UI.

![React](https://img.shields.io/badge/React-19-blue)
![TanStack Query](https://img.shields.io/badge/TanStack%20Query-5-red)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4-38bdf8)
![Vite](https://img.shields.io/badge/Vite-7-purple)

---

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [What I Learned](#what-i-learned)
- [Screenshots](#screenshots)

---

## ✨ Features

- 🛍️ Product listing with image gallery and search
- 🛒 Shopping cart and wishlist management
- 🔐 User authentication (login/register) with Formik & Yup validation
- 👤 Account management dashboard (orders, addresses, profile)
- 🖼️ Product image slider/carousel
- 🔔 Toast notifications and confirmation alerts for user actions
- 📱 Fully responsive design across all devices

---

## 🛠️ Tech Stack

**Core**
- React 19
- React Router v7
- TanStack Query (React Query) v5

**Forms & Validation**
- Formik
- Yup

**Styling**
- Tailwind CSS v4
- Poppins font (@fontsource)

**HTTP Client**
- Axios

**UI Enhancements**
- Font Awesome (icons)
- React Toastify (notifications)
- SweetAlert2 (alerts & confirmations)
- Swiper (carousels)
- React Image Gallery (product images)

**Tools**
- Vite 7
- ESLint
- Git & GitHub

---

## 📁 Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/          # Route-level pages
├── hooks/          # Custom hooks (useCart, useWishlist, etc.)
├── context/        # Context providers
├── services/       # API client and request functions
└── utils/          # Helper functions
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm

### Installation

1. Clone the repository
```bash
git clone https://github.com/ahmed-zoherr/E-Commerce-Route.git
cd E-Commerce-Route
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env` file based on `.env.example` and add your environment variables

4. Run the development server
```bash
npm run dev
```

5. Open the local URL shown in your terminal to view the app

### Other Scripts

```bash
npm run build      # Build for production
npm run preview    # Preview the production build
npm run lint        # Run ESLint
```

---

## 🔑 Environment Variables

Create a `.env` file in the root directory based on `.env.example`, and add the required API base URL and any other keys used by the project.

---

## 💡 What I Learned

- Managed server state and caching efficiently using TanStack Query instead of Context API
- Built custom hooks (`useCart`, `useAddToCart`, `useWishlist`, etc.) for cleaner, reusable logic
- Implemented query invalidation after mutations to keep UI in sync with server data
- Designed a consistent Axios-based API client abstraction (`url`, `method`, `data`) for all HTTP requests
- Built forms with robust validation using Formik and Yup
- Established a full color system calculated programmatically from HSL values
- Handled routing with React Router v7 across multiple protected and public pages

---


## 👤 Author

**Ahmed Zoher**

- GitHub: [@ahmed-zoherr](https://github.com/ahmed-zoherr)
- LinkedIn: [Ahmed Zoher](https://www.linkedin.com/in/ahmed-zoher-737610421)# 
