import { SafeAreaInsets, getCurrentLocation, startUpdateLocation } from '@apps-in-toss/web-framework';

function applyInsets(insets) {
  if (!insets) return;
  const style = document.documentElement.style;
  for (const key of ['top', 'right', 'bottom', 'left']) {
    const value = insets[key];
    if (Number.isFinite(value)) {
      style.setProperty('--safe-' + key, value + 'px');
    }
  }
}

try {
  applyInsets(SafeAreaInsets.get());
  SafeAreaInsets.subscribe({
    onEvent: applyInsets,
  });
} catch {
  // Browser fallback uses CSS env(safe-area-inset-*).
}

globalThis.__AIT_LOCATION__ = {
  async getPermission() {
    return await getCurrentLocation.getPermission();
  },
  async requestPermission() {
    return await getCurrentLocation.openPermissionDialog();
  },
  async getCurrent() {
    return await getCurrentLocation({ accuracy: 4 });
  },
  watch(onEvent, onError) {
    return startUpdateLocation({
      options: {
        accuracy: 4,
        timeInterval: 2000,
        distanceInterval: 5,
      },
      onEvent,
      onError,
    });
  },
};
