# Book-Buster

Book-Buster is a full-stack MERN (MongoDB, Express, React, Node.js) application that allows users to search for books, save their favorite books, and view their saved books. This project uses GraphQL for handling API requests and Apollo Client for managing GraphQL operations on the client-side. It also implements authentication and authorization using JWT.

## Table of Contents
Installation
Deployed Application
Technologies Used
Screenshot
License

## Installation
Clone the repository:

git clone https://github.com/DuleskyJ/Book-Buster.git
cd Book-Buster/Develop

Install server dependencies:

cd server
npm install

Install client dependencies:

cd ../client
npm install

Set up environment variables:

Create a .env file in the Develop/server directory and add the following environment variables:

MONGODB_URI=<your-mongodb-connection-string>

Build the client:

bash
Copy code
npm run build
Usage
Start the server:

cd Develop/server
npm start

Access the application:

Open your browser and go to the URL provided by Render, which should look something like https://your-app-name.onrender.com. 

## Deployed Application 
https://book-buster-26ln.onrender.com/

## Technologies Used
MongoDB: NoSQL database for storing user and book data.
Express: Web framework for Node.js to handle server-side operations.
React: Front-end library for building user interfaces.
Node.js: JavaScript runtime for building the server-side application.
GraphQL: Query language for APIs to handle data fetching.
Apollo Client: Comprehensive state management library for JavaScript to manage GraphQL data.
JWT: For user authentication and authorization.
Features
Search Books: Users can search for books using the Google Books API.
Save Books: Users can save books to their profile.
View Saved Books: Users can view a list of books they have saved.
Authentication: Users can sign up and log in to save and view books.

## Screenshot
![Screenshot (53)](https://github.com/DuleskyJ/Book-Buster/assets/153566037/922b80cd-e36e-45b1-92d2-9d59a9cbd807)

## License
This project is licensed under the MIT License.

