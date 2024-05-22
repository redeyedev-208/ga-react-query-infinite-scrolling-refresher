# React + Vite + Tanstack + MUI
This is a refresher project on how to use `react-query` for `infiniteScrolling`. 
I used an available api, to get the data which I then display on some cards. 
The cards are layout so they pop using an sx prop to allow me to do so. 
Entry point into the project `App.jsx` file also accomplishes the same thing and I'm quite liking having  sticky card header. 
Minimal look and feel and when we scroll the returned data is then displayed behing the `Header`. 
Feel free to use this layout how you like, and give me a star if you thought it was useful. As with everything I build it must be accessible. 

___
## Accessibility
- We used a `<div tabIndex={0} role='article' aria-label={`Species: ${name}`}> `  the same pattern applies for the other card
- This is a workaround as we have no interactive elements to receive focus
- Now that we have this set for either card we can then receive focus
- A screen reader can pick up on the content, we can tab into each card accordingly (quick test which is a great indicator on accessibility)
- Followed by being able to navigate with a keyboard using screen reader controls

___

## Live site hosted on (Netlify)
Thanks for stopping by and accessibility should always be considered at the beginning of any project. If accessibility needs to be addressed at a later time it sometimes is an easy fix, and other times it isn't.
So if as an engineer/developer you are given designs that look cool, and are only checked with a mouse, push back if you are able to (document it and share links for reference). Designers are the first line of defense, and as the ones who implement the designs we will be the first ones to actually find the flaws in those designs. There is always a happy path that can be found and that is the overall goal. This is how we change the world and make a huge impace by small changes in our implementations. It's the only way to prevent features not being available to everyone, in various ways `(keyboard, mouse, assistive technologie: screen reader)`, which is what it is all about at the end of the day. 
___
![star-wars-scrolling-a11y-compliant](https://github.com/redeyedev-208/ga-react-query-infinite-scrolling-refresher/assets/60634649/d7e04295-c473-4c98-83f2-f29a6244a808)

<b>Live site</b>
[star wars infinite scrolling with mui and react-query](https://ga-react-query-infinite-scrolling.netlify.app/)

