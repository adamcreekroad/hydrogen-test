import {
  defineConfig,
  CookieSessionStorage,
  PerformanceMetricsServerAnalyticsConnector,
} from '@shopify/hydrogen/config';

export default defineConfig({
  shopify: () => ({
    defaultLanguageCode: 'EN',
    defaultCountryCode: 'US',
    storeDomain: 'adam-shogun-sandbox.myshopify.com',
    storefrontToken: '57a8e9a5227592ef742cdfb2545c0b50',
    storefrontApiVersion: '2022-07',
  }),
  session: CookieSessionStorage('__session', {
    path: '/',
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 60 * 60 * 24 * 30,
  }),
  serverAnalyticsConnectors: [PerformanceMetricsServerAnalyticsConnector],
});
