var chai = require('chai');
var expect = chai.expect;

chai.use(require('..'))

var schema = require('./schemas/complex.json');
chai.ajv.addSchema(schema, "test_schema");

describe("use mocha", function(){
  it("invalidates with a borken schema", function(){
    expect({}).to.validWithSchema("test_schema");
  })
})
