/**
 * Policy which ensures ownership over requested resource.
 */
module.exports = function(req, res, next) {
  req.options.where                                               = req.options.where || {};
  req.options.where[req.options.model === 'user' ? 'id' : 'user'] = req.access_token.user;

  next();
};
