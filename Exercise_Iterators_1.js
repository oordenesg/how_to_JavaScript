// Mini Linter
// In this project, you will use what you know about iterating over arrays to improve the quality of a paragraph and gather some information about that paragraph.
// This is the same type of work that word processing software does. Additionally, you may have heard of linting, a process by which text is evaluated and improved by an application. In this project, you will create a miniature version of a linter using array methods that you have learned.


let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];
// Let’s split the string into individual words and save them in a new array called storyWords.
const storyWords = story.split(' ')
// Log how many words there are in this story to the console.
console.log(storyWords.length);
// There is an array of words that are unnecessary. Iterate over your array to filter out these words. Save the remaining words in an array called betterWords. There are several ways that you could achieve this.

const betterWords = storyWords.filter(word =>{
  if (!unnecessaryWords.includes(word)){
    return word}
  }
)

console.log(betterWords.length)
//There is an array of words called overusedWords. These are words overused in this story. You want to let the user of your program know how many times they have used these overused words. There are two ways to achieve this. Try it on your own first. If you need help, consult the hint.
let countW = 0;
betterWords.filter(word =>{
  if(overusedWords.includes(word)){
    countW += 1
  }
})
console.log(countW)
//Now, count how many sentences are in the paragraph.

let sentences = 0;
betterWords.forEach(word =>{
  if(word[word.length-1] === '.' || word[word.length-1] === '!'){
    sentences += 1;
  }
})
console.log(sentences)

//Log these items to the console:The word count, The sentence count, The number of times each overused word appears

const print_sentence = (WordCount,SentenceCount,OverusedAppears) =>{
  return 'There story has '+WordCount+' words and '+SentenceCount+' sentences. Finally, this story has '+OverusedAppears+' overused words.'
}

console.log(print_sentence(betterWords.length,sentences,countW))
console.log('\n')
console.log(betterWords.join(' '));
