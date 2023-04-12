const readLine = require('readline-sync');

let question = ['      '];

let question1 = readLine.question('Write an adjective:');
let question2 = readLine.question('Write a verb:');
let question3 = readLine.question('Write a adverb:');
let question4 = readLine.question('Write a noun:');
let question5 = readLine.question('Write a verb:');
let question6 = readLine.question('Write a noun:');
let question7 = readLine.question('Write a noun:');
let question8 = readLine.question('Write a noun:');
let question9 = readLine.question('Write a verb:');
let question10 = readLine.question('Write a plural noun:');
let question11 = readLine.question('Write a verb:');
let question12 = readLine.question('Write a verb with -tive:');
let question13 = readLine.question('Write a adverb:');
let question14 = readLine.question('Write a adverb:');
let question15 = readLine.question('Write a verb:');
let question16 = readLine.question('Write a adjective:');
let question17 = readLine.question('Write a adjective:');
let question18 = readLine.question('Write a type of time:');
let question19 = readLine.question('Write a verb:');
let question20 = readLine.question('Write a noun:');
let question21 = readLine.question('Write a verb:');

question.push(question1,question2,question3,question4,question5,question6,question7,question8,question9,question10,question11,question12,question13,question14,question15,question16,question17,question18,
    question19, question20, question21,);
console.log(`The game undercards is a ${question[1]} game where you use cards from the hit popular Undertale/Deltarune game to ${question[2]} your opponent. 
You play cards very ${question[3]} to make sure you have the advantage. You must try to lower your opponent’s ${question[4]} to 0. There are different mechanics that can make the game more ${question[5]}. 
There are 7 souls that you can choose from allowing you to have a certain ${question[6]}. Once that is complete you create your ${question[7]} with the 30 ${question[8]} cards. 
After a ${question[9]} game you gain Gold to use to buy more cards or artifacts. These can help you create new ${question[10]} to make more combos to be able to ${question[11]} your opponent. 
There is also a ranked mode where you can be more ${question[12]}. At the end of each season ${question[13]} you gain some ${question[14]} rewards to make your decks way better. 
Using the gold that you earned very ${question[15]}, you can use it to buy packs to gain more cards. Don’t forget about the overpowered cards, the DT’s. 
These bad boys could ${question[16]} your opponents and easily give you the advantage with their ${question[17]} abilities. 
They are super rare and ${question[18]} to craft so you must play for a ${question[19]} time. There are also good cosmetics to ${question[20]} your cards. Using a different type of ${question[21]} to buy the skins. 
This is the ${question22} game of undercards.`);
