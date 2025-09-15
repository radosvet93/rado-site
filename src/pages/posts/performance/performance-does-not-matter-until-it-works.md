---
layout: ../../../layouts/post.astro
title: "Performance Doesn't Matter Until It Works"
pubDate: 2025-05-20
description: 'Why performance means nothing without correctness, and why clarity is often the most valuable optimisation of all.'
isPinned: false
excerpt: 'Performance is only valuable once your code works, is correct, and is readable. Build in that order and only optimise where it matters.'
image:
  src: /src/pages/posts/performance/_performance-does-not-matter-until-it-works.jpg
  alt: 'Abstract image of yellow painting'
tags: ['performance', 'best-practices', 'frontend', 'mindset']
---

> I've seen it happen a couple of times, someone (me including) spends hours micro-optimising some front end code, only to discover later that the feature didn't even meet the business requirements or a valid edge case was missing completely.

Kent Beck captured this perfectly: "Make it work, make it right, make it fast."

Because here's the truth:

- Performance doesn't matter until the code meets business acceptance criteria.
- Correctness, edge case coverage and clarity come before cleverness.
- Optimise only where it matters.

## TL;DR

- **Work first:** Get a working solution that covers the business needs to validate your technical approach.
- **Right second:** Refactor for correctness, edge case coverage and readability.
- **Fast last:** Optimise only when performance impacts users or the business, measure it with performance tools.
- **Readable code scales:** Code is read 10x more than it's written. _Code clarity is an optimisation for humans_.

## Let's Talk About Performance, But First Correctness

If the code doesn't meet the acceptance criteria, it doesn't matter that we used the latest tech, some clever memoisation technique that we read in a blog post or the most elegant one-liner that has more chains than Starbucks franchise map.

I've also seen teams dive into optimisation far too early, like tuning an API endpoint for performance before it's even exposed to the frontend. Then, once the frontend team requests a different data shape, the backend has to call another service, and all those _"performance gains"_ are thrown away.

At this stage, speed is irrelevant. The only thing that matters is delivering a working solution that solves the problem end to end.

## Correctness and Clarity Before Cleverness

Once your code works, the next step is to make it right:

- Handle edge cases. Test brutally at the integration level - cover all those nasty little scenarios.
- Refactor for clarity and maintainability. Answer those questions: Is it readable? is it explicit enough? Does it look like a poem?

Remember, **we read code at least 10 times more than we write it.** A function that's clear and explicit will save hours of debugging and onboarding pain down the line.

Clever, cryptic code may feel satisfying in the moment, you might say to yourself that you are proud of that code, but future you, or your teammates, will pay for it later. Clarity is what keeps systems healthy and teams productive.

Early in my career, I worked with a colleague who was one of the cleverest developers I'd ever met. I was hungry to learn, and everything he did in the codebase looked like magic to me. He'd walk me through his architecture decisions and optimisations, and while I didn't fully grasp them at the time, I was impressed.

Then, a month later, he left 🥲 and I was suddenly responsible for that _"beautiful soup"_ of code. It worked - until it didn't. When I had to reproduce a tricky user state and handle a new edge case, I spent two full days just trying to untangle his premature optimisations and complex abstractions. In the end, I had to flatten large parts of the code just to understand what was going on.

That experience taught me a hard truth: when there's a big gap in seniority on a team, and there aren't enough tests or documentation, clever code quickly becomes fragile code. Without a clear flow, strong testing coverage, or well-written docs, even good intentions can turn into a maintenance nightmare.

## Optimise Only Where It Matters

Finally, and only after your code works and it has been covered well with integration tests (the code is right), it's time to look at performance.

But first, ask: **does this actually need to be faster?**

- For most customer-facing features, clarity and maintainability will deliver more value than shaving a few milliseconds. That value shows in how quickly developers can read and understand the code, onboard, and make safe assumptions without even running it.
- For low-level, performance-critical systems like bundlers, compilers, or trading platforms - efficiency matters, in that case you will sacrifice readability there is no way around this. When that happens, we are not completely lost, we still have and should use comments and documentation.

Optimise if either the user or the business will have value of that optimisation.

## Recap

- Performance doesn't matter until it works - focus on solving the right problem first.
- Correctness and clarity before cleverness - readable, maintainable code scales better than clever hacks.
- Optimise only where it matters - performance tuning should be intentional, not premature.

Readable code should always come first. Ask yourself simple questions: is that variable name clear enough? Does that block of code make sense on its own? Have some consideration for the developers who will maintain this after you - what feels clever today can easily become confusing down the line. And in most cases, a micro-optimisation that doesn't improve the user experience or deliver measurable business value simply isn't worth the trade-off.

## Final Thoughts

Software craftsmanship isn't about building perfect code on the first try. It's about building in the right order:

1. Get it working.
2. Make it correct and clear.
3. Optimise where it matters.

Everything else is noise.

Performance is powerful - but correctness and clarity are what make your software, and your team, sustainable in the long run.
