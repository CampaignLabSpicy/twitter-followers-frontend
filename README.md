This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### setting environment vars
You need to set `REACT_APP_API_URL`.

### running in production
Follow the instructions in [the backend repo](https://github.com/CampaignLabSpicy/twitter-followers-api) to run the app.
That README refers to setting up a .env file.
You need to set up a second .env file for the frontend.
Same thing - `cp .env.example .env` so that it contains `REACT_APP_API_URL= http://localhost:8080`.

If `Error: Request failed with status code 404` shows in red once you are logged in, you may need to add the line `"proxy": "http://127.0.0.1:8080",` to package.json. **REMOVE this line again before pushing up to the repo!**

If `Error: Request failed with status code 404` shows in red once you are logged in, you may also need a fallback value of `API_URL` in constants.js, so that 
`export const API_URL = process.env.REACT_APP_API_URL || '127.0.0.1:3000'`
NB localhost does not work instead of 127.0.0.1. Axios will choke on localhost because it doesn't contain enough dots :angry: (some people have found localhost works though, try it if you are stuck)

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Troubleshooting for running locally

* Don't forget to visit the api server in your browser, you might need to try 127.0.0.1 and/or localhost
