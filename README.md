# _{Application Name}_

#### _{Brief description of application}, {Date of current version}_

#### By _**{List of contributors}**_

## Description

_{This is a detailed description of your application. Its purpose and usage.  Give as much detail as needed to explain what the application does, and any other information you want users or other developers to have. }_

## Setup/Installation Requirements

* _This is a great place_
* _to list setup instructions_
* _in a simple_
* _easy-to-understand_
* _format_


_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this app depends on?}_

## Specifications
* _There is a random number generator_
  * _Input: Button "roll" is clicked by user_
  * _Output: A number between 1 and 6 (inclusive) is returned_

* _If the result of the random number generator is not 1, adds random number to a temporary score for a specific player_
  * _Input: rolls 5 with temporary balance of 12_
  * _Output: Temporary score = 17_

* _If the result of the random number generator is 1, the temporary score becomes zero_
  * _Input: rolls 1_
  * _Output: Temporary score = 0_

* _If the result of the random number generator is 1, it becomes the other player's turn_
  * _Input: rolls 1_
  * _Output: Other player becomes active player_

* _If the player decides to pass their turn, their temporary score is add to their total score_
  * _Input: Player passes turn with temporary score of 14 and total score of 30_
  * _Output: Total score = 44_

* _If the player decides to pass their turn, it becomes the other player's turn_
  * _Input: Player passes turn with temporary score of 14_
  * _Output: Other player becomes active player_

* _If the player rolls and the value of that rolls pushes their total score + their temporary score >= 100, that player wins the game_
  * _Input: Player with total score of 90 and temporary score of 5 rolls a 6_
  * _Output: "You Win!" alert_
  

## Known Bugs

_{Are there issues that have not yet been resolved that you want to let users know you know?  Outline any issues that would impact use of your application.  Share any workarounds that are in place. }_

## Support and contact details

_{Let people know what to do if they run into any issues or have questions, ideas or concerns.  Encourage them to contact you or make a contribution to the code.}_

## Technologies Used

_{Tell me about the languages and tools you used to create this app. Assume that I know you probably used HTML and CSS. If you did something really cool using only HTML, point that out.}_

### License

*{Determine the license under which this application can be used.  See below for more details on licensing.}*

Copyright (c) 2016 **_{List of contributors or company name}_**
