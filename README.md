# RickAndMorty

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Credentials
This App contains fake credentials that generates a fictitial token.
You have to login with:
```
email: rick@morty.com
password: ImRickAndYouAreMorty
```
If you aren't register you wont be able to use this app.
Episodes page contains a guard that deny access if you aren't logged

## Producction
To execute this project in GitHub pages follow the next steps

1. __Install angular-cli-ghpages__
```
npm i angular-cli-ghpages
```

2. __Add angular-cli-ghpages to your project__
```
ng add angular-cli-ghpages
```
3. __Deploy your App__
```
ng deploy --repo=https://github.com/Armando101/RickAndMortyApp.git --base-href=https://armando101.github.io/RickAndMortyApp/
```

4. __Enjoy RickAndMortyApp__  
Click the next link to use  
https://armando101.github.io/RickAndMortyApp/home

## Features
- __Home__
Home page show a message and button to login
![Home](https://raw.githubusercontent.com/Armando101/RickAndMortyApp/master/src/assets/ss/home.png)

- __Login__
If you aren't logged you can't use this app
![Login](https://raw.githubusercontent.com/Armando101/RickAndMortyApp/master/src/assets/ss/login.png)

- __Episodes__
You can watch information about episodes availvable
![Episodes](https://raw.githubusercontent.com/Armando101/RickAndMortyApp/master/src/assets/ss/episodes.png)

- At the End of the page you can find arrows to see more episodes
![EpisodesNav](https://raw.githubusercontent.com/Armando101/RickAndMortyApp/master/src/assets/ss/BottomNav.png)

- __Characters__
If you click episode detail you can watch all characters that appers in that episode
![Characters](https://raw.githubusercontent.com/Armando101/RickAndMortyApp/master/src/assets/ss/characters.png)
