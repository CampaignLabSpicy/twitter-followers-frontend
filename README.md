This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### running in production
Follow the instructions in [the backend repo](https://github.com/CampaignLabSpicy/twitter-followers-api) to run the app.
If `Error: Request failed with status code 404` shows in red once you are logged in, you may need to add the line `"proxy": "http://localhost:8080",` to package.json. **REMOVE this line again before pushing up to the repo!**
You may also need a fallback value of `API_URL` in constants.js, so that 
`export const API_URL = process.env.REACT_APP_API_URL || 'localhost:8080'`

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
