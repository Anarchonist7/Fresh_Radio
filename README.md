# Pirate Radio

Pirate Radio is a social music app which synchronizes playback across multiple devices. A host, or Captain, controls a playlist while listeners, the crew, stay in sync. Pirate Radio is perfect for listening together - whether snowboarding, taking the bus or sharing tunes across continents.

## Getting Started

Clone the repo to your local machine.

In /simpleserver/ ...
* (optional) setup environment variables - a .env file with PORT and LOCALHOST values for your server. 
* npm install
* npm knex migrate:latest
* npm knex seed:run
* run the server with 
```
nodemon server.js
```

In /pirate-radio/ ...
* (optional) setup environment variables - a env.js file which contains
```
    REST_PORT: <server PORT>,
    SOCKET_PORT: 3003,
    LOCALHOST: <your server ip>
```
* npm install
* run the app with 
```
npm start
```
* launch an emulator on your local machine from terminal with i or a. Launch the app on your mobile device through the expo app

## Built With

* [Expo](https://expo.io/) - Expo is a free and open source toolchain built around React Native to help you build native iOS and Android projects using JavaScript and React.
* [React-Native](https://facebook.github.io/react-native/) - React Native lets you build mobile apps using only JavaScript. It uses the same design as React, letting you compose a rich mobile UI using declarative components.

## Authors

* **Dawson Lee** - [Anarchonist7](https://github.com/Anarchonist7)

* **Aaron Rosenberg** - [aaronrbg](https://github.com/aaronrbg)

* **Eric Wilson** - [eeedubs](https://github.com/eeedubs)

List of [contributors](https://github.com/Anarchonist7/Fresh_Radio/graphs/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Thank you for the mentor support at Lighthouse Labs Vancouver