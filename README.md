# webpack-template
I made it for myself, but if you want...

This is a simple webpack project template. To fast init.

If one wants to start new project and don`t want to spend time for writing config, 
install packages ang create file structure - just clone this.

## Inside

I make pages with Pug at `./src/pages/page/page.pug` and styles with SASS at `./src/pages/page/page.sass`.
Components are all together now, but could be separated into inner directories.
Webpack module rules are exported into particular files at `./webpack/`.

## Steps


1. clone file architecture of branch "master" into your projects dir and set your project name
```shell
git clone https://github.com/Frame25/webpack-template.git <your_project_name>
```

1.1 if you want some other branch do this:
```shell
git clone -b <branch-name> https://github.com/Frame25/webpack-template.git <your_project_name>
```

2. get into your project directory
```shell
cd <your_project_name>
```

3. run the init script, to prepare for work
```shell
npm run init
```


To build your files use command:
```shell
npm run build
```
To watch files and bundle use command: 
```shell
npm run watch
```

## Branches

There are several versions: 
1. The very simple project without any framework
to call: 
```shell
git clone https://github.com/Frame25/webpack-template.git <your_project_name>
```
2. The very simple project with Vue
to call: 
```shell
git clone -b vue https://github.com/Frame25/webpack-template.git <your_project_name>
```
3. The very simple project with React
to call:
```shell
git clone -b react https://github.com/Frame25/webpack-template.git <your_project_name>
```
4. The very simple project with React & React-Pug
to call:
```shell
git clone -b react-pug https://github.com/Frame25/webpack-template.git <your_project_name>
```
