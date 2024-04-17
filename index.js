#!/usr/bin/env node
// when a script starts with #!/usr/bin/env node, it tells the operating system to use the env program to locate the node executable in the user's PATH environment variable and use it to execute the script. This approach ensures that the script can be executed regardless of the specific location of the node executable on the system. It adds flexibility and portability to the script, making it easier to run across different environments.
import inquirer from "inquirer";
import chalk from "chalk";
console.log("\n");
const answer = //const answer: { sentence: string }: This line declares a constant named answer and specifies its type. In TypeScript, you can explicitly specify the type of a variable using a colon (:) followed by the type. Here, answer is declared to be an object with a property named sentence, which must be a string.
 await inquirer.prompt([
    {
        //object-1
        name: "sentence",
        type: "input",
        message: chalk.redBright("Enter Your Sentence To Count Words:"),
    },
]);
//step-1:-
// To Remove Whitespaces we use:
//const words = answer.sentence.trim().split(" ");
//trim is used to remove spaces between start and end of a sentences only while whitespaces between each word remains.Moreover we use split method to make a word's array seperated by space.
const words = answer.sentence.trim().split(/\s+/); //we're splitting the sentence using a regular expression /\s+/ as the separator. This regular expression matches one or more whitespace characters (such as space, tab, newline), effectively splitting the sentence into words regardless of the number of spaces between them. Then, we simply count the number of elements in the words array to get the word count.
//The regular expression /\s+/ is a pattern used to match one or more whitespace characters in a string. Let's break down its components:
//     /: Delimiters: In JavaScript, regular expressions are typically enclosed between forward slashes /pattern/.
//     \s: This is a special character class in regular expressions that represents any whitespace character. This     includes spaces, tabs, newlines, and other whitespace characters.
//     +: Quantifier: The + symbol means "one or more occurrences" of the preceding character or character class. In this case, it indicates that the pattern \s (whitespace) should occur one or more times consecutively.
// Putting it all together:
//     \s+ matches one or more consecutive whitespace characters in a string.
//      So, when we use split(/\s+/), we're splitting the string based on one or more consecutive whitespace characters. This allows us to effectively separate the sentence into individual words, regardless of the number of spaces between them.
console.log(words); //shows an array of words
//step-2:-
// To count words, we use .length property on words.
console.log(chalk.yellowBright(`Words In A Given Sentence: ${chalk.blueBright(words.length)}`));
//Author- Huma Mohsin
