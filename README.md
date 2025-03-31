# Smooth Scroll with Scroll Indicator in React
live demo https://vivek0902.github.io/scroll-top-bottom/

This project demonstrates how to implement smooth scrolling functionality, section navigation, and a scroll indicator in a React app. It includes:

- **Smooth Scroll to Top & Bottom** buttons.
- **Smooth Navigation** to specific sections of the page (e.g., Home, Contact).
- A **Scroll Progress Indicator** that shows how far the user has scrolled on the page.

## Features

- **Smooth Scrolling**: Clicking on the "Scroll to Top" and "Scroll to Bottom" buttons smoothly scrolls the page.
- **Section Navigation**: Clickable links in the header that allow smooth scrolling to specific sections of the page (e.g., Home, Contact).
- **Scroll Progress Indicator**: A dynamic scroll indicator bar that updates as the user scrolls down the page.

## Demo

You can try out the live demo here: [Insert your live demo link here, if applicable]

---

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **CSS**: For styling the page and smooth scroll behavior.

## Installation

Follow the steps below to set up this project locally.

### 1. Clone the repository

```bash
git clone https://github.com/your-username/smooth-scroll-react.git
cd smooth-scroll-react
```

### 2. Install dependencies

This project uses `create-react-app`, so you can install the dependencies using npm:

```bash
npm install
```

### 3. Run the development server

Once the dependencies are installed, start the development server:

```bash
npm start
```

This will open the app in your browser at `http://localhost:3000/`.

## How It Works

### 1. **Smooth Scrolling**

- Clicking the "Scroll to Top" or "Scroll to Bottom" buttons triggers a smooth scroll to the top or bottom of the page using `window.scrollTo` with `{ behavior: 'smooth' }`.

### 2. **Section Navigation**

- The header contains navigation links (`Home`, `Contact`) that scroll smoothly to the respective sections on the page.

### 3. **Scroll Progress Indicator**

- A dynamic scroll indicator is displayed at the top of the page. The indicator fills up based on how far down the user has scrolled, from `0%` at the top to `100%` at the bottom. It updates continuously as the user scrolls.

### 4. **CSS and Styling**

- Simple CSS is used to style the layout, the scroll buttons, and the scroll indicator. The indicator width is updated dynamically using the `scrollY` value to track the scroll position.

---

## Project Structure

```
/src
  /components
    Header.js          # Navigation header with links to sections
    Home.js            # Home section content
    Contact.js         # Contact section content
    ScrollButton.js    # Buttons for scrolling to top and bottom
    ScrollIndicator.js # Scroll progress indicator
  App.js               # Main component to display sections and handle scroll
  App.css              # Global CSS styles for layout and scroll indicator
  index.js             # Entry point for React app
```

---

## Contributing

If you'd like to contribute to this project, feel free to fork the repository and submit a pull request. Ensure that your code follows the existing style and passes any tests before submitting a pull request.

### Steps to Contribute

1. Fork the repository.
2. Clone your forked repository.
3. Create a new branch (`git checkout -b feature-name`).
4. Make changes and commit them.
5. Push to your forked repository (`git push origin feature-name`).
6. Create a pull request.

---

## Acknowledgements

- Thanks to [React](https://reactjs.org/) for building a powerful and flexible UI library.
- Thanks to [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) for handling the design and layout of the application.

---

Feel free to adjust the text or add more sections as needed.
