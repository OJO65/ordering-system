# Ordering System

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

It is a comprehensive React.js based ordering system built using react vanilla javascript.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

## Features

### Core Functionality
-Add products to cart, remove products, clear cart, and checkout (OOP-based cart management).

-View product listings with detailed descriptions.

-Seamless navigation between pages using react-router-dom.


### User Interface
-Responsive design – works on desktop, tablet, and mobile.

-Interactive dialogs & modals for product previews.

-Toast notifications for cart actions and checkout events.

### Technology stack
-Frontend: React.js

-Language: Vanilla JavaScript (ES6+)

-Styling: Tailwind CSS

-Icons: FontAwesome

-State Management: React Hooks (useState, useEffect)

-Form Handling: Controlled components with validation

# Project Structure
ordering-system/
│── public/                # Static assets
│── src/
│   ├── assets/            # Images (product images, logos, etc.)
│   ├── components/        # Reusable UI components
│   │   ├── Footer.jsx
│   │   ├── HomeHero.jsx
│   │   ├── Item.jsx
│   │   ├── Navbar.jsx
│   │   ├── Product.jsx
│   │
│   ├── context/           # Global state/context
│   │   └── context.jsx
│   │
│   ├── data/              # Dummy product data
│   │   └── products.js
│   │
│   ├── pages/             # Page-level components
│   │   ├── Cart/
│   │   ├── Checkout/
│   │   ├── Home/
│   │   └── Shop/
│   │
│   ├── App.js             # Main app component
│   └── index.js           # Entry point
│
└── package.json

# Component Architecture

## Main Components

-Navbar – navigation between Home, Shop, Cart, Checkout.

-HomeHero – landing page hero section.

-Product – displays product info and “add to cart” action.

-Item – individual cart item component.

-Cart – lists items, allows remove/clear/checkout actions.

-Checkout – final order summary and validation.

-Footer – simple site footer with links/info.

### Context

-context.jsx manages global state (cart, products, user actions).


# Installation setup
-Clone the repository:
git clone https://github.com/your-username/ordering-system.git
cd ordering-system

-install dependencies
npm install

-run the project
npm start

-Open http://localhost:3000 in your browser.