import { SafeAreaInsets } from '@apps-in-toss/web-framework';

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
