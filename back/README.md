[![LinkedIn][linkedin-shield]][linkedin-url]

<br />
<p align="center">
  <h3 align="center">Koch Media Task Readme</h3>
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

- [Node JS](https://nodejs.org/)
- [Axios](https://github.com/axios/axios)
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
git clone https://github.com/tote93/jlgr-koch-media-task.git
```

3. Install NPM packages

```sh
cd back && npm install
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
