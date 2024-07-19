# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh




# Game Explorer

Game Explorer is a React application that allows users to explore and discover video games by genre. The app fetches data from an API and displays trending games, games by selected genres, and detailed game information.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Services](#services)
- [Context](#context)
- [Contributing](#contributing)
- [License](#license)

## Features

- View a list of trending games
- Browse games by genre
- View detailed information about selected games
- Toggle between light and dark themes
- Responsive design

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/NiyomugaboFidel/Game-Explorer.git
   cd game-explorer
2. Install the dependencies:

npm install

3. Start the development server:

npm run dev

## Usage
Once the application is running, you can explore the following features:

- Home Page: Displays a banner, trending games, and games by selected genre.
- Genre List: Toggle genres to filter games.
- Theme Toggle: Switch between light and dark modes.

# Components
1. GenreList
Displays a list of genres. Allows users to select a genre to filter games.

2. Banner
Displays a banner image for a selected game.

3. TrendingGames
Shows a list of trending games.

4. GamesByGenresId
Displays games filtered by the selected genre.

5. Header
Contains the navigation and theme toggle.

6 .Footer
Displays the footer information.

## Services
# GlobalApi
Handles API requests to fetch all games and games by genre.

# Endpoints
- getGenreList: Fetches the list of game genres.
- getAllGames: Fetches the list of all games.
- getGameListByGenreId: Fetches the list of games filtered by genre ID.
## Context

1. ThemeContext
Provides the theme context to toggle between light and dark themes.

## Contributing
Contributions are welcome! Please follow these steps:

# Fork the repository.
- Create a new branch: git checkout -b feature/your-feature-name.
- Commit your changes: git commit -m 'Add some feature'.
- Push to the branch: git push origin feature/your-feature-name.
- Open a pull request.

## Screenshot

![App Screenshot](./public/screenshots/screenshot.png)
## Author 
- NiyomugaboFidel
## License
This project is licensed under the MIT License. See the LICENSE file for details.
