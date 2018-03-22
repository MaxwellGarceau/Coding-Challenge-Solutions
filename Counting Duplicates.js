function duplicateCount(text){
// Used a counter variable to count how many times a separate duplicate occured
var counter = 0;
// Used regex to match duplicate character and loop while there was a duplicate
while (text.match(/(\w).*?\1/gi) !== null) {
var filterChar = text.match(/(\w).*?\1/gi);
// Got only the duplicate character of the match
filterChar = filterChar[0][0];
// Split string into arrays for filter
text = text.split('');
// Filtered out the duplicate character for upper case and lower case
text = text.filter(elem => elem !== filterChar.toLowerCase() && elem !== filterChar.toUpperCase());
// Turned text back to string from array
text = text.join('');
// Added one to the counter
counter++;
  }
 return counter;
}