# Marvel Web
A web application that consumes the Marvel API to list characters, comics, and series. Developed as a test for the company Beta Sistemas.
Demo: https://marvelkanastrasantiago.netlify.app/

## Features
- Search for Marvel characters.
- Display character details, including associated series and comics.
- Toggle between light and dark themes, with user preference persistence.

## Technologies Used
- React: JavaScript library for building user interfaces.
- Styled-components: Library for styling components using CSS-in-JS.
- React Router DOM: Route management in the React application.
- Axios: HTTP client for making requests to the Marvel API.
- Dotenv: Loads environment variables from a .env file.
- MD5: Used for generating hashes required for authentication with the Marvel API.

## Prerequisites
- Node.js: Ensure Node.js is installed on your machine (v22+).
- Package Manager: npm or yarn.

## How to Run the Project
1. Clone the repository:
```bash
 git clone https://github.com/PauloMachine/marvel-web.git
```

2. Navigate to the project directory:
```bash
cd marvel-web
```

3. Install dependencies:
```bash
npm install
```
or
```bash
yarn install
```

4. Configure environment variables:
- Create a .env file in the root of the project.
- Add the following variables to the .env file:

```bash
REACT_APP_MARVEL_URL="https://gateway.marvel.com"
REACT_APP_MARVEL_PUBLIC_KEY=your_public_key
REACT_APP_MARVEL_PRIVATE_KEY=your_private_key
```

Replace your_public_key and your_private_key with your Marvel API keys.

5. Start the application:
```bash
npm start
```
or
```bash
yarn start
```

The application will be available at `http://localhost:3000`.

## Project Structure
The project is structured as follows:

```bash
marvel-web/
├── public/                 # Public files
├── src/
│   ├── components/         # Reusable components
│   ├── pages/              # Application pages
│   ├── services/           # Services for API communication
│   ├── styles/             # Global styles and themes
│   ├── utils/              # Utilities and helpers
│   └── App.js              # Main component
├── .env                    # Environment variables
├── .gitignore              # Git ignored files
├── package.json            # Project dependencies and scripts
└── README.md               # Project documentation
```