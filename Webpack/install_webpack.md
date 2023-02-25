mkdir learn-webpack
cd learn-webpack
npm init -y


npm init -y is a command used in Node.js projects to quickly generate a package.json file with default values for a new project, 
without requiring the user to enter any additional information.

The npm init command initializes a new Node.js project and creates a package.json file, which contains important metadata about the project, such as its name, 
version, description, author, dependencies, and more. By default, when you run npm init, you'll be prompted to answer a series of questions to populate the 
package.json file.

However, when you add the -y flag to the command, it tells npm to accept all the default values without prompting the user for any input. 
This is useful if you want to quickly generate a package.json file without having to manually enter all the information.

For example, to create a new project with default values, you can open your terminal, navigate to the directory where you want to create the project, and type:

csharp
Copy code
npm init -y
This will create a package.json file in the current directory with default values. You can then modify the values in the package.json file as needed for your project.


Next, we need to install webpack and webpack CLI (command line interface) locally:

npm install webpack webpack-cli --save-dev

Now, the content of the generated package.json should be similar to the following:

{
  "name": "learn-webpack",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "webpack": "^5.9.0",
    "webpack-cli": "^4.2.0"
  }
}
Besides being a package manager, npm can be used as a simple task runner. We can create webpack tasks by including the name of our task followed by its instructions in the scripts section of the package.json file. Let’s try this now. Open package.json and change the scripts object to the following:

"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "dev": "webpack --mode development",
  "build": "webpack --mode production"
},


Within the scripts property, npm allows us to reference locally installed Node.js packages by their names. We use that and the --mode flag to define dev and build tasks, which will run webpack in development (npm run dev) and production (npm run build) mode respectively.

Before we test the tasks we’ve just created, let’s create a src directory and put an index.js file in it so that it contains console.log("Hello, Webpack!");. Now we can already run the dev task to start webpack in development mode:

$ npm run dev

> learn-webpack@1.0.0 dev C:\WEBDEV\learn-webpack
> webpack --mode development

[webpack-cli] Compilation finished
asset main.js 874 bytes [emitted] (name: main)
./src/index.js 31 bytes [built] [code generated]
webpack 5.9.0 compiled successfully in 122 ms


As I mentioned before, webpack sets the default entry point to ./src/index.js and the default output to ./dist/main.js. So what webpack does when we run the dev task is to get the source code from index.js file and bundle the final code in a main.js file.

Great! It works as expected. But to verify that we get the correct output, we need to display the result in the browser. To do that, let’s create an index.html file in the dist directory:

<!doctype html>
<html>
  <head>
    <title>Getting Started With Webpack</title>
  </head>
  <body>
    <script src="main.js"></script>
  </body>
</html>
Now, if we open the file in the browser, we should see the Hello, Webpack! message in the console.
