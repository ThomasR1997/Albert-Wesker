// Thomas
// Albert Wesker quotes from the game Resident Evil 5

const quotes = [
  "Seven minutes. Seven minutes is all I can spare to play with you.",
  "Isn't this one big family reunion?",
  "So slow to catch on...",
  "I think the odds are fair, two on two. Right, Jill?",
  "There's no point in hiding.",
  "Your future hinges upon this fight.",
  "You're merely postponing the inevitable!",
  "Your struggle is over!",
  "Poor deluded Chris. How you so love your precious self-righteousness.",
  "You can't hide forever!",
  "Incompetence surrounds me!",
  "Self-righteous fools!",
  "Poor performance, indeed.",
  "Ignorant cretins!",
  "I expected more of a challenge after all this time, Chris. How disappointing.",
  "Nice move, Chris. But now that your 'partner' has arrived, I'll leave you two to catch up.",
  "Remarkable! Still resisting at such an advanced stage. Commendable, yet futile!",
  "Have fun watching Jill suffer.",
  "So you've made it this far... Too bad you won't make it much further.",
  "Are you saying I was manufactured?",
  "The right to be a god. You? Arrogant even until the end. Only one truly capable of ¨being¨ a god, deserves that right. The right... With Uroboros, I have that right.",
  "Six billion cries of agony will birth a new balance. Unfortunately, it's too late for you. You will not live to see the dawn.",
  "Sorry, Excella, but it appears Uroboros has rejected you. Though you have been an excellent asset, I have one last task for you. Farewell, old friend.",
  "Uroboros is at the eve of its appearance!",
  "Let me clarify something for you, Chris. I don't think of myself as a king. No, I am a god! And even kings bow to gods!",
  "Don't you two ever tire of failing in your mission?",
  "You've really become quite an inconvenience for me.",
  "Every day, humans come one step closer to self-destruction. I'm not destroying the world, I'm saving it!",
  "Things are really getting interesting now, eh Chris? Do you actually think you can defeat me?",
  "[Laughs] Well then, I'll just have to kill you quickly.",
  "I'll see you dead.",
  "Has it never occurred to you that this planet is overpopulated? Only a handful of humans truly matter. Everyone else is just so much chaff. So now I have to separate this chaff from the wheat. And with Uroboros, I can finally accomplish this.",
  "In less than five minutes, we will reach the optimal altitude for missile deployment. Uroboros will be released into the atmosphere, ensuring complete global saturation.",
  "Only those with superior DNA will be chosen by Uroboros. Only those fit for survival will be allowed to carry their genes into a new age!",
  "It seems I may have underestimated you, Chris.",
  "I don't need anyone else. I have Uroboros!",
  "Your feeble attempts only delay the inevitable.",
  "The entire world will be infected. A new Genesis is at hand and I will be the creator!",
  "You'll pay for that!",
  "I'm taking the two of you with me!",
  "I should've killed you years ago... Chris.",
  "Over? I'm just getting started.",
  "Why can't you understand, Chris? Do you really believe the world is worth saving? Natural selection leaves the survivors stronger and better! Humans have escaped this winnowing for far too long!",
  "The human race requires judgment!",
  "War and pestilence wherever you go! Nothing but loathsome humans!",
  "I can't lose! Not to you!",
  "CHRIS!!!",
  "The plan is in its final stages. I will not tolerate delays.",
  "You haven't changed.",
  "Here I am offering you my precious time and you waste it by running around.",
  "The right to be a god... that right is now mine.",
  "Time to die, Chris!",
  "Ah, there you are!",
  "Ignorant cretins!",
  "Self-righteous fools!",
  "I expected more from you.",
  "Are you trying to make me angry?",
  "Let's finish this!",
];

// Images of Albert Wesker

const imgs = [
  "albert1.jpg",
  "albert2.jpg",
  "albert3.jpg",
  "albert4.jpg",
  "albert5.jpg",
  "albert6.jpg",
  "albert7.jpg",
  "albert8.jpg",
  "albert9.jpg",
  "albert10.jpg",
  "albert11.png",
  "albert12.jpg",
  "albert13.jpg",
  "albert14.jpg",
  "albert15.jpg",
  "albert16.png",
  "albert17.jpg",
  "albert18.jpg",
  "albert19.jpg",
];

const quoteBtn = document.querySelector("#quote-btn");
const displayQuote = document.getElementById("display-quote");

// This function is hooked up to the quote button on the html document.
// When you click "Generate random quote" the function runs.
quoteBtn.addEventListener("click", function () {
  // The purpose of using the math floor and random here and storing them in a variable
  // is to get a random quote and image from my 2 arrays.
  let randomQuote = Math.floor(Math.random() * quotes.length);
  let randomImg = Math.floor(Math.random() * imgs.length);

  displayImg = imgs[randomImg];

  // I used this to give the source to my images
  // Since my images are inside an image folder I had to add ./images/
  document.getElementById("display-img").src = `./images/${displayImg}`;
  displayQuote.textContent = quotes[randomQuote];
});
