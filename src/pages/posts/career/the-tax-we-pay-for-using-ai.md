---
layout: ../../../layouts/post.astro
title: 'The AI Tax: What Using LLMs Every Day Actually Costs Me'
pubDate: 2026-09-23
description: 'An honest account of the hidden costs of daily LLM use at work: losing ownership of the code, drowning in decisions instead of coding, and losing the feeling of achievement. Plus the three habits I use to pay less of that tax, checked against the research.'
isPinned: false
excerpt: "AI makes me faster. It also quietly takes things from me: ownership of the code, the joy of finishing something, and the skills I spent years building. This is the tax I pay, and how I'm learning to pay less of it."
image:
  src: /src/pages/posts/career/_the-ai-tax.jpg
  alt: 'A pile of ancient Roman bronze coins covered in patina'
tags: ['career', 'mindset', 'engineering', 'best-practices', 'code-quality', 'ai', 'llm']
relatedPosts:
  - /posts/career/bad-code-is-like-bad-food
  - /posts/career/managing-time-as-senior-engineer
  - /posts/career/from-athlete-to-engineer
accreditation:
  handle: https://www.pexels.com/@magda-ehlers-pexels/
  photographer: Magda Ehlers
  photo: https://www.pexels.com/photo/29927968/
  media: Pexels
---

Most companies wants us on the newest and greatest AI tools. The reasoning is simple and not wrong: more productive teams. So we adopt, we experiment, we ship faster.

Nobody talks about the invoice.

Every tool has a price that is not on the licence. With LLMs, the price is paid in ownership, attention, and the feeling of having built something. I have been paying it for a while now, and I want to be honest about it, because I do not think the answer is to stop using AI. The answer is to know what it costs and to budget for it. And like everything in software engineering, there is a trade-off.

## TL;DR

- AI multiplies output, and a measurable part of that output is worse code and more rework.
- The job shifts from writing to deciding and verifying, which is a different kind of tired.
- The sense of achievement quietly disappears, and that is not a soft problem.
- Three habits help me: AI-free practice sessions, asking for two-sentence explanations, and deliberately re-deriving code I did not write.

## It is about the dose

Nuts are good food. Eat 300g of macadamia every day and you will still get fat.

Nothing about that makes nuts bad. It makes the amount the whole argument.

AI is the same, with one difference that matters. Eating has brakes built in. You get full, and your body stops you. AI has none. The AI dopamine to build stuff hits really hard. My brake used to be comprehension, I could only add as much code as I could hold in my head, and that limit was annoying and it was also doing a job. Agents and auto-accept removed it.

So the dose went up by an order of magnitude and the only brake left is the one I apply myself.

**That is the tax**. The rest of this post is what it costs me, and what I do about it.

I wrote about the food parallel before in [Bad Code Is Like Bad Food](/posts/career/bad-code-is-like-bad-food). This post is the follow-up I did not expect to need. And why I'm always using food for those comparisons, I think I'm just always hungry...

## Tax 1: I do not own the code anymore

I still hold the decision. That part is true. But increasingly the decision is half mine and half the model's, and I could not tell you where the line is.

We end up with a lot of work done. Not the best work, but something. And my colleagues have that same something. So the team output doubles or triples.

The uncomfortable part is what happens to that output afterwards.

**What the data says:**

