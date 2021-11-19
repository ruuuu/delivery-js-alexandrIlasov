const path = require('path')

module.exports = {
    entry: { // точки входа
        main: './src/index.js', // для index.html
        menu: './src/menu.js' // для restaurant.html
    },
    output: { // как будем собирать файлы и куда будем класть их
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist') // путь  до файла(начиная от корня)
    },
    devtool: 'eval-source-map' //  показывает ошибки
}

// перейди https://webpack.js.org/ -> Documntetion-> Guides ->  Getting Started, в разделе Basic Setup будет команда npm install webpack webpack-cli --save-dev

// Настройка:
// 1) в папке проекта пишем npm init -y (появится файл package.json)
// 2) пишем команду: npm install webpack webpack-cli --save-dev (билиотеки webpack webpack-cli усnановятся  к нам в  папку проекта), они занесутся в раздел devDependencies(для дева) в package.json/package-lock.json и появится папка node_modules(папка куда заносятся эит зависимости), раздел  Dependencies туда заносятся библиотеки  для продакшена и дева
// 3) создаем файл  .gitignore и туда пропсиываем паку node_modules/package-lock.json чтоыб она не  отслеживалась гитом
// 4) когда спуллим с гита этот проект, там не будет папки node_modules/package-lock.json, поэтому выполняем команду npm i, и тогда создатся папка node_modules 
// 5) переименовываем папку js в папку src, а в  ней создаем папку modules
// 6) в папку modules пренемес наши файлы js
// 7) в папке src создаем файлы index.js и menu.js
// 8) копируем содержимое файла auth.js и удаляем это содержимое, создаем  фукнцию const auth = () => {}, и кладем в нее наш скопированный код и в конце эеспортруме эту фукнцию auth
// 9) также сделаем со всеми  js файлами из папки modules
// 10) в package.json в разделе scripts, test переименуем в build(для запсии в консоле 'npm run build', собираем прод сборку),  а значение меняем на webpack --mode=production, добалем вторую строку "watch": "webpack --watch --mode=development"(для запсии в консоле 'npm run watch' получим сборку дева)
// 11) набираем ветриманле команду npm run watch , получим папку dist(с файламим main.js и menu.js)
// 12) в index.html подлючили только один файл  './dist/main.js' , др  подключенный ранее скрипты  убираем. Аналогично подкючаем файл './dist/menu.js' в restaurant.html
// 13) для продашен версии в териминале набираем команду npm run build 
// 14) когда будем вноисть изменерия в скрипты( продолжаать разрабратывать) , то автомтаически вебпак будет запускат команду npm run watch(т е будем получать сборку дева),  те он следит за всеми js файлами, подключенным к нему и их обновляет
// 15) когда закроем проект, и снова откроем, набираем команду npm run watch, и запускаем live server
// 16) когда  закончи мразраббатывтаь проект,  наберем команду npm run build, и он минифицируте файлы из папки .dist