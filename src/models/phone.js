module.exports = {
  primaryKey: 'id',
  datastore: 'contactBookDB',
  attributes: {
    id: { type: 'number', autoMigrations: { autoIncrement: true } },
    contact: {
      model: 'contact'
    },
    phoneType: {
      type: 'string'
    },
    areaCode: {
      type: 'string'
    },
    number: {
      type: 'string'
    }
  }
};
