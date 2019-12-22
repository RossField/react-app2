# Setting up React from scratch

Original instructions sre from [here](https://blog.usejournal.com/setting-up-react-webpack-4-babel-7-from-scratch-2019-b771dca2f637)

Open windows powershell

```bash
mkdir react-app2
cd react-app2
```

`code .` to start vs code with the current folder open. New file this one (`README.md`)

```bash
npm init -y
npm i react react-dom
npm i @babel/core babel-loader @babel/preset-env @babel/preset-react @babel/polyfill --save-dev
npm i webpack webpack-cli --save-dev
npm i webpack-dev-server --save-dev
npm i html-webpack-plugin html-loader --save-dev
```

In vs-code edit package.json so the scripts section includes:
```json
"scripts": {
  "start": "webpack-dev-server --open --hot --mode development",
  "build": "webpack --mode production"
}
```

Create `.babelrc` file
Create `index.html` file
Create `index.jsx` file
Create `webpack.config.js` file


## When developing run the webpack-dev-server
```bash
npm start
```

## To deploy an optimized build (in the dist folder)
```bash
npm run build
```

## To add code to git
Create a `.gitignore` file with `dist` & `node_modules` and create an empty repository in your github account. Then: 
```bash
git init
git add .
git commit -m "Initial Commit"
git remote add origin git@github.com:RossField/react-app2.git
git push -u origin master
```

## Links
[vscode](https://code.visualstudio.com/docs/setup/windows)

[nvm for windows](https://github.com/coreybutler/nvm-windows)

[ssh git setup](https://dev.to/bdbch/setting-up-ssh-and-git-on-windows-10-2khk) - So you don't need un/pw everytime you push to you own git account

[Install yarn](https://yarnpkg.com/lang/en/docs/install/#windows-stable) - yarn is an alternative to npm
