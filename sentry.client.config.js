import * as Sentry from '@sentry/astro';

Sentry.init({
	dsn: 'https://e1c3140e81c59509d16a4615eff888f3@o4508116469219328.ingest.de.sentry.io/4512222850187344',
	integrations: [Sentry.browserTracingIntegration()],
	tracesSampleRate: 0.5
});
