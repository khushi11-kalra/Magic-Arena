Magical Arena Game
==================
Problem Statement:
Problem Statement:

Design a Magical Arena. Every Player is defined by a “health” attribute, “strength” attribute and an “attack” attribute - all positive integers. The player dies if his health attribute touches 0. 
Any two player can fight a match in the arena. Players attack in turns. Attacking player rolls the attacking dice and the defending player rolls the defending dice. The “attack”  value multiplied by the outcome of the  attacking dice roll is the damage created by the attacker. The defender “strength” value, multiplied by the outcome of the defending dice is the damage defended by the defender. Whatever damage created by attacker which is in excess of the damage defended by the defender will reduce the “health” of the defender. Game ends when any players health reaches 0

Player with lower health attacks first at the start of a match. 

Assume two players . Player A 50 health 5 strength 10 attack Player B 100 health 10 stregnth and 5 attack . Attacking die and Defending die are both 6 sided die with values ranging from 1- 6

Player A attacks and rolls die. Die roll : 5 . Player B defends and rolls die. Die roll 2

Attack damage is 5 * 10 = 50 ; Defending strength = 10 * 2 = 20 ; Player B health reduced by 30 to 70

Player B attacks and rolls die. Die roll : 4. Player A defends and rolls die. Die Roll 3

Attack damage is 4 * 5 = 20 ; Defending strength = 5 * 3 = 15 ; Player A health reduced by 5 to 45

And so on

Rules of the Game:
You can use Java, Go or Node.js to implement the solution, without using any third-party libraries or frameworks ( common and essential helper libs and packages are allowed ex. math.rand() is ok.

The code should NOT be hosted on GitHub or made public. Create a zip of the folder with local git history  and you should provide us with the zip

You should provide a README file in the repository that explains how to run the code and any other relevant information.

You should provide unit tests for your solution.

We expect you to commit frequently with relevant commit messages. Multiple incremental commits are valued over one all-inclusive commit.

Evaluation Criteria:
We will evaluate your solution based on the following factors:

Simple design: Does the code have a clear and simple design? Is it easy to understand and modify?

Readability: Is the code well-organized and easy to read? Are the naming conventions clear and consistent?

Modelling: Are the objects and classes used in the code well-designed and appropriate for the problem at hand?

Maintainability: Is the code easy to maintain and modify? Are there any potential areas of concern or technical debt?

Testability: Are there comprehensive unit tests for the code? Does the code have a high degree of test coverage?

Description
-----------
This is a simple implementation of a magical arena game where two players fight until one of them dies. Each player has health, strength, and attack attributes. Players attack and defend in turns using dice rolls to determine the damage.

Requirements
------------
- Node.js (version 12 or higher)
- npm (Node Package Manager)

Installation
------------
1. Download the zip file and extract it.
2. Open a terminal in the project directory.
3. Run `npm install` to install the necessary dependencies.

Running the Game
----------------
To start the game, run the following command in the terminal:

    node src/main.js

This will simulate a match between two players and print the results to the console.

Running Tests
-------------
To run the unit tests, use the following command:

    npm test

Ensure you have Mocha installed globally or as a development dependency in your project. If you don't have Mocha installed, you can install it globally using:

    npm install -g mocha

or as a development dependency in your project:

    npm install mocha --save-dev

Project Structure
-----------------
The project directory structure is as follows:

    MagicalArena/
    ├── src/
    │   ├── Player.js
    │   ├── Die.js
    │   ├── Match.js
    │   └── main.js
    ├── tests/
    │   ├── Player.test.js
    │   ├── Die.test.js
    │   └── Match.test.js
    └── README.txt

Source Files
------------
- **Player.js**: Defines the `Player` class with attributes and methods for attacking, defending, and taking damage.
- **Die.js**: Contains the `Die` class with a method to roll a six-sided die.
- **Match.js**: Implements the `Match` class which controls the game flow and the fight logic.
- **main.js**: Entry point for the game, initializes players and starts the match.

Test Files
----------
- **Player.test.js**: Contains unit tests for the `Player` class.
- **Die.test.js**: Contains unit tests for the `Die` class.
- **Match.test.js**: Contains unit tests for the `Match` class.

Example Output
--------------
When running the game, you should see output similar to the following:

    Attacker rolls 3, Defender rolls 4
    Attack damage: 30, Defense strength: 40
    Defender health reduced by 0 to 100

    Attacker rolls 4, Defender rolls 2
    Attack damage: 20, Defense strength: 10
    Defender health reduced by 10 to 40

    ...

    Player B wins!

Notes
-----
- Ensure you have Node.js installed and properly set up in your environment.
- The game logic is based on random dice rolls, so the output will vary with each run.
