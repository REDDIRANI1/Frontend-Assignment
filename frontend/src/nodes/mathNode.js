// mathNode.js

import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const MathNode = ({ id, data }) => {
  const [operation, setOperation] = useState(data?.operation || 'add');

  const handleOperationChange = (e) => {
    setOperation(e.target.value);
  };

  const inputs = [
    { id: 'a' },
    { id: 'b' }
  ];

  const outputs = [
    { id: 'result' }
  ];

  return (
    <BaseNode id={id} title="Math" inputs={inputs} outputs={outputs}>
      <label>
        Operation:
        <select value={operation} onChange={handleOperationChange}>
          <option value="add">Add (+)</option>
          <option value="subtract">Subtract (-)</option>
          <option value="multiply">Multiply (×)</option>
          <option value="divide">Divide (÷)</option>
        </select>
      </label>
    </BaseNode>
  );
}
