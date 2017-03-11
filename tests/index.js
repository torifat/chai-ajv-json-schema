var chai = require('chai');
var expect = chai.expect;

chai.use(require('..'))

var schema = require('./schemas/complex.json');
chai.ajv.addSchema(schema, "test_schema");

describe("use mocha", function(){
  it("invalidates with a broken schema", function(){
    expect({}).to.validWithSchema("test_schema");
  })
})

describe("negative testing", function(){
    it("'notValidWithSchema' validates with a broken schema", function(){
        expect({}).to.notValidWithSchema("test_schema");
    })
})
