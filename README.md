# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Get some random advice, every time they click the dice button.

### Links

- [Solution](https://your-solution-url.com)
- [Site](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Mobile-first workflow
- SASS

### What I learned

I learned to make animation.

```scss
.dot-flashing {
	display: none;

	position: relative;
	width: 8px;
	height: 8px;
	margin: 10px auto;
	border-radius: 50%;
	background-color: lighten($color-green-200, 20);
	// animation: dotFlashing 1s infinite alternate;
	animation: dot-flashing 0.5s alternate 0.25s infinite;

	&::before,
	&::after {
		content: "";
		position: absolute;
		display: block;
		width: 8px;
		height: 8px;
		margin: 0 auto;
		border-radius: 50%;
		background-color: lighten($color-green-200, 20);
		// animation: 5s linear infinite reverse both dot-flasing;
	}

	&::before {
		left: -16px;
	animation: dot-flashing 0.5s alternate infinite;
	}

	&::after {
		right: -16px;
	animation: dot-flashing 0.5s alternate 0.5s infinite;
	}
}

@keyframes dot-flashing {
	to {
		background-color: darken($color-green-200, 10);
		// background-color: red;
	}
}
```

### Continued development

- Use typescript

### Useful resources

- [CSS Loaders Animation](https://dev.to/afif/i-made-100-css-loaders-for-your-next-project-4eje) - This is an article full of animation examples.

## Author

- Frontend Mentor - [@zqwirp](https://www.frontendmentor.io/profile/zqwirp)
