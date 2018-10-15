const glob = require('glob');
const Waterline = require('waterline');
const config = require('./src/config');

const orm = new Waterline();

/**
 * This will load all models under ./models into the ORM
 */

const collections = glob.sync('./src/models/*').map(collectionFilename => {
  const name = collectionFilename.match(/\.\/src\/models\/(.+)\.js/)[1];

  // Load collection
  const collection = require(collectionFilename); // eslint-disable-line

  // Assign filename as identity aka table name if non is set
  collection.identity = collection.identity || name.toLowerCase();

  return collection;
});

orm.configureCollections = function configureCollections(defaultConnection) {
  const conn = defaultConnection || config.orm.defaults.connection;
  collections.forEach(collection => {
    // Assign connection to every model if non is set
    collection.connection = collection.connection || conn; // eslint-disable-line
    orm.registerModel(Waterline.Collection.extend(collection));
  });
};

module.exports = orm;
