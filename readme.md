 # Rock, Paper,Scissors, Lizard,Spock- the BigBang Game

 Welcome to rock, paper scissors on steroids! Inspired by the popular TV show "The Big Bang Theory", this game adds two new elements to the classic game, providing loads of different outcomes! Here you play against a computer which randomly chooses one of five possibilites- rock, paper, scissors, lizard or spock. Each choice can defeat two of the other options, will lose to two options and will obviously tie against an identical choice. 

 [View site here](https://townsend75.github.io/rpsls/) [View repository here] (https://github.com/townsend75/rpsls)


 ## Table of Contents

 ### Features
 ### UX/UI
 ### Testing
 ### Deployment
 ### Sources
 ### Future Considerations


 ### Features

 Since the main aim of this project was to implement javascript, the basic design of the site is very simplistic. THe header and footer have identical background colours which give a symetrical appearance without making the text difficult to read. 

 In the game area, there are five buttons which are clearly marked for the player to make their choice. Each choice reveals an image of the player's choice and the corresponding image of the computer's (random) choice. A message is shown displaying the result and the scores for player and computer are tallied within the game areas. ONce one of the contestants reaches 10 points, the game is over and is automatically reset for the next game. 

 The footer contains the rules of the game for easy reference. 

### UX/UI

The simplicity of the design makes it very clear what the user has to do. The game rules are clearly displayed as a guide as well. If the user wins, they will want to play again to win again, if they lose, they will want to play again for revenge!


 ### Testing

 | Feature      | Expect    | Action       | Result  |
 | :---         |   :---:   |    :---:     |     --: |
 | Rock button  | Rock picture on player side |Press rock button | Works as expected |
 | Paper button  | Paper picture on player side |Press paper button | Works as expected |
 | Scissors button  | Scissors picture on player side |Press scissors button | Works as expected |
 | Lizard button  |  Lizard picture on player side |Press lizard button | Works as expected |
 | Spock button  |Spock picture on player side |Press spock button | Works as expected |
 | Results message | Result of hand should be displayed | Play game | Works as expected |
 Player & Computer Scores | Scores should tally with results | Play game as normal | Scores are updated correctly |
 |Game over alerts | Alert when either computer or player reaches 10 points | play game until one party achieves 10 points | Alert and reset is activated|

#### Bugs and Problems

I originally intended to write a quiz rather than write a game, however, after going through the course material many times, I couldn't find answers to many of my questions regarding displaying quiz questions one at a time rather thn all on the same page. Since time was running out, I opted to use the project suggested in the video as a template. Knowing that my game would look very similar to the code institute version, I was very careful to ensure that I came up with my own solutions for the scoring and game ending. Since the love maths walkthrough was an entirely maths based assignment, I found it incredibly difficult to find workarounds for strings, since there is essentially no correlation between the two. 
Sizing the images was also a small problem. Having tried various flex and height solutions (also with my mentor), I opted to resize the images externally and re-import them rather than find a css workaround. My mentor also explained that bootstrap would be the preferred option to solve these issues in a real world scenario. 

#### Validator Testing
I passed my code through the W3C Html and Css validators and Javascript through the JsHint Javascript Validator, receiving no errors. 
I also received high scores for both the mobile and desktop versionis of the game in a lighthouse check in devtools. 


### Deployment
The site was deployed to GitHub pages. The steps to deploy were as follows: Open the settings tab. Select the main branch from the source section The page then refreshes with a link to a website, indicating a successfull deployment. The link to the site is https://townsend75.github.io/rpsls/

### Sources

I obtained an image from pngwing.com containing all of the necessary elements for the game. I then cut it to size for my game. 
The rules of the game, found in the footer, were taken from wikihow. 
As previously stated, the template for the game was taken from the code institute video for a rock paper scissors game. 


### Future considerations

Had I had more time, I would have added more styling to the page and potentially add a running tally of games won by player and computer. 


