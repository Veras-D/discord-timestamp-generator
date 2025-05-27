<p align="center">
  <img src="icons/icon128.png" alt="Discord Timestamp Generator Logo" width="80" height="80">
</p>

# Discord Timestamp Generator

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Chrome Extension](https://img.shields.io/badge/Chrome%20Extension-4285F4?logo=googlechrome&logoColor=white)](https://developer.chrome.com/docs/extensions/)
[![WebExtensions](https://img.shields.io/badge/WebExtensions-FF9500?logo=firefox&logoColor=white)](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions)

---

## 🗓️ Overview

**Discord Timestamp Generator** is a browser extension that generates Discord timestamp codes with live preview functionality. It provides an intuitive interface for creating timestamps in all Discord-supported formats with real-time preview.

---

## ✨ Features

- ⏰ Generate Discord timestamp codes for any date and time
- 🔄 Support for all 7 Discord timestamp formats
- 👁️ Live preview of how timestamps will appear
- 🌙 Dark/light theme toggle with persistent storage
- 📋 One-click copy to clipboard functionality
- ⚡ Current time quick-fill button
- 📱 Responsive design for various screen sizes
- 🎨 Discord-inspired UI design

---

## 📁 Project Structure

```bash
discord-timestamp-generator/
├── icons/                 # Extension icons
│   ├── icon-16.png
│   ├── icon-48.png
│   └── icon-128.png
├── popup.html            # Extension popup interface
├── popup.css             # Styles with theme support
├── popup.js              # Main application logic
├── manifest.json         # Extension manifest
└── README.md            # Project documentation
```

---

## 🚀 Getting Started

### 1. Clone & Setup

```bash
git clone https://github.com/Veras-D/discord-timestamp-generator.git
cd discord-timestamp-generator
```

### 2. Install Extension

#### Chrome/Edge/Chromium-based browsers:
1. Open `chrome://extensions/` or `edge://extensions/`
2. Enable "Developer mode"
3. Click "Load unpacked"
4. Select the extension folder

#### Firefox:
1. Open `about:debugging`
2. Click "This Firefox"
3. Click "Load Temporary Add-on"
4. Select `manifest.json`

---

## 📊 Timestamp Formats

| Format | Example Output | Description |
|--------|----------------|-------------|
| `t` | 4:20 PM | Short Time |
| `T` | 4:20:30 PM | Long Time |
| `d` | 04/20/2021 | Short Date |
| `D` | April 20, 2021 | Long Date |
| `f` | April 20, 2021 4:20 PM | Short Date/Time |
| `F` | Tuesday, April 20, 2021 4:20 PM | Long Date/Time |
| `R` | 2 months ago | Relative Time |

---

## 🎯 Usage

1. Click the extension icon in your browser toolbar
2. Select the desired date and time using the form inputs
3. Choose your preferred timestamp format from the dropdown
4. View the live preview to see how it will appear in Discord
5. Click the copy button to copy the generated code
6. Paste the code in Discord (`<t:timestamp:format>`)

---

## 🛠️ Technologies

* **HTML5** – Semantic markup structure
* **CSS3** – Modern styling with CSS variables
* **JavaScript ES6+** – Modern JavaScript features
* **Web Extensions API** – Cross-browser compatibility
* **LocalStorage** – Theme preference persistence
* **Clipboard API** – Modern clipboard operations

---

## 🌐 Browser Compatibility

- Chrome 88+
- Firefox 78+
- Edge 88+
- Safari 14+
- Opera 74+

---

## 🎨 Features Breakdown

### Theme System
- Automatic theme detection and persistence
- Smooth transitions between light and dark modes
- Discord-inspired color schemes

### Clipboard Integration
- Modern Clipboard API with fallback support
- Visual feedback on successful copy operations
- Cross-browser compatibility

### Time Handling
- Accurate timestamp generation using Unix timestamps
- Relative time calculations with Intl.RelativeTimeFormat
- Real-time preview updates

---

## ☕ Buy Me a Ko-Fi

[![Ko-Fi](https://img.shields.io/badge/Ko--fi-F16061?style=for-the-badge&logo=ko-fi&logoColor=white)](https://ko-fi.com/verivi)

---

<div align="center">
  <p>© 2025 VERAS. All rights reserved.</p>
</div>
