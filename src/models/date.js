module.exports = {
  primaryKey: 'id',
  datastore: 'contactBookDB',
  attributes: {
    id: { type: 'number', autoMigrations: { autoIncrement: true } },
    contact: {
      model: 'contact'
    },
    dateType: {
      type: 'string'
    },
    date: {
      type: 'string'
    }
  }
};
