---
difficulty: 3
training: true
chapter: "Chapter 8 - Challenges Roundup"
tags: angular
---

# Implement more filters for a selection dropdown


# Challenge Description

In this challenge, we have a quiz application that allows the user to create quizzes on different categories of topics.
Some categories have several sub-categories that are currently displayed as follows in a single dropdown:
![before.png](https://api.certificates.dev/storage/ng-l3-roundup/before.png)

We want to divide such categories into two dropdowns. One will contain the main categories, the second one will display sub-categories:
![after.png](https://api.certificates.dev/storage/ng-l3-roundup/after.png)

## Requirements

- Figure out a way to get sub-categories from the main categories.
- Display sub-categories in a dropdown when the main category has such sub-categories.
- The sub-category dropdown should only be displayed when **Entertainment** or **Science** is selected as the main category.
- Everything else should work just like it did before.

## Other Considerations

- If you see the `data-test` attribute anywhere in the boilerplate don't remove it.

## Example of Finished Exercise

This is an example of what the result should look like after the exercise is completed:

![Example screenshot](https://api.certificates.dev/storage/ng-l3-roundup/screenshot.gif)
