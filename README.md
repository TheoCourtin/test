# Angular
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.4.

# angular
Ce projet utilise MEAN stack:

* M - MongoDB
* E - ExpressJS - Server 
* A - AngularJS - Client 
* N - Node - Package manager

Autre outils et technologies utilisés :
* Mongoose - Schéma pour modéliser les données
* JSON Web Token - Méthode sécurisée d’échange d’informations,  (jwt-simple)
* Bcryptjs - Chiffrer les mots de passes
* CORS - 

### Lancer l'application
Cloner le dépôt

Installation des dépendances :

`npm install`

Avant de lancer la base MongoDB, il faut insérer le fichier confirmed.json dans MongoDB collection covid :

Le fichier peut-être récupérer à l'adresse suivante : `https://github.com/CSSEGISandData/COVID-19/blob/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Confirmed.csv`

Lancer en premier MongoDB :

`mongod`

Lancer le serveur en JS dans le dossier node-token-based-authentication-master:

`node server.js`

Puis lancer Angular :

`ng serve` ou `ng s`







