# Apps in Toss release prep

This folder contains the Apps in Toss-specific release settings for Landmark Finder.

## What is already prepared

- WebView app type: `partner`
- Camera permission: `camera / access`
- Location permission: `geolocation / access`
- Pull-to-refresh / bounce disabled for a more app-like camera experience
- iOS back/forward swipe navigation disabled
- Safe Area bridge for `SafeAreaInsets.get()` and `SafeAreaInsets.subscribe()`

## Before building

1. Change `appName` in `granite.config.ts` to the exact value registered in the Apps in Toss console.
2. Change `brand.displayName` if the console display name is different.
3. Fill `brand.icon` with the icon URL from the Apps in Toss console.
4. Import `safe-area-bridge.ts` before the Landmark Finder page code runs. The current page automatically consumes `globalThis.__AIT_SAFE_AREA__` when present and falls back to CSS `env(safe-area-inset-*)` on the public web.

## Release behavior in the current page

- Permission denial shows a retryable in-app message instead of leaving the camera screen in a broken state.
- Landmark chips are sorted by proximity after the first GPS fix.
- The nearest landmark is selected automatically on the first location fix.
- A maximum of 3 markers are shown inside the camera view.
- A maximum of 2 off-screen indicators are shown on each side.
- Park boundaries are bundled, so the release does not depend on a live Overpass/OSM request.
