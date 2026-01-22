// conditionNode.js

import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const ConditionNode = ({ id, data }) => {
  const [operator, setOperator] = useState(data?.operator || 'equals');

  const handleOperatorChange = (e) => {
    setOperator(e.target.value);
  };

  const inputs = [
    { id: 'value' }
  ];

  const outputs = [
    { id: 'true', style: { top: '33%' } },
    { id: 'false', style: { top: '66%' } }
  ];

  return (
    <BaseNode id={id} title="Condition" inputs={inputs} outputs={outputs}>
      <label>
        Operator:
        <select value={operator} onChange={handleOperatorChange}>
          <option value="equals">Equals (==)</option>
          <option value="notEquals">Not Equals (!=)</option>
          <option value="greater">Greater (&gt;)</option>
          <option value="less">Less (&lt;)</option>
        </select>
      </label>
    </BaseNode>
  );
}
