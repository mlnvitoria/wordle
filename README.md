# Wordle

This project had the objective to learn how React and its functionalities work, creating a first experience doing it manually, with no help of AI.

The original game was made by Josh Wardle and later sold to The New York Times. You can find the website [here](https://www.nytimes.com/games/wordle/index.html).


## Technologies used
* React v19.2
* Vite
* Bootstrap

## Packages used

* Random Words by @ApostropheCMS ([link here](https://github.com/apostrophecms/apostrophe/tree/main/packages/random-words))
* Word Checker by @Nicholas Nguyen ([link here](https://github.com/nguyennick197/react-word-checker))
* Simple Keyboard by @hodgef and contributors ([link here](https://hodgef.com/simple-keyboard/))
* Partycles by @jonathanleane ([link here](https://jonathanleane.github.io/partycles/))

## Running locally

Firstly, make sure your environment has Git, Node and NPM installed.

The current versions:
* Node: v24.14.1
* NPM: v11.11.0
* Git: 2.43.0

Next, clone this repository:
```
git clone git@github.com:mlnvitoria/wordle.git
```

Install the dependencies:
```
npm install
```

Run the script "dev" to turn the project up:
```
npm run dev
```

Enjoy!

## Possible enhancements
The following ideas are ideal for the project, but some depend on a server-side processing.
* Caching the Word chosen and the history of guesses; storing it for a day.
* Create an URL to call the Word Definition
* Disable the keys that were already used and rejected during guesses

Maybe I'll recreate this project with them in the future!