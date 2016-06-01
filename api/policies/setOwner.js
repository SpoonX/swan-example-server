/**
 * Policy which sets the owner on a resource.
 */
module.exports = function(req, res, next) {
  req.options.values      = req.options.values || {};
  req.options.values.user = req.access_token.user;

  next();
};
