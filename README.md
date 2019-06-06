# MyReads: A Book Traking App
## Project of UDACITY React Nanodegree Program

UDACITY React Nanodegree Program link:  https://www.udacity.com/course/react-nanodegree--nd019.

This is a book tracking app allows you to select and categorize books you have read, are currently reading, or want to read. 

## Installing

1. Create Viirtual Mashine with Ubuntu 16

2. Install packages for React
    
              sudo apt-get install curl
              curl -sL https://deb.nodesourse.com/setup_8.x | sudo -E bash-
              sudo apt-get install -y nodejs
              sudo apt-get install -y build-essential
              sudo apt-get install git
              sudo npm install -g create-react-app
              sudo npm install --save prop-types
              sudo npm install --save escape-string-regexp sort-by
              sudo npm install --save react-router-dom
              sudo npm install --save form-serialize
              sudo npm install -global json-server
              
 3. Create new react app
 
              npx create-react-app [name of project]
              cd [name of project]

4. Clone information from this repositorie

             git clone https://github.com/Kuldyaev/ReactMyReads

5. You need to copy PUBLIC abd SRC directory from cloning repositorie to your project [name of project]

6. From directory [name of project] we start json-server

            $/[name of project]:   json-server --watch public/books.json

7. In the project directory, you can run:

            $/[name of project]:npm start

8. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
May be you need check [http://localhost:3001](http://localhost:3001), because port 3000 used by json-server


![demo](https://github.com/Kuldyaev/ReactMyReads/blob/master/src/icon/ft.JPG) 




This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
