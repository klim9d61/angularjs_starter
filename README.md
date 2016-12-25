# `angularjs-starter` — the seed for AngularJS apps

This project is an application skeleton for testing and creating small, typical [AngularJS][angularjs] web app. You can use it
to quickly bootstrap your angular webapp projects and try/learn new features on AngularJS.


## Getting Started

To get you started you can simply clone the `angularjs-starter` repository and install the dependencies:

### Prerequisites

You need git to clone the `angularjs-starter` repository. You can get git from [here][git].

You must have Node.js and its package manager (npm) installed. You can get them from [here][node].

### Clone `angularjs-starter`

Clone the `angularjs-starter` repository using git:

```
https://github.com/klim9d61/angularjs_starter.git
cd angularjs-starter
```

### Install Dependencies

```
npm install
```

### Run the Application

We have preconfigured the project with a simple development web server. The simplest way to start
this server is:

```
npm start
```

Now browse to the app at [`localhost:8000/index.html`][local-app-url].


## Directory Layout

```
src/                    --> all of the source files for the application
  app/                 --> 
  ...
```

### Running the App during Development

The `angularjs-starter` project comes preconfigured with a local development web server. It is a Node.js
tool called [http-server][http-server]. You can start this web server with `npm start`, but you may
choose to install the tool globally:

```
sudo npm install -g http-server
```

Then you can start your own development web server to serve static files from a folder by running:

```
http-server -a localhost -p 8000
```

Alternatively, you can choose to configure your own web server, such as Apache or Nginx. Just
configure your server to serve the files under the `src/` directory.

### Running the App in Production

This project is not intended to use for production.


## Contact

For more information on AngularJS please check out [angularjs.org][angularjs].


[angularjs]: https://angularjs.org/
[git]: https://git-scm.com/
[http-server]: https://github.com/indexzero/http-server
[local-app-url]: http://localhost:8000/index.html
[node]: https://nodejs.org/
[npm]: https://www.npmjs.org/
