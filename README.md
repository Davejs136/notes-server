<div align="center">
  <h1>Notes Server</h1>
  <h4 align="center">Backend development for notes, a productive application inspired for Todoist</h4>
</div>


## Index
- [Motivation](#motivation)
- [Architecture](#architecture)
  - [Project scaffold](#project-scaffold)
- [Development](#development)
  - [Requirements](#requirements)
  - [Getting Started](#getting-started)
  - [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

## Motivation
The main goal for this project is to design and productivity tools inspired on Todoist

## Architecture

### Project Scaffold
This application is writting usign the [MVC](https://en.wikipedia.org/wiki/mvc)

```
.
├── server.ts
├── database.ts
├── utils\
├── controllers\
|   ├── index.ts
|   └── auth.controller.ts
├── models\
|   ├── index.ts
|   └── user.model.ts
├── routers\
|   ├── index.ts
|   └── user.router.ts
```

### Requirements

We use NodeJS for the server implementation and MongoDB as main database.

- [Git](https://git-scm.com/downloads)
- [MongoDB](https://mongodb.com/)
- [NodeJS](https://nodejs.org/)

### Getting Started

First we need to clone the project using Git, to accomplish this we run
`git clone <repository.git>` as follows:

```bash
git clone https://github.com/Davejs136/notes-server.git
```

This will create a copy of the repository in our system and we will be able
to edit files, commit changes and push them when changes are ready to be published.

Then we need to install project dependencies, this project makes use of `yarn`
to manage the dependencies, to install it you must have NodeJS installed in your system.

Run `node -v` and expect a version tag to be printed to the terminal as follows:

```bash
$ node -v
v14.15.3
```

If the command is not availble, you must install NodeJS before going any
further.

You can [install NodeJS from the official website](https://nodejs.org/) and
follow the steps from the official docs.

When NodeJS is ready, you will need to install **yarn** from homepage installation [yarn](https://yarn/)
you will be able to issue commands using **yarn**.

With both NodeJS and yarn installed in your system, we are able to install
project dependencies. For this you must run `yarn` from the project root directory.

```bash
$ yarn
yarn install v1

[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
[4/4] 🔨  Building fresh packages...
✨  Done in 1.35s.
```

At this point we are able to run the server in development mode.
You will also need a MongoDB database instace, on initialization
our server will attempt to open a connection to Mongodb instance
available. We set connection configurations and other settings using the
`.env` file.

Check on the `.env.sample` file available in the root directory of the
project for a sample of the required configurations, copy the contents of
this file into a new file in the same directory with the name `.env`.

Details on each setting is available in the [Environment Variables](#environment-variables)
section below.

### Environment Variables

Create a `.env` file on the root directory with the following
environment variables.

A `.env.sample` file is also available with predefined values for simplicity.

| Name                | Description                    |
| ------------------- | ------------------------------ |
| `PORT`              | HTTP Port for the server       |
| `DATABASE_URL`      | MongoDB URI for open connection|
| `JWT_SECRET`        | Secret to sign JWT tokens with |

### Debugging

In order to debug the application, you must run the `debug` script as follows:

```shell
yarn debug
```

When the output is printed to the stdout, you must attach to the NodeJS process,
either using Google Chrome DevTools, Visual Studio Code, or your favorite debugging
tool.

If you are using Visual Studio Code, you can create a `.vscode/launch.json` file in
the project root directory (this directory), and paste the following bytes to the
file:

```json
{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Attach to Process",
      "type": "node",
      "request": "attach",
      "port": 9229
    }
  ]
}
```

Then after running `yarn debug` successfully, you must initialize the debugger,
using the built-in Visual Studio Code debugger, by running the "Attach to process"
task.

## Contributing

Contributions of any kind are welcome and would be awesome, ideas, bug fixes,
reports, feedback and improvements are always welcome!

## License

Licensed under the MIT License.