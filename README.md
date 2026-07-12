# 7aCoMusic

7aCoMusic is a simple static website that introduces visitors to Colombian music through several sections: Home, Music, History, Indigenous, Map of Colombia, and Resources.

## What the project contains
- index.html: main page structure and section layout
- MusicColombiaJS.js: JavaScript for section switching, background image transitions, and loading content from JSON
- MusicColombiaCSS.css: styling for the layout, navigation, images, and text overlays
- jsonImformacion.json: content source for the website text, images, and audio links
- Fotos/ and Audio/: asset folders used by the site

## How to view it locally
Open index.html in a browser, or serve the folder with a simple local server if you prefer a browser-based preview.

Example:
- python -m http.server 8000
- Then visit http://localhost:8000/

## Notes
The site uses a JSON-driven content approach so most page information is loaded dynamically instead of being hardcoded directly into the HTML.
