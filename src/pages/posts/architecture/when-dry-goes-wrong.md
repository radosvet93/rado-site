---
layout: ../../../layouts/post.astro
title: 'When DRY Goes Wrong: The Case Against Early Abstractions'
pubDate: 2025-08-04
description: 'Why chasing DRY too early in frontend development can lead to brittle, confusing, and unmaintainable code.'
isPinned: false
excerpt: 'Premature abstractions can do more harm than good. Learn when repetition is better and how to know when to abstract safely.'
image:
  src: '/src/pages/posts/architecture/_when-dry-goes-wrong.jpg'
  alt: Illustration of old car left in the desert
tags: ['frontend', 'typescript', 'best-practices', 'principles']
---

> As developers, we're taught early on to never repeat ourselves, it's better to change code in one place, more predictable, easy to test and will lead to less bugs as we know where the code is and it's just that one place. The DRY principle is a cornerstone of good engineering, but what happens when following it too strictly leads to a codebase that's harder to maintain and understand? The instinct to abstract is strong, but sometimes, a little repetition is the smarter choice.

## DRY Principle Is Amazing When Done Properly

You've seen it a hundred times. Two components, two functions, or maybe even two sets of API calls that look almost identical. The logic is 90% the same, save for a few minor differences. Immediately, that little voice in your head whispers, "Don't Repeat Yourself! Abstract it" The urge to create a single, elegant abstraction is overwhelming, you want that clean and nice code. It feels like the right thing to do. It feels like what a "good" developer would do.

I once worked on a project where we had two different components that showed user avatars. One was for a profile page, the other for a list of recent comments. They were slightly different in size and had different fallback text. To be "efficient," we created a single `Avatar` utility component with a dozen props to handle every possible state. What started as a simple component quickly became a Frankenstein's monster of props and conditional logic. Any time a new use case came up, we'd have to add yet another prop, another `if` statement. That initial act of "saving time" ended up costing us hours of debugging, cognitive load, and headaches down the road, not even mentioning the complexity of testing, as you need to keep the old tests, so you are not bringing any regressions to the party.

## The DRY Principle vs. Reality

