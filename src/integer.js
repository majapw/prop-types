import wrapValidator from './helpers/wrapValidator';

function requiredInteger(props, propName, componentName) {
  const value = props[propName];
  if (value == null || !Number.isInteger(value)) {
    return new RangeError(`${propName} in ${componentName} must be an integer`);
  }
  return null;
}

const validator = function integer(props, propName, ...rest) {
  const value = props[propName];

  if (value == null) {
    return null;
  }

  return requiredInteger(props, propName, ...rest);
};

validator.isRequired = requiredInteger;

export default () => wrapValidator(validator, 'integer');
