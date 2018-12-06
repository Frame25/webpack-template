# webpack-template
This is a simple webpack project template. To fast init.

If one wants to start new project and don`t want to spend time for writing config, 
install packages ang create file structure - just clone this.

## Inside

I make pages with Pug at `./src/pages/page/page.pug` and styles with SASS at `./src/pages/page/page.sass`.
Components are all together now, but could be separated into inner directories.
Webpack module rules are exported into particular files at `./webpack/`.

## Steps


1. clone file architecture of branch "master" into your projects dir and set your project name
```
git clone https://github.com/Frame25/webpack-template.git <your_project_name>
```

1.1 if you want some other branch do this:
```
git clone -b <branch-name> https://github.com/Frame25/webpack-template.git <your_project_name>
```

2. get into your project directory
```
cd <your_project_name>
```

3. remove current .git directory to unlink with this project
```
rm -rf .git
```

4. init new empty git directory
```
git init
```

4.1 link to your remote repository if you want
```
git remote set-url origin https://github.com/your_name/your_repo.git
```

5. install packages
```
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
1. The very simple project without any framework
to call: 
```
git checkout master
```
2. The very simple project with Vue
to call: 
```
git checkout vue
```
3. The very simple project with React
to call:
```
git checkout react
```