The **DRY (Don't Repeat Yourself)** principle is one of the first things we learn as developers. Its intention is noble: to reduce redundancy, make code easier to maintain, and prevent logical inconsistencies. In an ideal world, we'd never write the same piece of code twice.

However, the real world of software development is messy. Requirements change. Features evolve. What looks similar today might diverge tomorrow. Prematurely applying the DRY principle can lead to code that is more brittle and harder to understand than the initial repetition it was meant to solve.

## Problems With Premature Abstractions

- **Over-generalised utilities:** The abstraction you build is often more complex than needed, filled with `if/else` statements and optional parameters to handle every potential future case you can imagine. This complexity makes it hard to use, maintain and test.
- **Hidden coupling:** A single abstract utility might be used by two completely unrelated features. When you need to change the utility for one feature, you risk breaking the other in a way that's not immediately obvious.
- **Increased cognitive load:** New developers (or your future self!) have to spend time deciphering what the abstraction does and how its numerous options work, instead of simply reading the straightforward, slightly repetitive code.
- **Testing complexity:** Testing becomes a nightmare. Instead of testing two simple, distinct pieces of code, you have to write convoluted tests for a single abstraction, ensuring all its various conditional paths are covered for every consumer.

## When Repetition Is Better

It might sound a bit crazy, but sometimes, a little repetition is a sign of a healthy codebase. Two small, simple components that are 90% the same are often easier to maintain than one overly complex, "smart" component.

Consider two similar React components. They both display a user profile card, but one has an "Edit" button and the other doesn't. Instead of creating a `UserProfileCard` component with an optional `showEditButton` prop, you might be better off with two separate components: `UserProfileCard` and `EditableUserProfileCard`. Think of this as a compositional structure. At least until you've proven that the shared logic is truly stable. The initial repetition gives you space to iterate and see if a pattern truly emerges. Give the components freedom to evolve.

## Guidelines for Healthy Abstractions

So, how do you know when to use DRY?

- **Wait for the third time:** A common rule of thumb is to wait until you see the code repeated a third time. This pattern validation is key. By the time you get to the third instance, you'll have a much clearer idea of what the truly shared and stable parts of the code are.
- **Keep it simple:** Your abstraction should be simple, easy to use, and self-documenting. If it requires a complex `JSDoc` block or a long list of instructions, it's probably too complicated.
- **Favour composition over inheritance:** When building frontend components, use **composition** to build new components from existing, smaller ones. Just like lego blocks. This keeps your code flexible and avoids the tight coupling that comes with deep inheritance hierarchies.
- **Use TypeScript to enforce contracts:** TypeScript can be your best friend here. If you have two different components that consume similar data, you can create a shared `type` or `interface` to ensure they both adhere to the same contract without needing a shared, overly-generalised component.

## Case Study: A Simple Example

Let's look at a simple example. The buttons that shared almost the same class names. One is the primary button and the other is the secondary

```tsx showLineNumbers
function PrimaryButton() {
	return <button className="rounded bg-blue-500 px-4 py-2 text-white">Click me</button>;
}

function SecondaryButton() {
	return <button className="rounded bg-gray-500 px-4 py-2 text-white">Click me</button>;
}
```

Merging them too early leads to:

```tsx showLineNumbers
function Button({ variant }: { variant: 'primary' | 'secondary' }) {
	return (
		<button
			className={`rounded px-4 py-2 text-white ${
				variant === 'primary' ? 'bg-blue-500' : 'bg-gray-500'
			}`}
		>
			Click me
		</button>
	);
}
```

Now adding a tertiary variant or adjusting spacing requires refactoring the abstraction. The _"clever"_ solution often becomes more brittle than the original repetition. You are now locked into living with that abstraction and the mess begins from here. Adding more things will make it harder to maintain and difficult to notice any regression down the line. Again, let the components evolve freely, each has it's own independence.

### Applying the Open-Closed Principle (OCP)

The Open-Closed Principle (OCP) states that software entities (like components) should be open for extension, but closed for modification. In the example of the `Button` component, the initial abstraction violates this principle. When a new variant (like a "tertiary" button) is needed, you're forced to modify the existing `Button` component by adding a new if statement or a new variant to the type definition. This can introduce bugs to existing implementations and makes the component harder to test.

A design that adheres to OCP would allow you to create a new button variant without touching the original `Button` component. This leads to a more stable and predictable codebase.

### Introducing a BaseButton Component

Instead of creating a single, complex component with conditional logic for all its variants, a better approach is to create a simple `BaseButton` component that holds the proven, shared styles. **The key here is to abstract only what's truly reusable and stable.**

Here's how that would look:

```tsx showLineNumbers
// BaseButton.tsx
// This component is closed for modification and only contains shared, stable styles.
function BaseButton({ className, ...props }: BaseButtonProps) {
	return <button className={`rounded px-4 py-2 text-white ${className}`} {...props} />;
}

export default BaseButton;
```

With the `BaseButton`, you can now compose your primary and secondary buttons by extending its styling, without ever modifying the base component.

```tsx showLineNumbers
// PrimaryButton.tsx
// This component is a clear extension, not a modification of the base.
import BaseButton from './BaseButton';

function PrimaryButton() {
	return <BaseButton className="bg-blue-500">Click me</BaseButton>;
}
```

```tsx showLineNumbers
// SecondaryButton.tsx
// This component is a clear extension, not a modification of the base.
import BaseButton from './BaseButton';

function SecondaryButton() {
	return <BaseButton className="bg-gray-500">Click me</BaseButton>;
}
```

This approach is much more robust. When you need a new `TertiaryButton`, you simply create a new component that extends the `BaseButton`. You don't have to touch the `BaseButton` component or risk breaking the primary and secondary variants. This design is also easier to reason about and test, as each component has a single, clear responsibility. It's a prime example of using **composition over inheritance** to achieve flexibility and maintainability.

## Recap / TL;DR

- **DRY is a guideline, not a law.** Don't let it pressure you into creating brittle code.
- **Prioritise readability and simplicity.** A codebase that's easy to read and reason about is a healthy codebase.
- **Wait for patterns to emerge naturally.** The code will tell you when it's ready to be abstracted.

## Final Thoughts

Abstraction is powerful, but only when used deliberately. Encourage discussion in your team before merging similar code. A few minutes of discussion can save you from a major refactoring headache down the road. Let patterns emerge naturally, and rely on experience to identify when a DRY abstraction is genuinely valuable. Focus on readability, maintainability, and testability - your future self (and your team) will thank you.
