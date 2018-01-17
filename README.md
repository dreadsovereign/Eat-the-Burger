# Eat the Burger

A Burger Eating Application With Node.js/Express/MySQL/Handlebars/Materialize

## Description

This application demonstrates a simple full stack application with a front end using HTML/CSS and elements from the Materialize framework. The backend uses Node.js and Express. HTML templating is done with the help of Handlebars.


The user enters the name of the burger to add it to the menu. Doing this also adds it to the MySQL database. After this, the burger will appear on the left side of the screen. The user then "eats" the burger by clicking on the name of the burger, which will move it to the right-hand side of the screen, which will then update its status in the database.

## Demo

A demo of the deployed application can be seen [here](https://calm-mesa-83440.herokuapp.com/)

## Installation

To install, follow the instructions below:

    git clone git@github.com:dreadsovereign/burger.git
    cd burger
    npm install

## Running Locally

    To run the application locally and access it in your browser, first set the `PORT` environment variable to the value of your choice. An example is shown below.

	export PORT=3000
	
After the `PORT` environment variable has been set, run the Node.js application with the command below.

	node server.js
	
The application will now be running locally on `PORT`, in this case that is port 3030. You can then access it locally from your browser at the URL `localhost:PORT`, in this case `localhost:3000`.



