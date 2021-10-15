
# Welcome to LGBTQ+ Daily!

Our idea for the LGBTQ+ hackathon was to create a daily information hub wherein people can read inspirational stories from others within in the community and receive suggestions for LGBTQ+ inclusive content such as events, books, podcasts and even a daily song suggestion.
Each day, a new set of information will display on the website, so there is always something new to learn. The main idea was to have a story a day from someone within the LGBTQ+ community, perhaps describing their coming out story or any experiences they may have had that could help someone else.
We also decided to add additional sections, such as events in Leeds that are LGBTQ+ inclusive, to enable people to connect with others while exploring new hobbies. The comment section further allows people to discuss the content, meet new people, and create a sense of community.
This idea has endless possibilities. With more time, more categories could be added and additional user sign in functionality can be added so people can have profiles, chat with others and submit their own suggestions for content.


## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Docker run
We have created a docker container to be able to use docker to run the application for ease of use.

```bash
FROM node
ENV PORT=80
RUN cd /opt && git clone https://github.com/leahjwoodhead/hackathon.git
WORKDIR /opt/hackathon
RUN npm install --prefer-offline --no-audit
CMD ["npm", "start"]
EXPOSE 80
```


#### How do you run it?
You will need to build the Dockerfile in the project directory.

```bash
docker build -t lgbtq/daily .
```
Once built, you can run the image:
```BASH
docker run \
-dit \
--name test1 \
-p 3000:80 \
--env "VIRTUAL_HOST=lgbtqdaily.techawareprojects.co.uk" \
--env "VIRTUAL_PORT=80" \
lgbtq/daily
```

Eventually once we're happy with this project, we will put this container on dockerhub to pull from instead.


### Future database configurations
As we don't have a database or api server set up currently. Here is a diagram on how we can connect our REACT app to the database. Ideally we would like to have a API server to interact with the database to concurrent requests and scalability.

![Database](https://user-images.githubusercontent.com/71640543/137460414-fa5c671f-cd48-4453-a667-0b501ffb2134.png)

