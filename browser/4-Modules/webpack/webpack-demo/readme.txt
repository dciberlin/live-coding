Part 1:  Getting Started
==========================

1. 
mkdir webpack-demo
cd webpack-demo
npm init -y
npm install webpack webpack-cli --save-dev

2. Create folder structure

  webpack-demo
  |- package.json
+ |- index.html
+ |- /src
+   |- index.js


3. Edit package.json 

Remove  "main": "index.js",  from package.json file and put "private" :true

4. Creating a Bundle

  webpack-demo
  |- package.json
+ |- /dist
+   |- index.html
- |- index.html
  |- /src
    |- index.js

To bundle the lodash dependency with index.js, we'll need to install the library locally:

    npm install --save lodash

Edit : src/index.js,   import lodash in our script.
Edit : dist/index.html, we removed lodash entery and src/index.js and put main.js.

5. Run command npx webpack

6. Create new config file webpack.config.js and add the following code which can connect source and output file.
const path=require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname,'dist'),
    },
};

7. Run command npx webpack --config webpack.config.js

8. Apply NPM Scripts command inside package.json and do the following changes.

 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack"
  },

  9. Run the command :    npm run build 

  10. Our final project look like :

  webpack-demo
|- package.json
|- webpack.config.js
|- /dist
  |- main.js
  |- index.html
|- /src
  |- index.js
|- /node_modules


Part 2:  Asset Management
==============================

1. Change the following files
 dist/index.html

  <!doctype html>
  <html>
    <head>
-    <title>Getting Started</title>
+    <title>Asset Management</title>
    </head>
    <body>
-     <script src="main.js"></script>
+     <script src="bundle.js"></script>
    </body>
  </html>

2. change webpack.config.js

  const path = require('path');

  module.exports = {
    entry: './src/index.js',
    output: {
-     filename: 'main.js',
+     filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
  };


3. Loading CSS

npm install --save-dev style-loader css-loader

3.1  change webpack.config.js

 const path = require('path');

  module.exports = {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
+   module: {
+     rules: [
+       {
+         test: /\.css$/,
+         use: [
+           'style-loader',
+           'css-loader',
+         ],
+       },
+     ],
+   },
  };

3.2  Project directory overview

    webpack-demo
  |- package.json
  |- webpack.config.js
  |- /dist
    |- bundle.js
    |- index.html
  |- /src
+   |- style.css
    |- index.js
  |- /node_modules

3.3  Change  src/style.css

.hello {
  color: red;
}

3.4 Change src/index.js

  import _ from 'lodash';
+ import './style.css';

  function component() {
    const element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
+   element.classList.add('hello');

    return element;
  }

  document.body.appendChild(component());

  3.5 Now run command : npm run build


4. Loading Images

4.1 Install loaders

npm install --save-dev file-loader

4.2 Change webpack.config.js

 const path = require('path');

  module.exports = {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ],
        },
+       {
+         test: /\.(png|svg|jpg|gif)$/,
+         use: [
+           'file-loader',
+         ],
+       },
      ],
    },
  };

  4.3  Project directory structure

    webpack-demo
  |- package.json
  |- webpack.config.js
  |- /dist
    |- bundle.js
    |- index.html
  |- /src
+   |- icon.png
    |- style.css
    |- index.js
  |- /node_modules

  4.4 Change src/index.js

  import _ from 'lodash';
  import './style.css';
+ import Icon from './icon.png';

  function component() {
    const element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

+   // Add the image to our existing div.
+   const myIcon = new Image();
+   myIcon.src = Icon;
+
+   element.appendChild(myIcon);

    return element;
  }

  document.body.appendChild(component());


4.5 Change src/style.css

  .hello {
    color: red;
+   background: url('./icon.png');   /* this is optional */
  }

4.6 Run NPM command : npm run build

5. Loading Fonts

loading fonts need file-loader and it is already installed.

5.1 Change webpack.config.js

const path = require('path');

  module.exports = {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ],
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            'file-loader',
          ],
        },
+       {
+         test: /\.(woff|woff2|eot|ttf|otf)$/,
+         use: [
+           'file-loader',
+         ],
+       },
      ],
    },
  };

  5.2 Project directory structure

  webpack-demo
  |- package.json
  |- webpack.config.js
  |- /dist
    |- bundle.js
    |- index.html
  |- /src
+   |- my-font.woff
+   |- my-font.woff2
    |- icon.png
    |- style.css
    |- index.js
  |- /node_modules

5.3 Change src/style.css

+ @font-face {
+   font-family: 'MyFont';
+   src:  url('./my-font.woff2') format('woff2'),
+         url('./my-font.woff') format('woff');
+   font-weight: 600;
+   font-style: normal;
+ }

  .hello {
    color: red;
+   font-family: 'MyFont';
    background: url('./icon.png');
  }

5.4 Run npm command : npm run build

6. Loading Data

To import CSVs,TSVs, and XML you use the csv-loader and xml-loader.

npm install --save-dev csv-loader xml-loader

6.1 Change webpack.config.js


const path = require('path');

  module.exports = {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ],
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            'file-loader',
          ],
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
            'file-loader',
          ],
        },
+       {
+         test: /\.(csv|tsv)$/,
+         use: [
+           'csv-loader',
+         ],
+       },
+       {
+         test: /\.xml$/,
+         use: [
+           'xml-loader',
+         ],
+       },
      ],
    },
  };

6.2 Project directory structure

webpack-demo
  |- package.json
  |- webpack.config.js
  |- /dist
    |- bundle.js
    |- index.html
  |- /src
+   |- data.xml
    |- my-font.woff
    |- my-font.woff2
    |- icon.png
    |- style.css
    |- index.js
  |- /node_modules


6.3 Create file at src/data.xml

<?xml version="1.0" encoding="UTF-8"?>
<note>
  <to>Mary</to>
  <from>John</from>
  <heading>Reminder</heading>
  <body>Call Cindy on Tuesday</body>
</note>

6. 4 Change file src/index.js

import _ from 'lodash';
  import './style.css';
  import Icon from './icon.png';
+ import Data from './data.xml';

  function component() {
    const element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    // Add the image to our existing div.
    const myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);

+   console.log(Data);

    return element;
  }

  document.body.appendChild(component());

6.5 Run the npm command : npm run build


--------- Now Let's set two different environment command in package.json ----------

  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack",
    "prod": "webpack --mode production",
    "dev" : "webpack --mode development --watch"
  },

  Here "--watch" it means no need to run again npm run command for applying change, just refresh the browser.
