# Init-express
This repository contains the code for a simple web application that contains three pages: Home, Our Services, and Contact Us. 
The application is built using Express.
## Requirements

1. Node.js
2. Express 

## Pages

The application contains the following pages:

### Home
The Home page contains a welcome message and a brief description of the services offered.

### Our Services
The Our Services page contains a list of the services offered, along with a brief description of each service.

### Contact Us
The Contact Us page contains a form for users to submit a message to the site administrator.

## Custom Middleware
The application includes custom middleware to verify the time of each request. 
The middleware checks if the request is being made during working hours (Monday to Friday, from 9 to 17) 
and only allows requests to be processed during these times. 
If a request is made outside of working hours, the middleware returns an error message.

## Template Engine
I have used the Pug template engine to create HTML pages. 
The Pug template engine allows us to use variables and logic in our HTML code to make the pages more flexible and reusable.

---
# Conclusion

I used Express to create a web application with three pages, implemented custom middleware to verify request time,
and used CSS and the Pug template engine to style and create dynamic HTML pages. 
This project has given me a good understanding of basic web application development using Express.
