# My notes for this project 
I took this opportunity to use and explore tools/libs ('@reduxjs (new toolkit version)', '@mui/material', 'msw', 'react-router-dom: 6') that where brand new to me.
I developed a React + Redux application with a minimal UI for the features requested having in mind performance, accessibility and SEO.

Important notes:
- This app is using Redux query data fetching with <b>caching</b> (it keeps used data for 60 seconds after last component unsubscribes)
  you can check this behavior in chrome Redux Devtools or simply by checking the network tab.
- I've installed emotion it's my go to CSS-in-JS (it's what I'm more used to).
- I opted to use Proptypes for type checking.
- All application is tested (excluding the all the index.js) 
- You can navigate the application using only tab's & enter 
- I've added an extra functionality ability to add a new post ('POST') in the posts page (add post button)

- Node: v14.17.0
- Yarn: v1.22.15

## Next Steps

Some tasks could be done to improve this app:
- Transition to Typescript (takes more time but has a lot of advantages in my point of view)
- Add server side render, with redux this is a must to improve first page load performance.
- Add a pagination
- Improve Styling and overall look and feel (also more in depth usage of material ui)
- Add missing information on some components

## Run Setup

- yarn install (first time usage)
- yarn start


