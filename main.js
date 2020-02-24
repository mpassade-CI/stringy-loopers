// # Setup
// For this exercise, we don't need to run npm test. We will only use the command node main.js in the terminal to see the results of our functions.


// 0. Once again, write a function that accepts a number and prints out a banner with the words "Challenge" and the number in it. Use string interpolation if you want! **Call it before calling each function. Don't call it again if you need to print twice to test a function.**
function challenge(num){
    console.log('Challenge ' + num)
}
// 1. Write a function that prints out only the vowels from a given string. Do not use regular expressions ("regex"). Now call it with "Regular expressions are for term 2.". You should see an "e" printed, followed by a "u", followed by an "a", and so on.
challenge(1)
function one(str){
    const x = ['a','e','i','o','u','A','E','I','O','U']
    for (let i=0; i<str.length; i++){
        if (x.includes(str[i])){
            console.log(str[i])
        }
    }
}
one('Regular expressions are for term 2.')
// 2. Write a function that prints out the first 5 vowels from the given string. Continue to not use regexes. Now call it with "Regular expressions are for term 2.". You should see an "e" printed, followed by a "u", followed by an "a", followed by an "e", followed by another "e", and then nothing else. Now call it again with "Hello!" You should see only an "e" and an "o" print.
challenge(2)
function two(str){
    const x = ['a','e','i','o','u','A','E','I','O','U']
    let y =0
    for (let i=0; i<str.length; i++){
        if (y<5 && x.includes(str[i])){
            console.log(str[i])
            y++
        }
    }
}
two('Regular expressions are for term 2.')
// 3. Write a function that prints out every third character, _without_ examining every character. In other words, you may _not_ increment your index by one and decide whether to print based on the result of a modulus operation on that index. (A standard solution for this.). Now call it with "I am the alfalfa and the omelette." You should see "a", followed by "t", followed by a space, and so on. An "e" should be the last thing printed, with no `undefined` values showing up.
challenge(3)
function three(str){
let count = 2
while (count<str.length){
    console.log(str[count])
    count += 3
}
}
three('I am the alfalfa and the omelette.')
// 4. Write a function that prints out the first four characters after the given index in the given string, or, if there are fewer characters remaining from, prints only the remaining ones. Now call it with 'Oh hi, I didn't see you there. Welcome.' and `4` as your parameters. You should see 'i', followed by ',', followed by a space, followed by an 'I'. Now call it again with 'Oh hi, I didn't see you there. Welcome.' and `38` as your parameters. You should 'm', 'e', and '.' printed, and no fourth printing.
challenge(4)
function four(str,num){
console.log(str.substring(num,num+4))
}
four("Oh hi, I didn't see you there. Welcome.",4)
four("Oh hi, I didn't see you there. Welcome.",36)

// 5. Write a function that prints out the index of every `u` it finds in the given string. Do not use `indexOf`. Now call it with `'You picked the wrong house, bub.'`. You should see `2`, `23`, and `29` printed out. 
challenge(5)
function five(str){
    x = ''
    for (i=0; i<str.length; i++){
        x += str[i]
        if (str[i]==='u'){
            console.log(x.length-1)
        }
    }
}
five('You picked the wrong house, bub.')
//  6. Write a function that prints out the first index of the letter `u` in the given string. Do not use `indexOf`. Now call it with `'You picked the wrong house, bub.'` You should see the number `2` printed, and only that.
challenge(6)
function six(str){
    console.log(str.search('u'))
}
six('You picked the wrong house, bub.')
// 7. Write a function that prints out the first index of the letter `u` in the given string, with a `-1` printed if it doesn't find it. Do not use `indexOf`. Now call it with `'You picked the wrong house, bub.'` You should see the number `2` printed, and only that. Now call it with `"I'm Canadian."` You should see `-1` print out.
challenge(7)
function seven(str){
    if (str.includes('u')){
        console.log(str.search('u'))
    }
    else {
        console.log(-1)
    }
}
seven('You picked the wrong house, bub.')
seven("I'm Canadian.")