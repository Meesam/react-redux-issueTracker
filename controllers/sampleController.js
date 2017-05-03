import Sequelize from 'sequelize';
import sequelizeConnection from '../core/sequiizeDb';

var Article=sequelizeConnection.define('article',{
  title:Sequelize.STRING,
  description:Sequelize.TEXT
});
sequelizeConnection.sync();

module.exports=Article;