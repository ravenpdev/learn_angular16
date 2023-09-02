# Angular

**ng build**

Generate the following files and inject to the index.html

1. runtime.js - webpack runtime file
2. polyfills.js - help to support modern browsers, not all browser support modern javascript
3. main.js - the application code. convert typescript code to javascript
4. styles.css, styles.js - styles.css will be bundle into a javascript
5. vendor.js - contains the script from the angular core library and third party libraries

**Angular CLI uses Webpack to traverse through our Angular app & it bundles JS & other files into one or more bundles.**
