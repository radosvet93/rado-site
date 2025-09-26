---
layout: ../../../layouts/post.astro
title: 'How To Actually Test Your Frontend Code'
pubDate: 2025-04-19
description: "Writing tests that matter is hard. Here's how shifting my mindset from code coverage to user behaviour changed the way I test frontend applications."
isPinned: false
excerpt: 'Writing tests on the frontend that matter is hard. What exactly to test can feel a bit mysterious and can lead to bad practices of either test the wrong things or testing less critical stuff on the page'
image:
  src: /src/pages/posts/testing/_sticky-notes.jpg
  alt: A messy table full with sticky notes and pens
tags: ['testing', 'frontend', 'career', 'mindset', 'code-quality']
relatedPosts:
  - /posts/testing/testing-strategies-for-modern-react-apps
  - /posts/testing/why-stopped-obsessing-over-100-percent-unit-test-coverage
  - /posts/security/frontend-security-practical-guide
---

## Why Are Tests So Hard?

When I started writing frontend tests, I often found myself thinking:

> What should I even test here?

My early tests were testing the wrong things:

- Testing for some copy text that is not really important for the flow
- Not testing if a critical element existed on the page
- Not testing critical actions on the page

And like many engineers, I once equated high coverage with high quality.

Spoiler: I was wrong.

## How To Actually Test Frontend Code TL;DR

- Test from the user's perspective, not the implementation's
- Think about how your app could break, not how your code works
- Mock as little as possible to keep tests meaningful and more real
- Treat your tests as living documentation, explanation of how the code should work

## A Pull Request Review That Changed Everything

This shift really clicked for me during a pull request review.

A teammate had written several tests, but most of them focused on superficial things, like checking the copy of instructional text we didn't really care about. What they missed was much more important: the behaviour of the submit button during form submission.

In the actual feature, once the user submits the form, the button should become disabled and show a loading spinner, this is a button functionally we have backed-in into our design system. This gives the user feedback that something is happening, preventing uncertainty, repeated clicks and users submitting more than once.

But that logic wasn't tested. The backend wasn't protected against double submission, the endpoint worked intentionally like this and it was the responsibility of the frontend to submit only once. A user clicking the button twice could trigger two POST requests, one succeeding and one failing, which could result in duplicated data. A nasty and avoidable scenario.

I suggested we rewrite the tests from the user's point of view. Instead of checking static copy, we should:

- Assert that the button becomes disabled after clicking
- Check that a loading spinner is visible inside the button
- Ensure the click handler only fires once, even if the user tries clicking or hitting enter key rapidly

That one conversation changed how I think about testing. It is not about asserting DOM text or ticking a coverage box. It is about safeguarding real-world behaviours that affect user experience and backend integrity.

## Principle 1: Test From the User's Perspective

Instead of testing the function that sets `isFormValid`, test the actual form submission as a user would:

```tsx
render(<MyForm />);

await user.type(screen.getByLabelText('Email'), 'test@example.com');
await user.click(screen.getByRole('button', { name: 'Submit' }));

expect(await screen.findByText('Success!')).toBeVisible();
```

This confirms:

- The right fields are rendered
- The submit button behaves as expected
- The app responds correctly to input and async logic

Avoid testing implementation details like state updates or individual handlers. If a user cannot observe it, it probably should not be in your test. Test what a user can see or do on the page.

## Principle 2: Ask Yourself: "How Could This Break?"

Good testing comes from threat modelling, not from tools or frameworks.

Before writing a test, I now ask:

- What are the failure points?
- What edge cases or inputs could cause issues?
- What happens if a network request fails?
- What would confuse or block a user?

This leads to more relevant tests, that brings you more confidence in your code.

Example: If you have a component that loads data on mount, test these scenarios:

- There is a loading state
- Data loads successfully
- Data fails to load (for example, network error)
- Loading takes too long and the spinner never disappears

## Principle 3: Mock as Little as Possible

Mocks are seductive. They make tests predictable and fast. But they often strip away the very behaviours you need to validate. Mocks are also time consuming to write and maintain.

Over-mocking leads to tests that pass regardless of real behaviour. It's the opposite of what you really want to test.

Instead, use:

- A real DOM tree with `@testing-library/react`
- A mock server (for example, `msw`) to simulate real HTTP responses
- Real component composition where possible

This helps you catch integration issues and edge cases earlier.

## Principle 4: Tests Are Documentation

Well-written tests do not just prevent regressions, they tell future developers (including you) how the app is meant to behave.

Instead of writing a wiki page or having a storybooks on how a complex component behaves under different conditions and frontend states.

The test reads like a spec. It communicates the business logic. And it does not rely on internal component structure.

## Important Points To Check When Testing

If you are not sure **what** to test:

- Walk through the feature as a user would
- Test visible behaviours and expected flows
- Ask "what could go wrong?"

If you are not sure **how** to test:

- Use `@testing-library/react`, it is good for accessibility and enhances best practices
- Avoid testing private functions, internal state, or props. Those are implementation details
- Use tools like `msw` to simulate the real world

If you are drowning in complexity:

- Start with a single happy path
- Add edge cases incrementally
- Chase confidence instead of coverage metrics, ask yourself are you confident with what you are testing

## Final Thoughts

Writing good frontend tests is not about satisfying a coverage metric.

It is about confidence:

- Confidence that your app works in production without silly bugs
- Confidence that you can refactor without fear
- Confidence that others (and future you) can understand your feature through your tests

So test like your users matter, because they do.
