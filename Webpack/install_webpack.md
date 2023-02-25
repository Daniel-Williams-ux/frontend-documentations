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
