# TVMaze ShowList

[![GitHub](https://img.shields.io/badge/GitHub-ashawkat-blue?style=flat&logo=github)](https://github.com/ashawkat/TVMaze-ShowList)
[![License: GPL-3.0](https://img.shields.io/badge/License-GPL%203.0-blue.svg)](https://opensource.org/licenses/GPL-3.0)
[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react)](https://reactjs.org/)

A modern React application for searching and exploring TV shows using the [TVMaze API](https://www.tvmaze.com/api). Features a clean, card-based UI with TikTok Sans typography and responsive design.

![TVMaze ShowList](https://img.shields.io/badge/TVMaze-ShowList-green)

## ✨ Features

- 🔍 Search for TV shows using the TVMaze API
- 📺 View detailed information about each show (rating, genres, episodes, synopsis)
- 🎨 Modern, card-based UI design with hover effects
- 📱 Responsive layout for mobile and desktop
- 🔤 TikTok Sans typography for a modern look
- 🔒 Secure API calls with HTTPS
- ✅ Input validation and error handling
- 🎯 CSS Variables for consistent theming

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14.0.0 or higher) - [Download here](https://nodejs.org/)
- **npm** (v6.0.0 or higher) - Comes with Node.js

To check your versions:
```bash
node --version
npm --version
```

## 🚀 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ashawkat/TVMaze-ShowList.git
   cd TVMaze-ShowList
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **Open your browser and navigate to:**
   ```
   http://localhost:3000
   ```

## 📦 Dependencies

This project uses the following main dependencies:

| Package | Version | Description |
|---------|---------|-------------|
| react | ^18.2.0 | Core React library |
| react-dom | ^18.2.0 | React DOM rendering |
| react-router-dom | ^5.3.4 | Routing for React |
| react-scripts | ^5.0.1 | Create React App scripts |
| dompurify | ^3.3.0 | XSS sanitizer for HTML |
| whatwg-fetch | ^3.6.2 | Fetch API polyfill |

### Dev Dependencies

| Package | Version | Description |
|---------|---------|-------------|
| @testing-library/jest-dom | ^5.16.5 | Jest DOM matchers |
| @testing-library/react | ^13.4.0 | React testing utilities |
| @testing-library/user-event | ^14.4.3 | User event simulation |

## 🏗️ Building for Production

1. **Create an optimized build:**
   ```bash
   npm run build
   ```

2. The build files will be in the `build` directory.

3. **To serve the production build locally:**
   ```bash
   npx serve -s build
   ```

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Runs the app in development mode |
| `npm test` | Launches the test runner |
| `npm run build` | Builds the app for production |
| `npm run eject` | Ejects from Create React App (one-way operation) |

## 📁 Project Structure

```
TVMaze-ShowList/
├── public/                 # Static files
│   ├── index.html         # HTML template
│   ├── manifest.json      # PWA manifest
│   └── favicon.ico        # App icon
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── app/          # Main app component
│   │   ├── intro/        # Intro text component
│   │   ├── loader/       # Loading indicator
│   │   ├── main/         # Main routing component
│   │   └── serieslist/   # Series list component
│   ├── container/         # Page-level components
│   │   ├── series/       # Series search page
│   │   └── singleseries/ # Series detail page
│   ├── styles/           # Global styles
│   │   └── variables.css # CSS custom properties
│   ├── assets/           # Static assets (images, etc.)
│   ├── index.js          # App entry point
│   └── index.css         # Global styles
├── package.json           # Project dependencies
├── .gitignore            # Git ignore rules
├── LICENSE               # GPL-3.0 License
└── README.md             # This file
```

## 🛠️ Technologies Used

- **React 18** - UI library
- **React Router DOM v5** - Client-side routing
- **CSS Custom Properties** - Theming and variables
- **TikTok Sans Font** - Typography (via Google Fonts)
- **TVMaze API** - TV show data
- **Create React App** - Build tooling

## 🔒 Security Features

- ✅ HTTPS API calls to TVMaze
- ✅ Input validation and sanitization
- ✅ Content Security Policy headers
- ✅ Error handling for API failures
- ✅ XSS prevention through React's built-in escaping

## 🔧 Troubleshooting

### Common Issues

1. **Port 3000 already in use:**
   ```bash
   # Kill the process using port 3000
   npx kill-port 3000
   # Or run on a different port
   PORT=3001 npm start
   ```

2. **Node modules issues:**
   ```bash
   # Remove node_modules and reinstall
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Build fails:**
   ```bash
   # Clear npm cache and reinstall
   npm cache clean --force
   npm install
   ```

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the **GPL-3.0 License** - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Ashawkat**
- GitHub: [@ashawkat](https://github.com/ashawkat)
- Repository: [TVMaze-ShowList](https://github.com/ashawkat/TVMaze-ShowList)

## 🙏 Acknowledgments

- [TVMaze](https://www.tvmaze.com/) for providing the free TV show API
- [Create React App](https://create-react-app.dev/) for the project scaffolding
- [Google Fonts](https://fonts.google.com/specimen/TikTok+Sans) for TikTok Sans typography

---

⭐ If you found this project helpful, please give it a star on [GitHub](https://github.com/ashawkat/TVMaze-ShowList)!
