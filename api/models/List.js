"use strict";

module.exports = {
  attributes: {
    name : 'string',
    user : {
      model: 'user',
      index: true
    },
    todos: {
      collection: 'todo',
      via       : 'list'
    }
  },
  afterDestroy: (destroyedRecords, done) => {
    if (!Array.isArray(destroyedRecords)) {
      return done();
    }

    var ids = _.map(destroyedRecords, record => record.id);

    Todo.destroy({list: ids})
      .then(() => done())
      .catch(done);
  }
};
