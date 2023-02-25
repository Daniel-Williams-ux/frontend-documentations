To install jQuery as a regular dependency using npm, follow these steps:

Open your terminal or command prompt.

Navigate to your project directory using the cd command.

Run the following command to install jQuery:


npm install jquery --save
The --save option will add jQuery to the dependencies section of your package.json file.

You can now use jQuery in your project by including it in your JavaScript files using the following code:

const $ = require('jquery');
or if you are using ES6 modules:

import $ from 'jquery';
Alternatively, you can also use the shorthand version of the npm install command, which combines the install and --save options into a single command:

Copy code
npm install jquery -S
This will also add jQuery to the dependencies section of your package.json file.
