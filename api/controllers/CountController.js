"use strict";

let actionUtil = require('sails/lib/hooks/blueprints/actionUtil');

module.exports = {
  count: function (req, res) {
    let Model    = sails.models[req.param('modelName')];
    let criteria = actionUtil.parseCriteria(req);

    if (!Model) {
      return res.badRequest('invalid_parameter');
    }

    delete criteria.modelName;

    Model.count(criteria, function (error, response) {
      if (error) {
        return res.serverError('database_error', error);
      }

      res.ok({count: response});
    });
  }
};
