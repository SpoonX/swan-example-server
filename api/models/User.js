var bcrypt = require('bcrypt');

module.exports = {
  attributes  : {
    username: 'string',
    password: 'string',
    lists   : {
      collection: 'list',
      via       : 'user'
    },
    toJSON  : function() {
      var values = this.toObject();

      delete values.password;

      return values;
    }
  },
  beforeCreate: encryptPassword,
  beforeUpdate: encryptPassword
};

function encryptPassword(values, next) {
  if (!values.password) {
    return next();
  }

  bcrypt.hash(values.password, 10, function(error, hash) {
    if (error) {
      return next(error);
    }

    values.password = hash;

    next();
  });
}
