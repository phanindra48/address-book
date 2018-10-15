module.exports = {
  primaryKey: 'id',
  datastore: 'contactBookDB',
  attributes: {
    id: { type: 'number', autoMigrations: { autoIncrement: true } },
    firstName: {
      type: 'string',
      required: true
    },
    middleName: {
      type: 'string'
    },
    lastName: {
      type: 'string'
    }
  }
};
