import Ember from 'ember';
import jsonSchemaSchema from 'ember-cli-json-schema/schemas/json-schema';

var JsonSchemaValidatorService = Ember.Service.extend({
  // Validates the argument is a valid JSON schema and returns errors, if any.
  // If valid, a falsey value is returned.
  validate (schemaObj) {
    var validator = window.jjv();
    validator.addSchema('schema', jsonSchemaSchema);
    return validator.validate('schema', schemaObj);
  }
});

export default JsonSchemaValidatorService;
