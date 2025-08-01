---
layout: ../../../layouts/post.astro
title: 'Why I Stopped Obsessing Over 100% Unit Test Coverage'
pubDate: 2025-04-17
description: 'How enforced coverage targets led to poor practices and how focusing on the user helped rebuild confidence.'
isPinned: false
excerpt: "Our CI pipelines required 100% coverage. Here's how it backfired and what I now focus on instead."
image:
  src: /src/pages/posts/testing/coverage-illusion.jpg
  alt: A white screen laptop and two hands typing on the laptop
tags: ['testing', 'career', 'mentoring']
# Outline:
# Hook: Your early obsession with 100% coverage
# Reality check: Bugs still leaked; tests were superficial
# Turning point: A production bug that bypassed tests
# Lesson: Coverage ≠ confidence
# New mindset: Integration-first, test what users care about
# Advice to juniors: Focus on behavioural coverage, not line counts
---

> You Can Have 100% Test Coverage and 0% Confidence

That line hit me hard the first time I heard it. It stuck with me because I had experienced exactly that.

## The Early Days: Chasing 100% Coverage Like It Was a Trophy

When I joined a fast-moving fintech scale-up, our CI pipelines were set up to **reject any code that didn't reach 100% test coverage**. At first, this felt like a positive move. It sounded like a solid quality control measure. After all, who wouldn't want to ensure everything is tested?

But very quickly, I realised that the reality was very different from the intention.

We were using Enzyme to test our React components. The approach emphasised shallow rendering, isolating components from their children. Most of our tests weren't about how users interacted with the app. They were about whether the right props were passed or if certain elements showed up. And yes, there were a lot of snapshot tests.

It got to the point where we had a running joke: “Just snapshot it and it's covered.”

Here's an example of a typical test:

```ts showLineNumbers
import Form from '../components/Form';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Form />);
});

describe('<Form /> rendering', () => {
  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
```

Technically, this counted as coverage. But practically, it didn't add any value.

## False Sense of Security: Bugs Still Made It to Production

Despite perfect-looking coverage reports, bugs were still slipping through. And not the kind you easily ignore.

Some were subtle, like a checkbox not updating backend values after a minor UX tweak. Others were more serious, such as broken form validation or full user flows silently failing.

The tests didn't catch these issues because they weren't written to. They didn't reflect how real users interacted with the application.

Instead of testing behaviour, we were verifying that code existed. And because 100% coverage was enforced, we didn't have much of a choice. We were focused on satisfying the metric, not improving the product.

## The Turning Point: Choosing Confidence Over Coverage

Eventually, I reached a breaking point. Something had to change.

I recommended we switch to [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) to all frontend teams. The tool encourages you to write tests the way users actually experience your app. That means interacting with accessible elements, clicking buttons, typing in inputs, and verifying what shows up on the screen.

Transitioning wasn't easy.

All frontend teams had grown comfortable with mocking everything and snapshotting their way to green pipelines. React Testing Library required a complete mindset shift. We had to think about how users behaved, not just how code was structured.

We organised workshops, rewrote documentation, created a testing guild to discuss approach, and slowly replaced our tests with more meaningful ones. Bit by bit, all teams embraced the new approach.

Now, we write tests that fail when real user experiences break, like for example if a user fills a form and submits it, does that submission changes the UI. That's how we measure success.

## It's Not Coverage That's the Problem. It's How You Use It

To be clear, test coverage can be useful in the right context.

If you're working on a utility library with pure functions and predictable behaviour, then high coverage of 100% makes sense. It's measurable and meaningful. And for newer teams, it can be a helpful guideline to aim for something tangible.

But in product-focused environments where the end user experience is the true measure of success, coverage is a poor indicator of quality.

Users don't care if a handler function is tested, if the `onHandleSubmit` is pass to a component. They care if the submit button works, no matter how many times or ways they click it, with mouse, with keyboard, with finger on a touch screen device, with voice commands, with switch/eye tracking devices, the button **MUST** work.

When teams enforce 100% coverage without context, it leads to:

- Writing tests that don't matter
- Fragile code due to overuse of snapshots
- Fear of refactoring, those tests don't bring you confidence
- Wasted effort on covering irrelevant lines

I've personally spent hours figuring out how to trigger obscure conditionals just to satisfy a coverage requirement. That time could've been better spent exploring edge cases or improving the user experience.

## The New Mindset: Testing for Real Confidence

Since making the switch, everything has improved.

We still write tests, and lots of them. We mainly focus on the integration testing, instead of purely on unit testing and we are much closer to what is described as a [testing trophy by Kent C. Dodds](https://kentcdodds.com/blog/the-testing-trophy-and-testing-classifications). But now, they're meaningful. We simulate real user flows, care about what's visible on the screen, we care about accessibility more and we mock less.

Our team discussions became more thoughtful too. We now ask questions like:

- How would a user trigger this action?
- Can we use a more accessible selector?
- What happens if the API call fails?
- Can this be navigated with a keyboard?

We gained a deeper understanding of the product. We found more bugs before release. And we became faster because we trusted our test suite again. Our product have a clear documentation that is stored in our test files, when we are not sure about a certain behaviour it's very easy just to look at the tests and see what we expect to happened.

Interestingly, our test coverage did drop a bit. We're now hovering around 97%. But no one is worried about hitting 100% any more.

Because we're testing what matters, not just what's measurable.

## Don't Fall for the 100% Trap

If you're just starting your career, I get the appeal of 100% coverage. It's a concrete goal that feels impressive during code reviews.

But here's the truth:

- A test is only useful if it catches real bugs
- Coverage is not the end goal, it's just a signal
- Snapshot tests don't explain how your app behaves
- You're building software for people, not just tools

Next time you write a test, ask yourself this:

> If this breaks, would a user notice? And would this test catch it?

If your answer is yes, then you're doing exactly what you should be.

## Final Thoughts: Focus on What Really Matters

Test coverage is a number. Confidence is what you feel when you trust your code.

Let your users, not your linters, guide your testing strategy. Build tests that reflect real-world use, and you'll ship with peace of mind, every time.

---

<details>
<summary><strong>📖 FAQ</strong></summary>

- **Is 100% test coverage ever a good idea?**  
  It can be, especially in libraries with pure functions or for early-stage teams that need structure. But it shouldn't be your only goal.

- **Is snapshot testing bad?**  
  Not always. But relying on it too much can lead to fragile tests that don't catch actual bugs.

- **How can I shift my team's testing mindset?**  
  Start small. Introduce better tools, run workshops, explain the benefits, and lead by example with tests that mimic real user behaviour.

- **Isn't enforcing coverage good for junior devs?**  
  It can offer a starting point, but should be flexible. What matters more is teaching them what and why to test.

- **How do I know if my test suite is reliable?**  
  It should break when something a user would notice breaks. Test real scenarios, simulate flows, and prioritise accessibility.

</details>

<details>
<summary><strong>🧰 Tools & Resources</strong></summary>

- [React Testing Library Docs](https://testing-library.com/docs/react-testing-library/intro/) – The user-centric testing tool
- [Kent C. Dodds – Write Tests. Not Too Many. Mostly Integration.](https://kentcdodds.com/blog/write-tests) – A classic

</details>
