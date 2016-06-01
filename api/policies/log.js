/**
 * Policy which Logs body.
 */
module.exports = function(req, res, next) {
  console.log(req.body);

  next();
};
