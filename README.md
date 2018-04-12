# webpack-template
This is a simple webpack project template. To fast init.

If one wants to start new project and don`t want to spend time for writing config, 
install packages ang create file structure - just clone this.

## Inside

I make pages with Pug at `./src/pages/page/page.pug` and styles with SCSS at `./src/pages/page/page.scss`.
Components are all together now, but could be separated into inner directories.
Webpack module rules are exported into particular files at `./webpack/`.

I don`t use hot reload. Instead I use NodeJS included server module. 
To init server use in terminal this command: 
```
http-server build
```

## Steps

And be attentive in this procedure. If you get troubles - just begin at first step

```
// 1. clone file architecture of branch "master" into your projects dir and set your project name
git clone https://github.com/Frame25/webpack-template.git <your_project_name>

// 1.1 if you want some other branch do this:
git clone -b <branch-name> https://github.com/Frame25/webpack-template.git <your_project_name>

// 2. get into your project directory
cd <your_project_name>

// 3. remove current .git directory to unlink with this project
rm -rf .git

// 4. init new empty git directory
git init

// 4.1 link to your remote repository if you want
git remote set-url origin https://github.com/your_name/your_repo.git

// 5. install packages
npm i 
```
To build your files use command:
```
npm run build
```
To watch files and bundle use command: 
```
npm run watch
```

## Branches

There are several versions: 
1. The very simple project witout any framework, only Vue
to call: 
```
git checkout master
```
2. With framework [Bootstrap-Vue](https://bootstrap-vue.js.org/docs/), that gives us all Bootstrap styles and components made on Vue, not on jQuery
to call: 
```
git checkout bootstrap-vue
```


## Notes

Today (9.04.18) there some troubles with `webpack@^4.0.0`, so installed v.3.6.0, 
also troubles with latest `html-webpack-plugin`, so installed v.3.0.6
