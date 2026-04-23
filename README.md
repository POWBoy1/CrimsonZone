# CrimsonZone

A modern, lightweight unblocked games platform with integrated apps, tools, and built-in proxy support. CrimsonZone provides a sleek, user-friendly interface for accessing entertainment and productivity resources in a single, cohesive platform.

---

## Key Features

- **Multi-Category Hub** — Games, apps, and tools in one unified platform
- **Lightweight & Fast** — Built with vanilla JavaScript, HTML, and CSS (no heavy frameworks)
- **Polished UI** — Clean crimson/red themed design with responsive layout
- **Dynamic Content** — All content easily managed via JSON configuration
- **Proxy Integration** — Built-in Scramjet web proxy for external site access
- **Fully Responsive** — Optimized for desktop, tablet, and mobile devices
- **Search & Filter** — Find content quickly with integrated search functionality
- **Highly Customizable** — Expand with new games, apps, and tools in minutes
- **PM2 Ready** — Pre-configured for production deployment

---

## Project Structure

```
CrimsonZone/
├── public/                  # Frontend assets
│   ├── index.html          # Main HTML file
│   ├── styles.css          # Styling (crimson theme)
│   └── script.js           # Frontend logic
├── data/                    # Content configuration
│   ├── games.json          # Games catalog
│   ├── apps.json           # Apps catalog
│   └── tools.json          # Tools catalog
├── server/                  # Backend
│   └── index.js            # Express server
├── ecosystem.config.js      # PM2 configuration
└── package.json            # Dependencies & scripts
```

---

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/POWBoy1/CrimsonZone.git
   cd CrimsonZone
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   node server/index.js
   ```

   The app will be available at `http://localhost:3000` (or your configured port)

---

## Production Deployment with PM2

For production environments, use PM2 for process management:

```bash
# Start with PM2
pm2 start ecosystem.config.js

# Save configuration (restarts on server reboot)
pm2 save
pm2 startup

# View logs
pm2 logs CrimsonZone

# Stop or restart
pm2 stop CrimsonZone
pm2 restart CrimsonZone
```

---

## Content Management

### JSON Format

All content is stored as JSON arrays in the `/data` directory. Each item is a string with bracketed key-value pairs:

```json
[
  "[name]=\"Example\", [icon]=\"/image/location.png\", [thumbnail]=\"image/location.png\", [file]=\"File/index.html",
]
```

**Fields:**
- `[name]` — Display name of the content
- `[icon]` — Path to icon image
- `[thumbnail]` — Path to thumbnail image
- `[file]` — URL

### Adding Content

**Add a Game:**
1. Open `/data/games.json`
2. Add a new entry with the JSON structure above
3. Save and refresh the app

**Add an App:**
1. Open `/data/apps.json`
2. Add a new entry
3. Save and refresh

**Add a Tool:**
1. Open `/data/tools.json`
2. Add a new entry
3. Save and refresh

---

## Proxy Support

CrimsonZone includes **Scramjet proxy** integration for accessing external websites.

**How to Use:**
1. Look for the proxy input box in the UI
2. Enter the URL of the site you want to access
3. The proxy will route your request securely

---

## Customization Guide

### Modify Styling
Edit `/public/styles.css` to customize:
- Color scheme (adjust crimson/red theme)
- Layout and spacing
- Responsive breakpoints
- Font styles

### Modify Layout
Edit `/public/index.html` to:
- Change the header/footer
- Reorganize sections
- Add new elements

### Extend Functionality
Edit `/public/script.js` to:
- Add new features (filters, sorting, etc.)
- Implement custom search logic
- Add event listeners
- Enhance proxy functionality

### Update Backend
Edit `/server/index.js` to:
- Add API endpoints
- Implement authentication
- Add logging or analytics
- Configure middleware

---

## Browser Compatibility

| Browser | Desktop | Mobile |
|---------|---------|--------|
| Chrome  | Yes     | Yes    |
| Firefox | Yes     | Yes    |
| Safari  | Yes     | Yes    |
| Edge    | Yes     | Yes    |

All modern browsers (ES6+) are supported.

---

### Server Configuration

Modify `/server/index.js` to customize:
- Server port
- CORS settings
- Static file paths
- Middleware options

---

## Dependencies

See `package.json` for dependency list.

---

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## Legal & Disclaimer

**Important:** This project is for **educational purposes only**.

- Ensure you comply with your network's acceptable use policy
- Check school or organization policies before deploying
- The proxy feature is provided as-is; use responsibly
- The developers are not responsible for misuse of this platform
- Respect copyright and intellectual property laws

---

## License

This project is licensed under the MIT License — see the LICENSE file for details.

---

## Troubleshooting

### App won't start
- Ensure Node.js is installed: `node --version`
- Check port availability (default: 3000)
- Review error logs: `pm2 logs CrimsonZone`

### Content not loading
- Verify JSON syntax in `/data/*.json` files
- Check file paths for icons and thumbnails
- Clear browser cache and reload

### Proxy not working
- Verify the proxy URL is correct
- Check browser console for network errors
- Ensure CORS is properly configured

---

## Support & Contact

For questions or issues:
- Open an issue on GitHub
- Check existing documentation
- Review error logs in the browser console

---

## Roadmap

- User authentication & profiles
- Favorites/bookmarks system
- Advanced filtering & sorting
- Dark/light theme toggle
- Import/export settings
- Analytics dashboard
- Mobile app version

---

Made with care by the CrimsonZone team or Just POWBoy1/POW_Boy1
