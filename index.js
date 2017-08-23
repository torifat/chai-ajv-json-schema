
module.exports = function (chai, utils) {
  var assert = chai.assert;
  chai.ajv = require('ajv')();

  chai.Assertion.addMethod('validWithSchema', function (schema, msg) {
    const obj = this._obj;
    const schemas = Array.isArray(schema) ? schema : [schema];
    schemas.forEach(function(sch_test){
      var valid = chai.ajv.validate(sch_test, obj);
      assert(valid, chai.ajv.errorsText());
    })
  });

    chai.Assertion.addMethod('notValidWithSchema', function (schema, msg) {
        const obj = this._obj;
        const schemas = Array.isArray(schema) ? schema : [schema];
        schemas.forEach(function(sch_test){
            var valid = chai.ajv.validate(sch_test, obj);
            assert(!valid, chai.ajv.errorsText());
        })
    });

  assert.validWithSchema = function (val, exp, msg) {
    new chai.Assertion(val, msg).to.be.validWithSchema(exp);
  };

  assert.notValidWithSchema = function (val, exp, msg) {
    new chai.Assertion(val, msg).to.be.validWithSchema(exp);
  };
}
