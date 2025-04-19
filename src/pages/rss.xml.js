import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
	return rss({
		title: 'Radosvet Petrov | Blog',
		description: 'Radosvet Petrov website',
		site: context.site,
		items: await pagesGlobToRssItems(import.meta.glob('./posts/*.{md,mdx}')),
		stylesheet: './rss/styles.xsl',
		customData: `<language>en-gb</language>`
	});
}
