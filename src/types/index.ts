export type PostFrontmatter = {
	title: string;
	isPinned?: boolean;
	pubDate: string;
	minutesRead: string;
	description: string;
	excerpt: string;
	isPublished?: boolean;
	image: {
		src: string;
		alt: string;
	};
	tags: string[];
};
