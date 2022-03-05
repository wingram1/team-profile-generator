# Team Profile Generator

## User Story
```
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Acceptance Criteria
```
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

## Directory Structure: 
```js
.
├── __tests__/             //jest tests
│   ├── Employee.test.js
│   ├── Engineer.test.js
│   ├── Intern.test.js
│   └── Manager.test.js
├── dist/                  // rendered output (HTML) and CSS style sheet      
├── lib/                   // classes
├── src/                   // template helper code 
├── .gitignore             // indicates which folders and files Git should ignore
├── index.js               // runs the application
└── package.json  
```

The application must have these classes: Employee, Manager, Engineer, and Intern. The tests for these classes (in the _tests_ directory) must all pass.

The first class is an Employee parent class with the following properties and methods:
- `name`
- `id`
- `email`
- `getName()`
- `getId()`
- `getEmail()`
- `getRole()` // Returns 'Employee'
- The other three classes will extend `Employee`.

In addition to `Employee`'s properties and methods, `Manager` will also have:
- `officeNumber`
- `getRole()` // Overridden to return 'Manager'

In addition to `Employee`'s properties and methods, `Engineer` will also have:
- `github` // GitHub username
- `getGithub()`
- `getRole()` // Overridden to return 'Engineer'

In addition to `Employee`'s properties and methods, `Intern` will also have:
- `school`
- `getSchool()`
- `getRole()` // Overridden to return 'Intern'

Finally, although it’s not a requirement, you should consider adding validation to ensure that user input provided is in the proper expected format.

## Grading Requirements
## Deliverables: 15%
- A sample HTML file generated using the application must be submitted.
- Your GitHub repository containing your application code.

## Walkthrough Video: 32%
- A walkthrough video that demonstrates the functionality of the Team Profile Generator and passing tests must be submitted, and a link to the video should be included in your README file.
- The walkthrough video must show all four tests passing from the command line.
- The walkthrough video must demonstrate how a user would invoke the application from the command line.
- The walkthrough video must demonstrate how a user would enter responses to all of the prompts in the application.
- The walkthrough video must demonstrate a generated HTML file that matches the user input.

## Technical Acceptance Criteria: 40%
- Satisfies all of the preceding acceptance criteria plus the following:
- Uses the Inquirer package (Links to an external site.).
- Uses the Jest package (Links to an external site.) for a suite of unit tests.
- The application must have these classes: Employee, Manager, Engineer, and Intern.

## Repository Quality: 13%
- Repository has a unique name.
- Repository follows best practices for file structure and naming conventions.
- Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.
- Repository contains multiple descriptive commit messages.
- Repository contains a high-quality README with description and a link to a walkthrough video.

## How to Submit the Challenge
You are required to submit the following for review:
- A walkthrough video demonstrating the functionality of the application and passing tests.
- A sample HTML file generated using your application.
- The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.




## VIDEO SCRIPT
- Go to repository, git clone, go to folder, then clone there
- npm init -y (initialize npm)
- npm i fs inquirer jest
- npm run test (ensure they all pass)
- node 