/**
 * @module Address
 * @type {object}
 */
module.exports = {
  primaryKey: 'id',
  datastore: 'contactBookDB',
  attributes: {
    id: { type: 'number', autoMigrations: { autoIncrement: true } },
    contact: { model: 'contact', required: true },
    addressType: { type: 'string' },
    address: { type: 'string' },
    city: { type: 'string' },
    state: { type: 'string' },
    zip: { type: 'string' }
  }
};
