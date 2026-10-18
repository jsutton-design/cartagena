# Cartagena Trip App

A mobile web app built for a group trip to Cartagena, Colombia (August 17–24, 2026). 23 people were on the trip, and 20 of them downloaded and used the app on their iPhones.

**Live app:** https://jsutton-design.github.io/cartagena/
Best viewed on a phone. On an iPhone, open it in Safari and choose **Share → Add to Home Screen** to use it like an installed app.

## What it does

The app puts everything the group needed in one place, organized around four questions travelers ask most:

- **Itinerary:** What's happening today? A day-by-day schedule with arrivals, plans, open time and what to bring. Items can be checked off as the day goes on.
- **Places:** Where should we go? Restaurants, coffee, sights, shopping, pharmacies and day trips, grouped by neighborhood, each with a one-tap link to Google Maps.
- **Guide:** How does this city work? Getting around, weather, safety, money and tipping, food, souvenirs and the tax refund process. Each topic opens with the short answer first.
- **Essentials:** What do I need right now? The address to show a driver, who lands when, a Spanish phrase guide with copy buttons, and emergency numbers.

**Search** works across all four sections, and every section has space for personal notes.

## Design approach

- **Built for the moment of use.** Travelers check the app on a street corner, in a taxi or at an airport gate, so the most urgent information comes first and long reference content stays collapsed until needed.
- **Clear information hierarchy** across titles, headings, subheadings and body text.
- **Design tokens for light and dark modes.** Colors are defined once and reused, so both themes stay consistent.
- **Consistent action colors.** Gold always means a primary action and blue a secondary one. Information is never styled to look tappable.
- **Accessibility:** designed to meet WCAG 2.1 AA for color contrast, touch target size and screen reader labels.
- **Works offline.** Boat days and airport arrivals often have no signal, so the app saves itself on the phone after the first visit.

## How it's built

- `index.html`: the entire app (HTML, CSS and JavaScript) in one file, with no frameworks and no build step
- `sw.js`: a service worker that caches the app for offline use
- `manifest.json` and `icon.svg`: let the app be added to an iPhone home screen

Checkmarks and notes are saved only in each person's own browser. Nothing is sent to a server.

## Run it locally

Serve the folder with any local web server (the offline feature doesn't work when opening the file directly). For example:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Privacy note

This is a portfolio version of the app the group used. People's names, the villa and its address, contact details, Wi-Fi details and flight numbers have been replaced with realistic made-up versions. Restaurants, sights, public phone numbers, emergency contacts and travel guidance are real.
