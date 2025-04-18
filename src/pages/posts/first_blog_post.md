---
layout: ../../layouts/post.astro
title: 'First post'
pubDate: 2024-04-18
description: 'First post description'
author: 'Radosvet Petrov'
isPinned: false
excerpt: First post excerpt
image:
  src:
  alt:
tags: ['someTag']
---

This is a paragraph. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur vero esse non molestias eos excepturi, inventore atque cupiditate. Sed voluptatem quas omnis culpa, et odit.

Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur vero esse non molestias eos excepturi, inventore atque cupiditate. Sed voluptatem quas omnis culpa, et odit.

Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur vero esse non molestias eos excepturi, inventore atque cupiditate. Sed voluptatem quas omnis culpa, et odit.

## Headings

# H1 For example

Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur vero esse non molestias eos excepturi, inventore atque cupiditate. Sed voluptatem quas omnis culpa, et odit.

## Emphasis

Emphasis, aka italics, with _asterisks_ or _underscores_.

Strong emphasis, aka bold, with **asterisks** or **underscores**.

Strikethrough uses two tildes. ~~Scratch this.~~

## Blockquotes

> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.

Quote break.

> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can _put_ **Markdown** into a blockquote.

## Horizontal separator

This is a horizontal separator:

---

Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur vero esse non molestias eos excepturi, inventore atque cupiditate. Sed voluptatem quas omnis culpa, et odit.

---

## List types

## Links

[Inline-style link](https://www.google.com)

[Inline-style link with title](https://www.google.com "Google's Homepage")

[Reference-style link][arbitrary case-insensitive reference text]

[You can use numbers for reference-style link definitions][1]

Or leave it empty and use the [link text itself].

Some text to show that the reference links can follow later.

[arbitrary case-insensitive reference text]: https://www.mozilla.org
[1]: http://slashdot.org
[link text itself]: http://www.reddit.com

## Images

Images included in _\_posts_ folder are lazy loaded.

Inline-style:
![alt text](/images/random.jpg 'Logo Title Text 1')

## Table

| Tables        |      Are      | Cool |
| ------------- | :-----------: | ---: |
| col 3 is      | right-aligned | 1600 |
| col 2 is      |   centered    |   12 |
| zebra stripes |   are neat    |    1 |

| Markdown | Less      | Pretty     |
| -------- | --------- | ---------- |
| _Still_  | `renders` | **nicely** |
| 1        | 2         | 3          |

## Syntax highlight

```ts title="astro.config.mjs" showLineNumbers {1-2,5-6}
import { defineConfig } from 'astro/config';
import vercelStatic from '@astrojs/vercel/static';

export default defineConfig({
	output: 'static',
	adapter: vercelStatic({
		webAnalytics: {
			enabled: true
		}
	})
});
```

Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur vero esse non molestias eos excepturi, inventore atque cupiditate. Sed voluptatem quas omnis culpa, et odit.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur vero esse non molestias eos excepturi, inventore atque cupiditate. Sed voluptatem quas omnis culpa, et odit.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur vero esse non molestias eos excepturi, inventore atque cupiditate. Sed voluptatem quas omnis culpa, et odit.

```python showLineNumbers
s = "Python syntax highlighting"
print s
```
