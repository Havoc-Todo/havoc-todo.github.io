To generate the files that are served here:

* clone havoc-web -- git clone https://github.com/Havoc-Todo/havoc-web.git

* install dependencies -- npm install

* run deployment script -- npm run deploy:prod

* Files are generated in ./dist directory


To update the files served here: 

* clone this repo -- git clone https://github.com/Havoc-Todo/havoc-todo.github.io.git

* copy and paste the files in ./dist to this repo

* commit the changes -- git commit -m "updated served files"

* push to origin to update the files served here -- git push origin master

NOTE:

The web front-end uses react-router, which is funny. Files must be served at the root of a domain. With github pages, this means that the serving repo must be a user or organization gh-pages repo.

