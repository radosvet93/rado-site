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
	relatedPosts: string[];
	accreditation?: {
		handle: string;
		photographer: string;
		photo: string;
		media: string;
	}
};
