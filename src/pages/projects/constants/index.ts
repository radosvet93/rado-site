import mellsnapMarketing from '../mellsnap-marketing.png';
import mellsnapGalleries from '../mellsnap-galleries.png';
import trendscribberImage from '../trendscribber.png';
import casaMartinaImage from '../casamartina.png';
import a11yAssistantImage from '../a11y-assistant.png';

export const projects = [
	{
		url: 'https://www.mellsnap.co.uk',
		title: 'MellSnap Marketing Site',
		description:
			'Developed and manage the full online presence for a family photography business, covering website, marketing, content, and sales',
		image: {
			src: mellsnapMarketing,
			alt: 'Image of the MellSnap marketing website'
		},
		tech: 'Wordpress',
		industry: 'Photography'
	},
	{
		url: 'https://www.mellsnap.com',
		title: 'MellSnap Galleries',
		description:
			'Built a Next.js and AWS-powered gallery platform with an admin backend for photographers to upload, manage, and deliver client galleries',

		image: {
			src: mellsnapGalleries,
			alt: 'Image of mellsnap galleries project'
		},
		tech: 'Next.JS | AWS',
		industry: 'Photography'
	},
	{
		url: 'https://trendscribber.com',
		title: 'TrendScribber',
		description:
			'Developed a SaaS platform providing AI-driven content suggestions to help users boost engagement and grow their Instagram profiles',
		image: {
			src: trendscribberImage,
			alt: 'Image of the trendscribber project'
		},
		tech: 'Next.JS | AI',
		industry: 'Marketing'
	},
	{
		url: 'https://casamartinatuscany.com/',
		title: 'CasaMartinaTuscany',
		description:
			'Built an Astro-based website with gallery and analytics to establish the online presence of a holiday house in Tuscany',
		image: {
			src: casaMartinaImage,
			alt: 'Image of the Casa martina tuscany marketing site'
		},
		tech: 'Astro',
		industry: 'Tourism'
	},
	{
		url: 'https://marketplace.visualstudio.com/items?itemName=radosvet.a11y-assistant-vscode',
		title: 'Accessibility Assistant',
		description:
			"VS Code extension that helps you detect and fix accessibility issues. It integrates with the a accessibility library that I've also developed",
		image: {
			src: a11yAssistantImage,
			alt: 'Image of the A11y assistant VS code extension'
		},
		tech: 'axe-core | CLI',
		industry: 'VScode extension'
	}
];
