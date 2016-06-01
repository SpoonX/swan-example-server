module.exports = {
  jwt       : {
    secret: process.env.JWT_SECRET || 'superSecretForDev'
  }
};
