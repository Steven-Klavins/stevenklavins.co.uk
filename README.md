This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

[Test deploy link](https://stevenklavins.netlify.app/)

## About 
It was not long ago I deployed a portfolio website so you may ask why a new one already? There are a number of reasons why I felt the need for this, the first being my previous site lacked responsive design. So I returned to the drawing board and I'm now happy to say this new rendition is mobile-friendly and will adapt to any given screen.

The second reason for rebuilding my site with all honesty is I rushed the project first time around, I knew I could have done better. This time I took the time to make additional planning and ultimately it paid off.

The third reason was site was not hosted on a custom domain, whilst this not being crucial it was something that was bugging me. I have now bought a domain and the site is due to be hosted via TSO. At present, it is once more deployed on Netlify but will soon be on a custom domain once I sorted out a new SSL certificate. 

The fourth reason was due to poor optimization, a number of the components were not loading fluently and it was unusable on a mobile network. This was something I wanted to fix asap as it would not leave a good impression opening a website to broken CSS and half loaded images.

## Technology used 
This site was built using the following tech stack. 
#### React, Javascript, Jest, Axios, Framer Motion, CSS, HTML, react-3d-viewer, react-image-gallery, Git's Rest API, and Flickr's developer API. 


## Challenges with optimization 

A big challenge I found throughout this project was optimizing my components in order to facilitate a fast loading time and a fluent user experience. Despite this issue not being fully resolved, I provided fallbacks through Reacts suspend feature, this means if a component was to load slowly the user will see a loading message appose to a blank space. 

There are two key components that suffer from this issue, my notable project cards and photo gallery. I suspect the reason these two components suffer from this problem is due to the API calls they make. In both cases, these components need to first retrieve a JSON, then process that information and render it into the component itself.  This is something I'll have to do a little more research on however the fallback serves its purpose for the time being.

## API usage

## Deployment 

## Testing 

## What I learned from the project 

## Further improvements 

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
