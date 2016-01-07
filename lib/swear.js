module.exports.es6 = function swear(fn) {
  return new Promise((resolve, reject) => {
    fn(function(err, result) {
      if (err) {
        return reject(err);
      }

      return resolve(result);
    });
  });
};
