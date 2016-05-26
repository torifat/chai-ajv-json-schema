
module.exports = function (chai, utils) {
  var assert = chai.assert;

  chai.ajv = require('ajv')();

  chai.Assertion.addMethod('validWithSchema', function (schema, msg) {
    const obj = this._obj;
    var valid = chai.ajv.validate(schema, obj);
    if (!valid) console.log(valid.ajv.errorsText());
  });

  assert.jsonSchema = function (val, exp, msg) {
    new chai.Assertion(val, msg).to.be.jsonSchema(exp);
  };

  assert.notJsonSchema = function (val, exp, msg) {
    new chai.Assertion(val, msg).to.not.be.jsonSchema(exp);
  };
}
