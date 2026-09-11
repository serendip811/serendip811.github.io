import { SafeAreaInsets } from '@apps-in-toss/web-framework';

type Insets = {
  top: number;
  right: number;
  bottom: number;
  left: number;
};

type SafeAreaBridge = {
  get: () => Insets;
  subscribe: (listener: (insets: Insets) => void) => () => void;
};

export function installAppsInTossSafeAreaBridge() {
  const bridge: SafeAreaBridge = {
    get: () => SafeAreaInsets.get(),
    subscribe: (listener) =>
      SafeAreaInsets.subscribe({
        onEvent: listener,
      }),
  };

  (globalThis as typeof globalThis & {
    __AIT_SAFE_AREA__?: SafeAreaBridge;
  }).__AIT_SAFE_AREA__ = bridge;
}

installAppsInTossSafeAreaBridge();
