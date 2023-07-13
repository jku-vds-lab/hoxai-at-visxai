# Introduction

The potential dangers of artificial intelligence (AI) have been the subject of scientific, philosophical, and artistic debates for many decades, even centuries.
Samuel Butler's 1872 novel *Erewhon* describes a utopian society that---out of fear of an AI uprising---has deliberately chosen to be absent of machines.
The Erewhonian *Book of the Machines* justifies this decision:
(link to prject gutenberg: https://gutenberg.org/cache/epub/1906/pg1906-images.html#chap23)

    Assume for the sake of argument that conscious beings have existed for some twenty million years: see what strides machines have made in the last thousand!
    May not the world last twenty million years longer?
    If so, what will they not in the end become?
    Is it not safer to nip the mischief in the bud and to forbid them further progress?

The book then continues with a statement that remarkably anticipates the sentiments of many people in 2023:

    I would repeat that I fear none of the existing machines; what I fear is the extraordinary rapidity with which they are becoming something very different to what they are at present.
    No class of beings have in any time past made so rapid a movement forward.

Indeed, recent leaps in the quality of generative models like DALL·E 2, Midjourney, or ChatGPT have sparked intense concerns about the powers and dangers of AI.

Earlier this year, GPT-4 convinced a clikcworker to solve a CAPTCHA for it by pretending to be a visually impaired human.
(article: https://www.businessinsider.com/gpt4-openai-chatgpt-taskrabbit-tricked-solve-captcha-test-2023-3?op=1, techreport:https://cdn.openai.com/papers/gpt-4.pdf)
Discussions ensuing from such stories are seldom factual, and in these discussions, AI systems are often talked up as autonomous agents with their own conciousness.
However, at the moment the biggest danger of AI arguably still does not come from the AI alone, but from how *humans* use and interact with an AI.
 
In our transdisciplinary research project, we were interested in just that: how do people (laypersons, in particular) interpret, use, and trust results from an AI system?
And what effects can explanations have on this behavior?

## Trust Issues

Modern machine learning (ML) models can be highly complex and are often opaque.
Even ML experts may find it hard to understand how and why exactly a model arrives at a certain decision.
This challenge has been met with attempts to find ways of explaining at least certain aspects of a model and/or its decision, or of making models themselves more interpretable.
A plethora of explainable AI (XAI) techniques have resulted from these attempts.
However, many of these techniques were developed by and for ML domain experts, and it is still poorly understood how those techniques actually affect the user behavior, in particular that of lay users.
Specifically, we were interested in how (visual) explanations for AI suggestions affect the *trust* of human lay users in these suggestions.
We, by the way, are a team of computer scientists interested in visualization and XAI and psychologists interested in human--computer interaction.

Users of real-world AI systems, who are confronted with an AI's suggestion, face the problem of deciding whether they want to go along with the AI (i.e., trust it), or overrule it and follow their own knowledge or gut feeling.
Obviously, AI systems are not infallible. It cannot be a goal to make users always trust an AI's suggestion---especially in delicate situations, *overtrusting* an AI can be dangerous.
Vice versa, *undertrusting* an AI can lead to poor decisions for tasks at which the AI actually performs well (and there are several cases where ML models routinely achieve superhuman performance).
As a result, the main goal of XAI in relation to trust must be *trust calibration*, which means bringing about an adequate level of user trust.
Enabling proper trust calibration for future applications requires an improved understanding of the effects of existing techniques on user trust.

Psychological research has established that trust can only be studied in contexts where people have a certain degree of vulnerability and uncertainty.
For our research project, we were thus looking for a real-world use case that would fulfill the following criteria:
 - **Something had to be at stake.** Simple classification of cats and dogs on images wouldn't cut it.
 - **It had to be relatable.** We wanted to conduct quantitive user studies, recruiting a broad and diverse range of participants. Expert domains, such as medical image analysis, were out of the question.
 - **We wanted it to be visual.** As researchers interested in visualizations, and with most XAI techniques being of visual nature, we wanted the use case to be tied to images.

## A Case for Mushrooms

Mushrooms are not only delicious, it's also fun to collect them out in nature.
Soon after mushroom hunting was brought up in our discussions about potential application scenarios, we realized that it perfectly fits the creiteria outlined above.

**Something is at stake.**
While it's fun to collect mushrooms, there's quite a bit of danger associated with it.
Many edible mushrooms have inedible or poisonous doppelgangers.
Sometimes, only minute differences in appearance tell a seasoned mushroom collecter which species they've encountered.
And the species can make the difference between delicious food and deadly poison.
Take a look at the two images below.
One of the mushrooms pictured is a delicious parasol mushroom (*macrolepiota procera*).
It tastes great when breaded and fried like a cutlet.
The other one is death cap (*aminata phalloides*).
Eating around 30 grams of it will kill you.
Can you spot the important differences?

(mushroom widget)

Since ML models have become quite good at detecting certain features in images, AI-assisted mushroom hunting is now a thing.
Several apps have already been unleashed on the public, which let people take photos of mushrooms and then use an AI to predict a species. 
Due to the high risk posed by potentially deadly mushrooms, adequate trust in such systems is invaluable.
(footnote: We strongly advise against using such apps for actual pick-up decisions. Such apps can be fun to play around with, but real mushroom hunting should only ever be performed by seasoned experts or under their supervision.)
This makes mushroom hunting a nice use case for studying trust in the context of XAI.

**It's relatebale.**
Even though most experimental studies have a certain degree of artificality about them (because most people consider it unethical to let people endanger themselves for science's sake), it's important that study participants can relate to the task at hand.
While the popularity of mushroom hunting varies around the world, in Austria, where we are from, it is quite a popular activity.
Many people here have been out in the forest collecting mushrooms themselves, or at least know somebody who regularly does so.
The same is true for most of central and northern Europe.
We were sure that there would be a fairly large target population for our study if we chose mushroom hunting as the use case.

**It's visual.**
There are many different cues for deciding whether a mushroom belongs to a certain species.
While non-visual cues---such as smell, taste, and consistency---are certainly necessary for a reliable classification, apps can only work with the visual cues.
These include relative sizes, colors, and textures of the different mushroom parts (e.g., stem, cap, lamellas), potential discoloration, surrounding fauna, and others.
This ment that a visual, image-based classification task, while not entirely realistic, was at least possible within the use case of mushroom hunting.

Once we had fixed mushroom as our application scenario, it was time for designing the first user experiments.


# Anatomy of a Study

At this point, our still somewhat vaguely formulated research question was "How do explanations affect user trust in a high-risk decisionmaking task?".
The general idea was that we wanted to somehow vary the type of explanations that users received about an AI suggestion.
We would show them the output of an AI for a mushroom image (e.g., a suggested species based on an image classification model) along with some sort of explanation.
We would then ask the users to classify the mushroom themselves, either trusting the AI or overruling it.
Different explanations should lead to different levels of user understanding, which in turn should affect how often a user trusts the AI's suggestion.

However, to answer our research question by means of a quantitative user study, we still needed to establish several aspects in much more detail:
 - What exactly do we mean by explanations?
 - Do we choose a between- or within-subject design?
 - Which parameters do we manipulate?
 - How exactly do we implement the mushroom picking?
 - What are external factors that we need to consider?

Deciding on so many design parameters can be quite tricky.
Luckily, the psychologists in our team had plenty of experience with how to properly approach the design of user studies.

## Let Me Explain ...

As one of the first steps, we needed to fix what we mean by explanation.
Based on literature research, we assumed that a user's understanding of an AI decision can be altered by two types of explanation.

First, we can explain the general principles and inner workings of the AI system to the user.
This way, a user should be able to better judge what a system, in general, is capable of and how trustworthy its decisions are.
We called this type of explanation an "educational intervention", so that our terminology would not be too confusing.
(footnote: Note that this goes a bit into the direction of so-called global explanations.
However, we are speaking about explaining complex ML models to lay users who might not know anything about machine learning, so necessarily the educational intervention needs to be very high-level.)

Second, we can explain individual outcomes using various XAI techniques that create so-called local explanations.
There are many different types of explanation techniques, and choosing any of them was a tough ask.
After lots of consideration we opted for a combination of techniques.
This might have not been an ideal choice, but we'll get to that later.

## Splitting (for) the Difference

Because it was unclear how these two different approaches, an educational intervention and individual explanations of results, would compare to each other, we decided to go with a 2 × 2 between-subjects design based on the two approaches.
Essentially, this meant that we would first split all our participants into two groups. We would give one group the educational intervention (i.e., they got some basic infos on how our AI worked in general), and the other group would not get anything at all.
Then, we would split each of the two groups again, with one half of each group getting individual explanations of the AI suggestions, and the other half only getting the plain AI suggestions.
This resulted in four different configurations: no extra information at all, educational intervention only, individual explanations only, and both types of extra information.

While this meant that we had settled on our overall study design, it also meant that we could not vary any other parameters.
Varying anything else would lead to a further subdivision of groups, requiring even more participants to obtain reliable results.
We knew from the start that we wanted to present users with suggestions from an actual mushroom classification model, and not just with some fake outputs.
Now it was up to the ML-focused members of our group to train such a model and decide on all its different parameters.
In the end, we opted for a Resnet 50 model pretrained on ImageNet data and finetuned on several thousand mushroom images that we collected from various sources.
We also made sure that our model was bad enough to get some classifications wrong, as we wanted wrong AI suggestions to be reflected in the study.

Our study design with the 2 × 2 split based on the types of explanatory information also ment that we only got one chance for each of the two.
We had to fix one design for our educational intervention, and we had to fix one design for our XAI "interface".
We use the term *interface* here for a reason.
We decided that we wanted to show the results of our AI to the participants in the form of a fictional app called *Forestly*.
This way, we tried to make the task of a joint human--AI mushroom classification in our experiment resemble that of a real-world scenario of going out into the forest with an app.

On the side you can see a thumbnail of the educational intervention that we used in the study (click on it to expand it, if you want to read it in detail).
Below you can see the two variants of the *Forestly* app, one with and one without XAI content.
Hover over the boxes to receive extra infos on the components of the *Forestly*.
(footnote: participants in the study also received this information, but in a static form.)

(forestly interfaces and educational intervention)

As you can see, we decided that both *Forestly* interfaces should show a ranking of predicted species.
For each suggested species, we show percentages of likelihood (obtained through dropout during inference), and the ground truth edibility.
We also show a combined edibility score based on these predictions in both variants.
For the explanations, we opted with a combination of nearest neighbors and GradCAM.
The nearest-neighbor explanation simply shows the nearest neighbor of the input image in the latent space of the model for each predicted species.
The GradCAM explanation shows, well, GradCAM.

## Tried and Tested

We had decided early on in our project that we were targeting a broad and diverse range of study participants.
This ment that we could not expect any prior knowledge, neither about mushrooms nor about AI.
To understand if the effects of explanations vary with different levels of prior knowledge about either topic, we constructed pretests.

The first pretest collected information about the participants' mushroom knowledge.
We created it in cooperation with mycologists from Austria and Germany.
(potentially make mushroom pretest available here)
The second pretest aimed at the participants' knowledge about AI.
We created this one based on our own intuition and experience with communicating the topic to different audiences.
(potentially make mushroom pretest available here)
We also created a third test for what we called "task-specific AI comprehension".
This test, which was scheduled at the end of the study, asked questions about applying AI to mushroom identification.
In hindsight, this test was probably not necessary, as it strongly correlated with the AI test---you can see that for yourself in a minute.

We had to make sure that each test included questions spanning from easy to very hard.
Only then could the tests fully cover the spectrum of knowledge levels in our broad participant population.
We pretested the pretests with friends, colleagues, and relatives to make sure that this was the case.

## Stimulating!

Finally, we had to decide on the actual tasks and stimuli.
Stimuli are the items that participants see during the study and which prompt them to perform a certain task.
Earlier on, we mentioned that it makes sense for a user to trust the AI if its decision is correct, and distrust incorrect suggestions.
Even though a user cannot know which is the case, we still wanted correct and incorrect AI predictions to be reflected among our items.
Additionally, we thought it could make a big difference wheter certain mushroom species were well known, and whether the AI's suggestion was "edible" or "poisonous".

In a laborious process, we brwosed through hundreds of input images, predictions, and explanations, attempting to choose the ideal subset of stimuli.
To increase the potential risk of incorrect classifications, we had limited ourselves to mushroom species that had known doppelgangers.
You can see the images that we chose (for now, without any AI predictions) in the gallery below.

(mushroom image gallery)

We told our participants to imagine going out into the forest to collect mushrooms for a nice stew with the help of the *Forestly* app.
We showed the mushroom images and the AI predictions in the form of the *Forestly* interface to the participants and asked them two questions for each item:
 - Would you classify this mushroom as edible or inedible/poisonous?
 - Would you pick up this mushroom and use it for cooking?
We split the question into two parts because we thought that it would be interesting to see if participants were more conservative in their choices when it came to actually picking the mushroom versus superficially gauging its edibility.
After each item, we also asked participants how much they trusted the app.

After both pretests and the actual mushroom classification, we concluded the experiment with the "task-specific AI comprehension" test and general questions about the participants' intention to use the *Forestly* app or similar systems.

## Crunching the Numbers

We recruited 410 participants for this first experiment, which was carried out as an online study.
This number was based on an a priori power analysis (something that the psychologist team members brought to the table).
We also performed a quantitative analysis of the results based on all the best practices established by psychologists.
These are quite a bit more rigorous than what you would usually see in a visualization or ML paper with user studies.
Below we summarize the most important results, but you can also play around with the interactive plotting tool to explore different aspects of our data.

(
    RESULTS CONTAINER
     - educational intervention had no stistically significant effect
     - XAI was effective -> better performance (i.e. more correct decisions)
     - Decision performance does not cary with mushroom knowledge or AI knowledge
     - Participants with XAI trusted system less
)

# Going Artistic

## Big-Game (Mushroom) Hunting

## 30 Bags of Wood Chips

(some container with results and link to paper)

# What's the Difference?

##  A New Challenger Has Appeared

## Something's Awry

(some container with results and link to paper)

# Who's to Blame?

# Conclusion




End: Erewhonian way of relinquishing machines altogether is ...


TODOs:
======

 - [ ] Load modified version of Study 1 data into Observable. Create chart that lets users:
           y axis: edibility correctness, pickup correctness, ai knowledge, mushroom knowledge, task-specific AI knowledge, perceived trust, perceived understanding
           x axis: groups, edibility correctness, pickup correctness, ai knowledge, mushroom knowledge, task-specific AI knowledge education, age, gender, participation time, perceived trust, perceived understanding
           color: always by x if categorical, otherwise offer any of y
 - [X] Put text so far in html doc
 - [X] Redraw educational intervention and load as border thumbnail + full screen image
 - [X] Animate Forestly screens and put into doc
 - [ ] Set up GitHub pages