// textNode.js

import { useState, useMemo } from 'react';
import { BaseNode } from './BaseNode';
import { extractVariables } from '../utils';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  const variables = useMemo(() => extractVariables(currText), [currText]);

  const inputs = variables.map((variable, index) => ({
    id: variable,
    style: { top: `${(100 / (variables.length + 1)) * (index + 1)}%` }
  }));

  const outputs = [
    { id: 'output' }
  ];

  return (
    <BaseNode id={id} title="Text" inputs={inputs} outputs={outputs}>
      <label>
        Text:
        <input
          type="text"
          value={currText}
          onChange={handleTextChange}
        />
      </label>
    </BaseNode>
  );
}
