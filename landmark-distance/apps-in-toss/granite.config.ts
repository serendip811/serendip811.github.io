import { defineConfig } from '@apps-in-toss/web-framework/config';

export default defineConfig({
  // 앱인토스 콘솔의 appName과 반드시 동일하게 맞춰 주세요.
  appName: 'landmark-finder',
  brand: {
    displayName: '랜드마크 파인더',
    primaryColor: '#111111',
    // 콘솔에 업로드한 앱 아이콘 URL로 교체해 주세요.
    icon: '',
  },
  web: {
    host: 'localhost',
    port: 5173,
    commands: {
      dev: 'vite --host',
      build: 'vite build',
    },
  },
  permissions: [
    { name: 'camera', access: 'access' },
    { name: 'geolocation', access: 'access' },
  ],
  outdir: 'dist',
  webViewProps: {
    type: 'partner',
    bounces: false,
    pullToRefreshEnabled: false,
    overScrollMode: 'never',
    allowsInlineMediaPlayback: true,
    allowsBackForwardNavigationGestures: false,
  },
});
