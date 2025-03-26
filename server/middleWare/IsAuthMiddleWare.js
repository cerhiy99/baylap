const jwt = require('jsonwebtoken');
const ErrorApi = require('../error/ErrorApi');

module.exports = async (req, resp, next) => {
  try {
    const token = req.headers.token;
    if (token) {
      const isTokenTrue = jwt.verify(
        token,
        process.env.JWT_SECRET,
        (err, decoded) => {
          if (err) {
            return false;
          }
          req.user = decoded;
          return true;
        }
      );
      if (!isTokenTrue) {
        return next(ErrorApi.badRequest('Невірний токен.'));
      }

      next();
    } else {
      return next(ErrorApi.noAuth('Ви не авторизовані.'));
    }
  } catch (err) {
    return next(ErrorApi.noAuth());
  }
};
