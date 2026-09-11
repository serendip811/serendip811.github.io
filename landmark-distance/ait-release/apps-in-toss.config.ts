import { defineConfig } from '@apps-in-toss/web-framework/config';

export default defineConfig({
  appName: 'landmarkfinder',
  brand: {
    primaryColor: '#3182F6',
  },
  webView: {
    bounces: false,
    pullToRefreshEnabled: false,
    overScrollMode: 'never',
  },
  permissions: [
    {
      name: 'camera',
      access: 'access',
    },
    {
      name: 'geolocation',
      access: 'access',
    },
  ],
  webBundleDir: 'dist',
});
