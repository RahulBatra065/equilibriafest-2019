# equilibriafest-2020
Equilibria Fest 2020 Website

## Explicit branch --> actual-website-2
 Refers to 1/2 ideas for the end website
 intend to merge with master asap
## Structure
 The frontend will follow a custom revision of the vanilla implementation of the classic version of Express Server

  ```
|
|--index.html
|
|--css/
|------*.css
|
|
|--js/
|------*.js
|
|
|--bower_components/
|------------------materialize
|------------------slick-carousel
|------------------jquery
|
|--LICENSE
```

### To run the website
 Depending on the production stage of the website the command to run the website stage
  #### before the end conversion stage ( wo/ ejs and marked)
 with the assumption that the user has the NPM and the live-server package installed
 ```
     live-server
     npm install -g live-server
     live-server

 ```
### Note
We assume that the user testing the website is running some form of the darwin kernel, this is because the environment runs on an darwin kernel , the packages are not tested to run on the windows command prompt (Please consider using WSL2 or https://en.wikipedia.org/wiki/List_of_terminal_emulators any of these ) .
It is also in good faith that I do not convert to webpack or yarn simply due to ease and not needing to navigate through the sub modules themselves

## Hosting
The entire frontend is run on a combination of netlify and heroku + sendgrid
 ### Details
```
──────────────────────┐
 Current Netlify User │
──────────────────────┘
Name:  Rahul Batra
Email: rahulbatra065@gmail.com
Teams:
  Rahul Batra's team: Collaborator
  nodedps's team:     Collaborator
────────────────────┐
 Netlify Site Info  │
────────────────────┘
Current site: boring-lichterman-774dd9
Admin URL:    https://app.netlify.com/sites/boring-lichterman-774dd9
Site URL:     https://boring-lichterman-774dd9.netlify.com
```


 ### Statuses
 [![Netlify Status](https://api.netlify.com/api/v1/badges/a3da14c4-1c39-4e81-97c5-f156e6a7a7de/deploy-status)](https://app.netlify.com/sites/boring-lichterman-774dd9/deploys)
 [![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/Naereen/StrapDown.js/graphs/commit-activity)
 [![made-with-Markdown](https://img.shields.io/badge/Made%20with-Markdown-1f425f.svg)](http://commonmark.org)

 [![forthebadge](https://forthebadge.com/images/badges/cc-0.svg)](https://forthebadge.com)
 [![forthebadge](https://forthebadge.com/images/badges/contains-technical-debt.svg)](https://forthebadge.com)
 [![forthebadge](https://forthebadge.com/images/badges/made-with-crayons.svg)](https://forthebadge.com)
 [![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)
 [![forthebadge](https://forthebadge.com/images/badges/uses-git.svg)](https://forthebadge.com)
 [![forthebadge](https://forthebadge.com/images/badges/uses-css.svg)](https://forthebadge.com)




#### Backend Configs

```
Master --> https://boring-lichterman-774dd9.netlify.com/
Actual Website --> https://admiring-torvalds-77ede8.netlify.com
```



##### The End
 Made with love, Rahul Batra, Symbiosis School of Economics 2019!        
 [![Generic badge](https://img.shields.io/badge/RAHUL%20BATRA-2019-GREEN.svg)](https://rahulbatra.in)
