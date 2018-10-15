const ContactController = require('../controllers/ContactController');

module.exports = [
  {
    path: 'contacts',
    method: 'get',
    action: ContactController.find
  }
];
