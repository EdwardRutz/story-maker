
// Get user input and store in variables
// Provide a countdown for the user of steps remaining
var questions = 3;
var questionsLeft = ' [' + questions + ' questions left]';
var adjective = prompt('Please type an adjective' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var verb = prompt('Please type a verb' + questionsLeft );
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var noun = prompt('Please type a noun' + questionsLeft);
alert('All done. Ready for the message?');

// Create a sentence using the variables
var sentence = "<h2>There once was a " + adjective;
sentence += ' programmer who wanted to use JavaScript to ' + verb;
sentence += ' the ' + noun + '.</h2>';

// Output the sentence to the DOM/HTML page
document.write(sentence);
