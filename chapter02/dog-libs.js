/*
 * This script prompts the user to enter four words: a noun, then
 * a verb, then an adjective, and finally an adverb.  It then alerts
 * a sentence using these four words.  The template for the sentence
 * is one that would make sense if the user entered "dog" for each
 * prompt.
 */

// Prompt for the four words
var noun = prompt("Enter a noun");
var verb = prompt("Enter a verb");
var adjective = prompt("Enter an adjective");
var adverb = prompt("Enter an adverb");

// Alert the composed sentence
alert("If you " + verb + " a " + noun + " during the " +
    adjective + " days of summer, you'll be " + adverb +
    " tired.");
