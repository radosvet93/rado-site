import { z } from 'zod';
import type { PostFrontmatter } from '@/types';

export const allowedTags = [
	'react',
	'react-hooks',
	'frontend',
	'typescript',
	'best-practices',
	'principles',
	'performance',
	'security',
	'testing',
	'visual-regression',
	'tooling',
	'career',
	'mentoring',
	'code-quality',
	'teamwork',
	'mindset',
	'senior-engineering',
	'time-management'
] as const;

const postSchema = z.object({
	title: z.string(),
	isPinned: z.boolean().optional(),
	pubDate: z.string(),
	minutesRead: z.string(),
	excerpt: z.string(),
	isPublished: z.boolean().optional(),
	image: z.object({
		src: z.string(),
		alt: z.string()
	}),
	tags: z.array(z.enum(allowedTags))
});

export function validatePost(post: PostFrontmatter, id: string) {
	const result = postSchema.safeParse(post);
	if (!result.success) {
		console.error(`❌ Invalid frontmatter in ${id}`);
		console.error('Passed tags:', post.tags)
		console.error('Change tags on position:', Object.keys(result.error.format().tags ?? {}).slice(0, -1));
		throw new Error('Invalid frontmatter');
	}
	return result.data;
}
