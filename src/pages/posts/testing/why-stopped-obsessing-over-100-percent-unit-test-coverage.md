---
layout: ../../../layouts/post.astro
title: 'Why I Stopped Obsessing Over 100% Unit Test Coverage'
pubDate: 2025-07-07
description: "How enforced coverage targets led to poor practices—and how focusing on the user helped rebuild confidence."
author: 'Radosvet Petrov'
isPinned: false
excerpt: "Our CI required 100% coverage. Here's how it backfired—and what I now focus on instead."
image:
  src: /src/pages/posts/testing/coverage-illusion.jpg
  alt: Hands typing on a laptop
tags: ['testing', 'career', 'mentoring']
# Outline:
# Hook: Your early obsession with 100% coverage
# Reality check: Bugs still leaked; tests were superficial
# Turning point: A production bug that bypassed tests
# Lesson: Coverage ≠ confidence
# New mindset: Integration-first, test what users care about
# Advice to juniors: Focus on behavioural coverage, not line counts
---

> You can have 100% coverage and 0% confidence.

That line hit me hard the first time I heard it — because I'd lived it.

## The Early Days: 100% or Bust

When I joined a fintech scale-up, our CI pipelines were configured to **fail anything below 100% test coverage**. At the time, that felt like a good thing, who doesn't want a clear quality bar that would force us to test properly.

But what it actually forced was something else entirely.

We were using **Enzyme** for all our React testing. It encouraged shallow rendering, isolating components from their children. Most of our tests checked if props were passed down correctly, whether certain elements rendered, or worse: were just **snapshot tests**.

You'd write a test that shallow renders a component, takes a snapshot, and move on. We even started joking internally: _Just snapshot it and it's covered._ It became a running gag unfortunately.

We weren't testing how users interacted with our product. We were testing if code existed and the right props are passed down.

## The Cracks Appear: Bugs in Broad Daylight

Despite our flawless coverage reports, we kept seeing bugs leak into production.

Some of them were subtle like for example a checkbox not updating the values on the backend for a minor UX improvement. Others were more serious — broken form validation, full flows failing silently.

In every case, the culprit was the same: **our tests didn't fail, because they didn't care.**

They didn't simulate user journeys. They didn't test component interaction. They were just... there.  
We were **testing implementation details**, not behaviour.

And because of the enforced 100% coverage, we had no real choice. We couldn't merge unless everything was covered. And covered meant whatever the tool said it was.

## The Turning Point: Leading a Mindset Shift

At some point, I'd had enough.

I proposed switching to [React Testing Library](https://testing-library.com/) — which focuses on testing components the way users interact with them: querying by accessible labels, simulating real clicks, typing in inputs, verifying DOM behaviour.

The transition wasn't easy.

The team was used to mocking everything, testing in isolation, and snapshotting their way to green pipelines. Switching to RTL meant rewriting mental models: thinking about **how** users use the app, not just **what** the code does.

We talked about how testing should reflect **user behaviour**. We ran workshops, wrote extensive documentation, participated in the newly formed testing guild, rewrote all the tests, rewired habits. And slowly, the change took hold.

Now, instead of writing tests to appease the coverage gods, we write tests that fail when **users would notice**.

## Coverage Isn't the Villain — Blind Enforcement Is

Let me be fair: test coverage **isn't useless**.

For example, if you're writing a utility-heavy library like Lodash, high (even 100%) coverage **can** be valuable. You're dealing with pure functions, clear inputs and outputs, and no UI or side effects. It's measurable and meaningful.

It also has it's place where the teams are a bit more junior and don't specifically know what to test, at least you are aiming at something even not the best thing to aim for.

But for **product-focused development**, where we measure our code confidence not in the test coverage reports, but what the users see and interact with, it's a poor proxy for confidence.

Users don't care if `onChangeHandler.ts` is covered, or if we passed down the correct prop that has something to do with analytics and it's not part of the UI. They care whether the submit button works — every time, in every scenario, no more rage clicks.

Blindly enforcing 100% leads to:

- **Testing irrelevant things**
- **Writing fragile, low-value tests**
- **Avoiding refactors for fear of breaking snapshots**
- **Wasting time figuring out how to hit a metric, not how to improve a product**

We lost hours trying to find clever hacks to make conditional line covered. That time would've been far better spent thinking about the feature's edge cases or real-world usage.

## The Shift: From Coverage to Confidence

Since shifting our mindset, everything changed.

We start with the testing in mind. We still write tests — lots of them. But they're meaningful now. We simulate flows. We assert against visible outcomes. We mock less and care more.

The conversations improved too.
We started asking:

- How would the user trigger this?
- Do we have a more accessible selector we can use?
- Is this action possible?
- What happens when the API fails?
- Can someone keyboard-navigate this screen?

We understood our product better.  
We caught more bugs before release.  
We even got faster at delivering — because we trusted our tests again.

And yes, our test coverage dropped — slightly. We're now hovering around **97%**.  
But no one is chasing 100% any more. We don't need to.

Because we're testing the **right things**, not **all the things**.

## Final Advice to Junior Engineers

If you're starting out and thinking 100% coverage is the gold standard — I get it. It's concrete. It's visible. It looks impressive in a PR review.

But trust me on this:

- **Tests are only as valuable as the bugs they catch.**
- **Coverage is a lagging metric — not a goal.**
- **You're writing software for people, not linters.**
- **Your tests are your documentation, writing snapshot tests doesn't inform you about anything**

So next time you write a test, ask yourself:  
> If this breaks, will a user be affected? And will this test let us know?

If the answer is yes — you're doing it right.

---

<details>
<summary><strong>📖 FAQ</strong></summary>

- **Q: Does this mean coverage is useless?**  
  A: Not at all — just that it needs context. Use it as a signal, not a goal.

- **Q: Should I stop using Enzyme or snapshot testing?**  
  A: Yes, in most cases. Prefer tools that prioritise user interaction and real behaviour.

</details>

<details>
<summary><strong>🧰 Tools & Resources</strong></summary>

- [React Testing Library Docs](https://testing-library.com/docs/react-testing-library/intro/) – The user-centric testing tool
- [Kent C. Dodds – Write Tests. Not Too Many. Mostly Integration.](https://kentcdodds.com/blog/write-tests) – A classic

</details>