- GitClear analysed 211 million lines of code and found that copy/pasted lines rose from 8.3% in 2021 to 12.3% in 2024, while [refactoring dropped from 25% of changed lines to under 10%](https://www.gitclear.com/ai_assistant_code_quality_2025_research). 2024 was the first year on record where duplicated code inside a commit exceeded moved code.
- The 2025 DORA report found AI adoption is now associated with higher throughput, and at the same time with higher delivery instability: more change failures, more rework, longer recovery.
- In the 2025 Stack Overflow survey, 84% of developers use or plan to use AI, but trust in its accuracy fell to 29%. The single biggest frustration, from 66% of respondents, is "solutions that are almost right, but not quite". The second is that debugging AI-generated code takes longer.

"Almost right, but not quite" is exactly the feeling. It is the tax. The code arrives, it looks plausible, it probably works, and the effort of proving that moved from writing to reading.

**The other side of this:**

I have to be fair. DORA's conclusion is not "AI is bad". It is that AI is an amplifier. Teams with strong automated tests, fast feedback, and mature version control get the throughput without the instability. Teams without those controls get the instability at scale. The tool is exposing what was already true about the team.

I'm learning to play a guitar and I have two at the moment, one is acoustic and the other is electric with 50W amplifier, guess which one tells me when I'm wrong, that's right, the electric with the amplifier, I can hear loudly my mistakes.

And there is a genuinely humbling study here. In early 2025, METR ran a randomised controlled trial with 16 experienced open-source developers on 246 real issues in their own repositories. The developers were **19% slower** with AI, and afterwards estimated they had been **20% faster**. They could not feel the difference.

That result did the rounds everywhere, including in my head. Then [METR ran it again](https://metr.org/blog/2026-02-24-uplift-update/), with 57 developers across 143 repositories and over 800 tasks, and the number moved:

- The returning developers from the first study came out around **18% faster** with AI
- The newly recruited ones, roughly **4% faster**, which is close enough to nothing

Both of those have error bars that cross zero, and METR are blunt that selection effects make it "only very weak evidence". They do not retract the original. They say conditions changed, the tooling got better, and developers are probably more sped up now than they were a year ago.

So the number I was going to lean on flipped sign in twelve months. Fine, that is how this is supposed to work.

But look at what survived. In round one, people were wrong about their own speed by nearly 40 percentage points in the flattering direction. In round two, METR's own note on the self-reports is that some developers claim very high speedups and those estimates are still unreliable. The measured effect moved. The gap between how fast you feel and how fast you are did not.

That is the part I keep. Not "AI makes you slower", because I cannot defend that anymore. Just this: my sense of "I was fast today" is not evidence of anything, and it was never going to be.

## Tax 2: my output becomes someone else's problem

This is the part that bothers me most, because the cost does not land on me.

When I produce three times the output and so does everyone else, something downstream absorbs it. Reviews are either longer or on full YOLO mode. Context is completely lost from our heads, it leaves now in that one session with the LLM when it had a good day. The person who picks up the ticket next year inherits code that nobody in the building actually wrote, good luck with that.

There is now a name for this. Harvard Business Review calls it "workslop": content that looks like finished work but lacks the substance to move the task forward. In a survey of 1,150 US full-time workers, 41% had received workslop in the previous month, and each incident took on average just under two hours to sort out. 42% trusted the sender less afterwards.

It is a survey, not a controlled experiment, and I would not lean on the exact numbers. But the shape matches what I see. The effort does not disappear. It relocates, usually to whoever is least able to refuse it.

Practical things I try to do about it:

- If I would not be comfortable explaining a change line by line in a review, it is not ready to open a PR.
- I say when something was heavily AI-assisted. It changes how carefully people read it, which is the point.
- I would rather open one PR I understand than three I do not.

## Tax 3: I am not coding, I am deciding

My day used to be made of writing. Now it is made of judgement calls. Accept, reject, rephrase, re-prompt, re-prompt, re-prompt, check, compare two approaches I did not come up with. By 5pm I have not built much but I feel emptied out.

A Microsoft Research and Carnegie Mellon survey of 319 knowledge workers puts numbers on the shift: people reported much less cognitive effort across knowledge, comprehension, analysis and synthesis when using AI, and described their role moving from gathering information to verifying output, from solving to integrating, from doing to monitoring. It also found that the more you trust the AI, the less critical thinking you apply.

**The other side of this:**

I nearly called this "decision fatigue", then checked. The classic ego-depletion research behind that term did not survive replication: a 23-lab preregistered study found no effect. So I will not claim my brain has a decision battery that runs flat.

What holds up much better is something older and, I think, more precise. Lisanne Bainbridge wrote "[Ironies of Automation](https://en.wikipedia.org/wiki/Ironies_of_Automation)" in 1983 about exactly this. Automate the work and you do not remove the human, you promote them into a monitoring role. Monitoring is genuinely exhausting, it provides no practice at the skill you still need, and when the system fails you are expected to take over a task that now requires more skill than before, with less recent practice than before.

Written in 1983. About industrial control rooms. It reads like it was written about my Tuesday.

## Tax 4: I cannot tell my wife what I did today

She asks how my day was. I do not know what to say.

I did not do much. I talked to a model (large language model just to clarify to avoid confusion) for a long time and something reasonably good came out of it. It is not nothing. But it is not the feeling I used to get finishing a hard project, when everyone is happy and you know exactly which part was yours.

The closest description I have is cheating in a game. Huge dopamine hit at the start. Then slowly it curdles, and you are sitting there thinking about everyone who did it properly, and whether this counts.

Here is why I do not think this is just me being sentimental. Teresa Amabile and Steven Kramer analysed over 12,000 daily diary entries from 238 people across 26 project teams. The strongest single driver of good "inner work life", their term for motivation, emotions, and perception at work, was making progress in meaningful work. Not big progress. Just the usual, small visible wins.

I'm blind for my progress now thanks to AI. The win still happens, but it is blurred across a conversation, and I cannot point at the part that was mine. Yes I started the conversation, yes I gave the context and my thinking and reasoning, but where is the win, who deserves that win?

**The other side of this:**

Some of this is nostalgia for a specific kind of craft, and I should admit that. Plenty of the work I miss was toil that nobody should be doing by hand. Senior engineers have been moving from writing code to making decisions for decades, long before LLMs, and most of us called that growth. Maybe part of what I feel is just that the transition now arrives faster than ever before.

But I do not think that fully explains it. The old version of the shift came with something in exchange: mentoring, architecture, seeing a team get better. This version mostly comes with more artefacts.

## So what do I actually do about it

Three habits. None of them require quitting anything.

### 1. Coding sessions with no AI, on problems that are new to me

In my free time I build things by hand. Not LeetCode. Real projects I am actually curious about, deliberately in areas I do not know well, with the tools turned off.

Two reasons:

- **To find out what is genuinely hard.** When AI does it for you, everything feels equally easy, so you lose the map of where the difficulty actually lives. That map is what makes you good at reviewing and estimating.
- **To keep the skill.** Every skill is either trained or lost. I used to play ice hockey. Put me in skates now, fifteen years after I last put the equipment on, and you will see exactly what I mean. I wrote about that transition in [From Athlete to Engineer](/posts/career/from-athlete-to-engineer), and the thing that transfers between the two is not talent, it is maintenance.

This is Bainbridge's irony answered directly. If my job is now to supervise, then the only way to stay qualified to supervise is to practise the thing I no longer do daily.

What works for me:

- ✅ A small project I care about, in unfamiliar territory, AI completely off
- ✅ Getting stuck and staying stuck for a while, because that is the training! My coding nightmares are back, but I love them!
- ❌ Turning AI off for work I already know how to do, which just makes me slower for no learning

### 2. "Give me two sentences"

This is the one I would want you to take from this post.

When I need to understand something complex, I ask for the two most important sentences. Nothing else.

I have always wanted short explanations. Two sentences forces the model to rank, and ranking is the part I actually want. It is the same discipline as fitting a career onto two pages of CV: the constraint is what produces the signal. If I need more, I ask for more, and now I know which thread to pull.

**The caveat I had to add after researching this post:**

Giskard's Phare benchmark found that [instructing a model to be concise measurably increases hallucination](https://www.giskard.ai/knowledge/good-answers-are-not-necessarily-factual-answers-an-analysis-of-hallucination-in-leading-llms), especially on obscure or loaded questions. Brevity leaves no room to push back on a bad premise, so the model picks a short confident wrong answer over a long correct one.

That does not kill the technique, but it does tell you where to point it:

- ✅ Use it on things you can verify: this codebase, this error, this architecture, this PR
- ✅ Use it to get oriented, then expand on the part that matters
- ✅ Follow up with "what did you leave out, and what would change this answer?"
- ❌ Do not use it for facts you cannot check, especially obscure ones
- ❌ Do not use a two-sentence answer as your final answer on anything that matters

Two sentences is a lens for finding the important thing. It is not a source of truth.

### 3. Re-derive the code I did not write

This is the hardest one, and the one I am still working out.

How do you understand a system you did not write? Reading is not the same as writing. Learning a language, the words you produce stick and the words you merely recognise do not. Psychology has had a name for this since 1978: **the generation effect**. Information you generate yourself is remembered substantially better than identical information you were handed.

The trap on the other side is the fluency illusion. Code that is easy to read feels understood. AI-generated code is unusually easy to read, which makes it unusually good at producing the feeling of understanding without the thing itself.

So I try to force generation back into the loop:

- **Explain it out loud before merging**, to a person or to an empty room. The gaps appear immediately.
- **Write the tests myself.** If I cannot name the edge cases, I do not understand the code. This also means tests stay a real check instead of a second thing the model asserted about itself.
- **Retype the tricky part.** Not copy. Type it. It is slow and it works, and it usually changes something small along the way.
- **Review it as if it came from a colleague.** Would I approve this from a junior? Then why am I approving it from a model?
- **Ask for the reasoning, not the code.** "Why this approach and what are two alternatives?" gets me back into the decision rather than the artefact.

None of this scales to everything. That is the honest limit. I pick the parts of the system I will still be responsible for in a year, and I pay the cost there.

## Final thoughts

I am not going back. The tools are too useful and I would be worse at my job without them.

But I have stopped treating output as the score. The question I ask at the end of a day is no longer "how much did I ship", it is "how much of what I shipped could I defend, from memory, in a room with no laptop".

Some days the answer is embarrassing. That is the invoice arriving.

<details>
<summary><strong>📚 Further Reading</strong></summary>

- [Updated estimates of AI uplift, Feb 2026 (METR)](https://metr.org/blog/2026-02-24-uplift-update/) - The follow-up, and an honest account of why the number moved
- [Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity (METR)](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/) - The original 19% slower result
- [Balancing AI tensions (DORA 2025)](https://dora.dev/insights/balancing-ai-tensions/) - Throughput up, stability down, AI as amplifier
- [AI Copilot Code Quality Research (GitClear)](https://www.gitclear.com/ai_assistant_code_quality_2025_research) - Duplication up, refactoring down
- [2025 Stack Overflow Developer Survey, AI section](https://survey.stackoverflow.co/2025/ai) - Adoption up, trust down, "almost right but not quite"
- [Ironies of Automation, Lisanne Bainbridge, 1983](https://en.wikipedia.org/wiki/Ironies_of_Automation) - The best thing written about AI, forty years early
- [The Impact of Generative AI on Critical Thinking (Microsoft Research and CMU)](https://www.microsoft.com/en-us/research/publication/the-impact-of-generative-ai-on-critical-thinking-self-reported-reductions-in-cognitive-effort-and-confidence-effects-from-a-survey-of-knowledge-workers/) - From problem solver to output verifier
- [The Power of Small Wins, Amabile and Kramer (HBR)](https://hbr.org/2011/05/the-power-of-small-wins) - Why losing visible progress hurts more than it should
- [AI-Generated "Workslop" Is Destroying Productivity (HBR)](https://hbr.org/2025/09/ai-generated-workslop-is-destroying-productivity) - Where your extra output actually lands
- [Phare LLM Benchmark on hallucination (Giskard)](https://www.giskard.ai/knowledge/good-answers-are-not-necessarily-factual-answers-an-analysis-of-hallucination-in-leading-llms) - Why "be concise" has a cost
- [Audio format for the workslop](https://hbr.org/podcast/2026/03/the-hidden-causes-of-ai-workslop-and-how-to-fix-them) - Very good one

</details>

If you try the two-sentence habit, tell me how it goes. And if you have found a way to keep the feeling of having built something, I would genuinely like to hear it.
