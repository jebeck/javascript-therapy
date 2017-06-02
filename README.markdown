# JavaScript therapy

A tech talk by [@jebeck](http://janabeck.com/ 'Jana E. Beck').

Content is licensed under the Creative Commons [Attribution-NonCommercial-ShareAlike 4.0 license](https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode 'CC BY-NC-SA 4.0').

Slide deck created with [Formidable Labs' Spectacle](https://formidable.com/open-source/spectacle/ 'Formidable Labs Open Source: Spectacle'), which is 👌. (Thanks for the great library, Formidable folks! 💖)

This talk includes a couple of interactive slides exposing an interface with two different chatbots (a simple example bot and [ELIZA](https://en.wikipedia.org/wiki/ELIZA 'Wikipedia: ELIZA')). I'm planning to set up the interactive chat examples on CodePen projects, but until then, here's where you'll want to look if you want to look at the code for those:
- the chat mini-app (a React component) is in this repo at [assets/components/chat.js](https://github.com/jebeck/javascript-therapy/blob/master/assets/components/chat.js)
- the simple emoji chatterbot is here at [assets/chatGenerators/chatterbot1.js](https://github.com/jebeck/javascript-therapy/blob/master/assets/chatGenerators/chatterbot1.js)
- the Eliza code is here at [assets/chatGenerators/eliza/](https://github.com/jebeck/javascript-therapy/tree/master/assets/chatGenerators/eliza)

## Present and/or Develop

After downloading this repo, your first order of business is to open terminal and run `yarn`. (Or `npm install` if you're about that life. We don't judge. Much.)

Next, run `rm -R .git` to remove the existing version control.

To start up the local node server, run `npm start`.

Open a browser and hit [http://localhost:3000](http://localhost:3000), and you are ready to freakin' roll.

## Build & Deployment

Building the dist version of the project is as easy as running `npm run build`.

If you want to deploy the slideshow to surge, run `npm run deploy`.
