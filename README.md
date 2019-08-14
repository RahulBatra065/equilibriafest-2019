# equilibriafest-2020
Equilibria Fest 2020 Website
 ## Structure
 The frontend will follow a custom revision of the vanilla implementation of the classic version of Express Server 
  with EJS and marked-down rendering
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
|
|------------------jquery
|
|---index.js
|
|--procfile
|
|--app.js
|
|--text.js
|
|--package-lock.json
|
|--LICENSE
|
|--node_modules
|----- TL;DR a million node_modules to support the unified backend of the server NEVER MESS THIS
```

### To run the website
 Depending on the production stage of the website the command to run the website stage
  #### before the end conversion stage ( wo/ ejs and marked)
 with the assumption that the user has the NPM and the live-server package installed 


     ```
     live-server
     ```



 Alternatively, 
     ```
     npm install -g live-server
     live-server
     ```



#### after or in between the end conversion stage (w/ ejs and marked) a series of command have to be executed to ensure correct rendering of the ejs files
      ```
      npm install 
      npm install express marked
      node install
      ```
### Note
We assume that the user testing the website is running some form of the darwin kernel, this is because the developer uses a Mac which uses a modified version of the darwin kernel, the packages are not tested to run on the windows command prompt (Please consider using WSL2 or https://en.wikipedia.org/wiki/List_of_terminal_emulators any of these ) .
It is also in good faith that I do not convert to webpack or yarn simply due to ease and not needing to navigate through the sub modules themselves
### Assumptions
I assume that the user going through the code base has a working knowledge of node.js express materialize and jquery.
Additionally md for github, md rendering and error handling in node.js and express.


## Hosting
The entire frontend is run on a combination of netlify and heroku with bare-minimal cpu usage to ensure minimum costs
However, in the future for mailing sub-systems we may consider using lower end plans
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
  ### Branches
  The website is hosted through 2 branches 
  1)Master
  2)Actual Website
the master branch runs the master website (eq.com) while the actual website branch runs the subdomain (frontend.eq.com)
#### Backend Configs

```
Master --> https://boring-lichterman-774dd9.netlify.com/
Actual Website --> https://admiring-torvalds-77ede8.netlify.com
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

##### The End
 Made with love, IT Cell, Symbiosis School of Economics 2019!              
 [![Generic badge](https://img.shields.io/badge/RAHUL%20BATRA-2019-GREEN.svg)](https://rahulbatra.in)


 ### Plugins readme

 ##### jQuery

> jQuery is a fast, small, and feature-rich JavaScript library.

For information on how to get started and how to use jQuery, please see [jQuery's documentation](http://api.jquery.com/).
For source files and issues, please visit the [jQuery repo](https://github.com/jquery/jquery).

If upgrading, please see the [blog post for 3.4.1](https://blog.jquery.com/2019/05/01/jquery-3-4-1-triggering-focus-events-in-ie-and-finding-root-elements-in-ios-10/). This includes notable differences from the previous version and a more readable changelog.

## Including jQuery

Below are some of the most common ways to include jQuery.

### Browser

#### Script tag

```html
<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
```

#### Babel

[Babel](http://babeljs.io/) is a next generation JavaScript compiler. One of the features is the ability to use ES6/ES2015 modules now, even though browsers do not yet support this feature natively.

```js
import $ from "jquery";
```

#### Browserify/Webpack

There are several ways to use [Browserify](http://browserify.org/) and [Webpack](https://webpack.github.io/). For more information on using these tools, please refer to the corresponding project's documention. In the script, including jQuery will usually look like this...

```js
var $ = require("jquery");
```

#### AMD (Asynchronous Module Definition)

AMD is a module format built for the browser. For more information, we recommend [require.js' documentation](http://requirejs.org/docs/whyamd.html).

```js
define(["jquery"], function($) {

});
```

### Node

To include jQuery in [Node](nodejs.org), first install with npm.

```sh
npm install jquery
```

For jQuery to work in Node, a window with a document is required. Since no such window exists natively in Node, one can be mocked by tools such as [jsdom](https://github.com/tmpvar/jsdom). This can be useful for testing purposes.

```js
require("jsdom").env("", function(err, window) {
	if (err) {
		console.error(err);
		return;
	}

	var $ = require("jquery")(window);
});
```

