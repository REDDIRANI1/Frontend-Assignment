export const extractVariables = (text) => {
  const variablePattern = /\{\{([^}]+)\}\}/g;
  const variables = [];
  let match;

  while ((match = variablePattern.exec(text)) !== null) {
    const variableName = match[1].trim();
    if (!variables.includes(variableName)) {
      variables.push(variableName);
    }
  }

  console.log('Extracted variables from text:', text, '→', variables);
  return variables;
};
