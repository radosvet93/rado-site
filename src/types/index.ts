export type PostFrontmatter = {
	title: string;
	isPinned?: boolean;
	pubDate: string;
	minutesRead: string;
	excerpt: string;
	isPublished?: boolean;
	image: {
		src: string;
		alt: string;
	};
  tags: string[];
};