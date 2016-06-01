module.exports = {
  attributes: {
    todo: 'string',
    done: {
      type : 'boolean',
      index: true
    },
    list: {
      model: 'list'
    },
    user: {
      model: 'user'
    }
  }
};
