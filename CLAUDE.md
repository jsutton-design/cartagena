# Cartagena Trip App

## What this is
A mobile web app built for a group trip to Cartagena, Colombia (Aug 17–24, 2026). It has four sections: **Itinerary, Places, Guide, Essentials**, plus search across all content.

**Key numbers (use these exactly, anywhere they come up, such as a README):** 23 people were on the trip, and 20 of them downloaded and used the app on their iPhones.

This repository is a public portfolio version of that app. It will be published with GitHub Pages at https://jsutton-design.github.io/cartagena/.

I'm a senior product designer, and I'm new to Claude Code, Git, and GitHub. Explain what you're doing in plain language, and work one step at a time.

## Files
- `index.html` contains the whole app: HTML, CSS (design tokens for light and dark modes), JavaScript, and two images embedded as base64 data. It's large, so search it rather than reading it all at once.
- `sw.js` is the service worker, which caches the app for offline use. Its cache name (`ctg-...`) must change whenever the app changes, or iPhones keep showing the old version.
- `manifest.json` and `icon.svg` let the app be added to an iPhone home screen.

There is no build step. It's a static site. To preview it, serve the folder over a local web server (the service worker doesn't work from a `file://` address).

## Privacy rules (most important)
This repository and the published site are **public**, and Git keeps every version forever. Real personal details must never be committed, including in this file, commit messages, or code comments.

Replace the following with **made-up but realistic** content. Don't black anything out or leave placeholders like "[redacted]"; the app should still read naturally.

1. **Every person's first name**, including the trip organizer's. Names appear in the itinerary, the flight cards, the "Who's Here When" table, attendee lists, and the search data in the JavaScript. Use one consistent made-up name per person everywhere, and keep the same number of people.
2. **The villa**: its name, its street address, and any wording that pinpoints its location (for example "directly across from" a named landmark, or restaurant notes that describe distance from the villa by name). Use a made-up villa name and a plausible made-up address in the same neighborhood (Getsemaní).
3. **The photo of the villa** (the `--villa-art` image). It shows the real building. Replace it with something generic that fits the design system, such as an illustration or pattern built in code. Propose options before choosing. The skyline illustration (`--art`) is generic and can stay.
4. **The Airbnb listing link.** Remove it, or point it to https://www.airbnb.com.
5. **House contact and house manager**: their names and the personal phone number. Use made-up names and an obviously fictional number. Also update the search keyword list that refers to the manager by name.
6. **Wi-Fi network name and password, and any door code.**
7. **Personal payment handles** (for example the @ handle for the food tour payment).
8. **Flight numbers.** Change flight numbers to made-up ones and keep seat numbers. Dates and times can stay.

**Keep as is:** the trip dates, and all public information, including restaurants, sights, their public addresses and phone numbers, tourist police, embassy and consulate contacts, carrier support numbers, and the phrase guide.

After making the changes, search the whole folder to confirm none of the original details remain, and list what you replaced.

## Design principles
- Clear information hierarchy across titles, headings, subheadings, and body text.
- Consistent design tokens for light and dark modes. Change colors through tokens, not one-off values.
- Button semantics: call-to-action colors stay consistent across primary and secondary buttons and links.
- Accessibility: meet WCAG 2.1 AA (contrast, touch target size, screen reader labels).
- Don't change the layout or visual design unless I ask. Privacy edits should be invisible to the design.

## Writing
Use American English spelling.

## Git and GitHub
- Don't commit, push, or create branches unless I ask.
- Before each commit, show me what changed and suggest a short, clear commit message.
- Commits must use my GitHub private email address, never a personal email.
