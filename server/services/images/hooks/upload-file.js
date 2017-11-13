// ToDo: make this hook universal
const logger = require('winston');

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return function (hook) {
    return new Promise(resolve => {
      const uploadService = hook.app.service('uploads');
      const uploadsUrl = hook.app.get('uploads');
      const uri = hook.data.uri;

      if(!uri) {
        resolve(hook);
      }

      uploadService.create({ uri: uri })
        .then(result => {
          hook.data.fileName = uploadsUrl + result.id;
          resolve(hook);
        })
        .catch(error => {
          hook.app.error(error);
          resolve(hook);
        });
    });
  };
};
