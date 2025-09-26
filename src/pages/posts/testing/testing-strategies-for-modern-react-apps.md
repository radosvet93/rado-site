---
layout: ../../../layouts/post.astro
title: 'Testing Strategies for Modern React Apps: Unit, Integration, and Visual Regression'
pubDate: 2025-04-22
description: 'A beginner-friendly guide to testing React apps using React Testing Library, Playwright, focusing on maintainable and reliable tests.'
tags: ['react', 'testing', 'visual-regression', 'frontend', 'code-quality']
excerpt: "Testing React apps doesn't have to be scary. Learn the basics of unit, integration, and visual regression testing with popular tools."
image:
  src: '/src/pages/posts/testing/_testing-strategies-react.jpg'
  alt: Abstract image of an orange painting, describing the modern element in the strategies for modern react apps
relatedPosts:
  - /posts/testing/how-to-actually-test-your-frontend-code
  - /posts/testing/why-stopped-obsessing-over-100-percent-unit-test-coverage
  - /posts/architecture/react-hooks-practical-guide
---

## The fastest way to waste testing effort? Spending most of your time in the wrong place.

I've seen teams heavily invest in one type of test while leaving the biggest sources of bugs untouched.

## Testing the Wrong Layer

In frontend development, not all bugs live in the same layer.  
Some hide deep in the logical layer - functions, date manipulation, and pure calculations. Others appear only when different parts of the system come together. And then there are the purely visual issues that break the experience without breaking the logic.

**The problem?**  
Many teams default to writing lots of unit tests because they're quick, easy to run, feel productive and have the dopamine hit when everything is green. But while these tests are perfect for logic-heavy modules, they often miss the problems that users actually encounter.

## Where Frontend Bugs Actually Appear

After spiking testing strategies across multiple projects, one pattern stood out to me:

- Most logic bugs could be caught with well-targeted unit tests, key thing is addressing the edge cases and unhappy paths.
- Most user-facing bugs came from integration issues - components not working together, API changes breaking flows, routing misbehaving, mocking the wrong thing, or just mocking a lot.
- A significant chunk were visual regressions - layout shifts, disappearing elements (white background with white text often times the problem was incorrect CSS specificity), theme inconsistencies.

That insight changed everything.  
I realised that testing effort should follow bug likelihood, not just habit.

## Real-World Bug Examples That Shaped Our Testing Strategy

- **Unit Test Bug:** A missing edge case in a function responsible for allocating assets to the correct tax wrapper. Isolated unit tests caught this quickly before any UI impact.
- **Integration Test Bug:** An incorrect mock caused assumptions about the API response, and we were testing the UI against that mock. End-to-end integration tests caught the issue.
- **Visual Regression Bug:** The most common cause was mismatched design system versions across apps. This led to a CSS specificity issue where reset styles were applied after the intended button styles, resulting in a primary button rendering with reset styles instead.

## The Balance That Works

Here's the strategy that's given us both efficiency and confidence:

- **Integration tests** - Focus here. They validate that features work end-to-end: components talk to each other, APIs return expected data, user flows succeed, and accessibility paths function. This is where the majority of frontend bugs are caught. And it strikes the perfect balance between developers time and catching as many bugs as possible.
- **Unit tests** - Still important, but targeted. We use them for complex logic, calculation-heavy functions and date manipulation functions.
- **Visual regression** - A smaller share because they can be slower and more resource-intensive. We use them specifically for all design system UI elements, brand and theme consistency.

**The result?**  
Most bugs are caught before they hit production, and we don't waste days writing tests that don't match where problems actually occur.

## Behaviour and Visuals First

We stopped thinking of tests as 'covering files' and started thinking about them as protecting behaviours, now we ask ourself what actions can break that test and trying to cover as much as possible in the integration level. For the visuals, we defer it to the design system visual regression snapshots.

By testing the way users experience the application - and still covering our logic-heavy utilities - we've built a safety net that's both lean and trustworthy.

## Know the Purpose, Choose the Tool

- **Unit tests** are best for the logical layer. They're cheap, fast, and excellent for catching pure calculation or state management bugs.
- **Integration tests** give the most confidence. They prove the system works as a whole and are the best time investment for preventing production issues.
- **Visual regression** catches the things no assertion can easily describe - layout, style, colour, spacing. Use them on critical UI, brand and theme consistency and design systems, not everywhere.

Testing is not about writing the most tests. It's about balance it's about writing the right type of tests in the right place.

<details>  
<summary><strong>📖 FAQ</strong></summary>

**Shouldn't we just test everything with integration tests?**  
Not quite - you get a faster feedback loop, and it's easier to validate with isolated unit tests if a logical test works as intended. Often times the integration tests are mocked, so you don't really get the real end-to-end experience. Integration tests shine when verifying flows, form submissions and user interactions.

**Why not do more visual regression?**  
They're powerful, but slow and expensive to run. Use them where visual consistency matters most.

</details>

<details>  
<summary><strong>🧰 Tools & Resources</strong></summary>

- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) - For integration testing
- [The Testing Trophy](https://kentcdodds.com/blog/the-testing-trophy-and-testing-classifications) - Balancing test types

</details>
