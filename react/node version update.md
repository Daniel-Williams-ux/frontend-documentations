## **node version update**

1. First, update your package manager with the command:
   sudo apt-get update

2. Install curl if it's not already installed with the command:
   sudo apt-get install curl

3. Install NodeSource's repository for the specific Node.js version you want to install. For example, to install Node.js 14.x, you can use the following command:
   curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -

 Note: Replace 14.x with the desired Node.js version you want to install.

4. Once the repository is added, run the following command to upgrade to the specified version of Node.js:
   sudo apt-get install -y nodejs

5. To verify the Node.js version, you can use the following command:
    node -v
