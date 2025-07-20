import rss, { pagesGlobToRssItems } from '@astrojs/rss';
import { AppConfig } from '@/utils/AppConfig';
import { sortPostsByDate } from '@/utils/data.util';

export async function GET(context) {
	const allPosts = Object.values(
		import.meta.glob('./posts/**/*.{md,mdx}', { eager: true })
	);
	const publishedPosts = allPosts.filter((post) => post.frontmatter.isPublished != false);
	publishedPosts.sort(sortPostsByDate);
	const items = publishedPosts.map((post) => ({
		title: post.frontmatter.title,
		description: post.frontmatter.description,
		pubDate: post.frontmatter.pubDate,
		link: post.url
	}));

	return rss({
		title: AppConfig.title,
		description: AppConfig.description,
		site: context.site,
		items,
		stylesheet: './rss/styles.xsl',
		customData: `<language>en-gb</language>`
	});
}
