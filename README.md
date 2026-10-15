# Eventika Mobile App Prototype

## Run
1. Extract the ZIP into a folder.
2. Keep `index.html`, `app.js`, `style.css`, and `data.js` together.
3. Open `index.html` in a modern browser. Internet access is used for Google Fonts, Lucide icons, and remote sample vendor images; core demo data is bundled locally.

## Mobile-app structure
- **Home** is intentionally concise: a welcome panel, four summary metrics, and a complete Quick Actions launcher.
- **Explore** contains the vendor marketplace and filters.
- **Plan** opens the event-planning workflow.
- **Activity** opens My Events.
- **More** contains all remaining destinations, including bookings, messages, invoices/payments, contracts, vendor studio, inventory/calendar, reviews, subscription, and admin demo tools.
- Modals and confirmations are rendered inside the app rather than opening separate browser windows.

## Demo behavior
This is a front-end simulation using bundled mock data. Actions such as creating events, saving vendors, sending demo messages, changing booking states, and simulating payments update the local demo state where implemented. Payment actions do not move real money; messages are not sent externally; there is no production backend or authentication. Demo changes may persist in browser local storage. Use the in-app reset demo action to restore sample data.
