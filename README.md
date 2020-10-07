[![LinkedIn][linkedin-shield]][linkedin-url]

<br />
<p align="center">
  <h3 align="center">Purple Team Task Readme</h3>
  <p align="center">
    You work as a JavaScript Developer in a Koch Media that heavily works with Enterprise systems. You’ve got a task to create for providing fully functional effects and user interaction on an html table shown below.
    <br />
    <br />
    <a href="https://koch-media-jlgr.web.app">View Demo</a>
</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [About the Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [License](#license)
- [Contact](#contact)

<!-- ABOUT THE PROJECT -->

## About The Project

### Front-end

- [x] You should create HML/CSS for the given HTML table.
- [x] You should create a form to enter data into the table by pressing the submit button.
- [x] When clicking at ‘read’ button, you should get all data from the given row and show them as ‘details’ bellow the table
- [x] When clicking on Delete button, the current user should be deleted
- [x] When clicking on Update button, the current row should become editable, and the update button should turn into a save button, upon entering new data, pressing the save button should save the updated user data.
- [x] BONUS 1: When clicking on any of the rows (not the buttons) color the clicked row with a blue background.
- [x] BONUS 2: Add a CLOSE button in details view, so that when it’s clicked, details view will get closed.
- [x] BONUS 4: Validate that the email entered in the form is truly an email address. Validate that the telephone number is composed only from numbers

### Back-end

- [x] Create Nodejs server witch will connect to the client application from the Task1. The service should have the basic functionalities like create, read, update and delete users. The users Data should be store into local memory you don’t need to create any DB connections (keep it simple).
- [x] You should create Node service for the client application from Task1.
- [x] Service should have following endpoints
  - create a new user send JSON payload with user data (Name, Email, Phone)
  - fetch existing user list return list of saved users
  - update existing user send JSON payload with updated user data (Name, Email, Phone)
  - delete existing user
- [x] BONUS 1: Create a custom response body where you will send to client status code, data and user friendly message.

- [x] BONUS 2: Create a 404 Not found endpoint witch will return an error when user try to request not existing route.

### Built With

- [React JS](https://es.reactjs.org/)
- [Material UI](https://material-ui.com/)
- [CSS BEM](http://getbem.com/introduction/)
- [Axios](https://github.com/axios/axios)
- [Node JS](https://nodejs.org/)
- [Express JS](https://expressjs.com/)

<!-- GETTING STARTED -->

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- npm

```sh
npm install npm@latest -g
```

### Installation

1. Clone the repo

```sh
git clone https://github.com/tote93/Purple-Task
```

3. Install NPM packages

```sh
npm install
```

4. Execute

```JS
npm run start
```

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

Jose Luis Gordillo Relaño - [igorej](https://www.linkedin.com/in/i62gorej/) -igorej@hotmail.com

Project Link: [https://github.com/tote93/jlgr-koch-media-task]

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/i62gorej/
