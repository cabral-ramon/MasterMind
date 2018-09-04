# React MasterMind

## What is React MasterMind?

This is a web implementation of the MasterMind Board game https://en.wikipedia.org/wiki/Mastermind_(board_game).
Essentially the goal of the game is to guess a unique 4 letter code. In this implementation of the game, the code is constructed using a set of 4 different numbers and you have 10 tries to guess the code. There are some helpful hints and feeback to help you along the way.
The game is hosted live on Heroku https://pacific-wave-19521.herokuapp.com/. The app is hosted on a free Heroku projet account therefore, please expect the initial load of the application to take up to 10-15 seconds.

## How was this built?

As the name suggests, this application was built using React & Redux on the front end.
Bootstrap and CSS was used to style the application. A Ruby on Rails API and PostgreSQL database were used to serve the back-end.

## Challenges building this application

One of the major challenges I faced in building this application was deploying and serving both the React frontend and Rails backend in one bundle. While I have done this a handful of times before. It can be tricky configuring everything accordingly to run in development and production as expected.

## How to run the application locally

I do not recommend running this locally unless you already have the following installed on your machine.
Rails 5.2
Ruby 2.5.1
Node 8.11.3
PostgreSQL 9.6

Download the repository, bundle install all the gem dependencies from the root directory and npm modules from the client directory.
`rails db:create db:migrate` to set up the database.
`rails db:seed` for a few pieces of seed data.
`rails s -p 3001` to run the rails server on port 3001 (create-react-app runs on 3000 which conflicts with Rails server default).
While keeping the rails server running navigate to the client directory and run `npm start`
