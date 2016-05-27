# chai-ajv-json-schema
Chai plugin to allow JSON schema to be used with expect.
This is currently a stub and is under heavy development.
All contributions are welcome.

##Usage
This plugin adds validWithSchema to the expect validation methods.
```
expect({}).to.be.validWithSchema(['schema1','schema2])
expect({}).to.be.validWithSchema('schema1')
```

##Simple Example
```
var chai = require('chai');
var expect = chai.expect;

chai.use(require('chai-ajv-json-schema'))
chai.ajv.addSchema(require('./schemas/complex.json'), "test_schema");

describe("Look we can test against a schema", function(){
  it("checks that doAllTheThings() does all the things.", function(){
    const results = doAllTheThings();
    expect(results).to.validWithSchema("test_schema");
  })
})

```

##Complicated Example
```
var meta = require('../meta.json');
var chai = require('chai');
var expect = chai.expect;

chai.use(require('chai-ajv-json-schema'))
chai.ajv = require('../myProject/customAjvValidator')

describe("Look we can test against a schema", function(){
  it("checks that doAllTheThings() does all the things.", function(){
    const schemasNames = meta.methods.doAllTheThings.resultSchemas;
    const results = doAllTheThings();
    expect(results).to.validWithSchema(schemasNames);
  })
})
```
