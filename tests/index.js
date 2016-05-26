var chai = require('chai');
var expect = chai.expect;

chai.use(require('..'))

var schema = require('./schemas/complex.json');

describe("use mocha", function(){
  it("invalidates with a borken schema", function(){
    chai.ajv.addSchema(schema, "test_schema");
    expect({}).to.validateWithSchema("test_schema");
  })
})
