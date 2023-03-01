//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn, Diet } = require('./src/db.js');

require('dotenv').config();

// Syncing all the models at once.
conn.sync({ force: true }).then(async () => {

  //Inicialización
  await Diet.bulkCreate([
    {name: 'gluten free'},
    {name: 'ketogenic'},
    {name: 'vegetarian'},
    {name: 'dairy free'},
    {name: 'lacto ovo vegetarian'},
    {name: 'vegan'},
    {name: 'pescatarian'},
    {name: 'paleolithic'},
    {name: 'primal'},
    {name: 'fodmap friendly'},
    {name: 'whole 30'},
    {name: 'omnivore'},
   ])
   
  server.listen(process.env.PORT, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
