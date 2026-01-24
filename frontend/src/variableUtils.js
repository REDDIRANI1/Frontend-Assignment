/**
 * Extracts variable names from text that match the pattern {{variableName}}
 * @param {string} text - The text to extract variables from
 * @returns {string[]} Array of unique variable names
 */
export const extractVariables = (text) => {
  if (!text || typeof text !== 'string') {
    return [];
  }

  const regex = /\{\{(\s*[a-zA-Z_][a-zA-Z0-9_]*\s*)\}\}/g;
  const variables = [];
  let match;

  while ((match = regex.exec(text)) !== null) {
    const variableName = match[1].trim();
    if (!variables.includes(variableName)) {
      variables.push(variableName);
    }
  }

  return variables;
};

// Test the function
console.log('Testing extractVariables function:');
console.log('Test 1 - Single variable:', extractVariables('Hello {{name}}!'));
console.log('Test 2 - Multiple variables:', extractVariables('{{greeting}} {{name}}, your age is {{age}}'));
console.log('Test 3 - Duplicate variables:', extractVariables('{{name}} and {{name}} again'));
console.log('Test 4 - Variables with spaces:', extractVariables('{{ name }} and {{  age  }}'));
console.log('Test 5 - No variables:', extractVariables('Hello world'));
console.log('Test 6 - Invalid patterns:', extractVariables('{{123}} {{-invalid}} {{valid_var}}'));
console.log('Test 7 - Empty string:', extractVariables(''));
console.log('Test 8 - Null input:', extractVariables(null));
