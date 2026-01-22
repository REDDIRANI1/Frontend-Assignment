// loggerNode.js

import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const LoggerNode = ({ id, data }) => {
  const [logLevel, setLogLevel] = useState(data?.logLevel || 'info');

  const handleLevelChange = (e) => {
    setLogLevel(e.target.value);
  };

  const inputs = [
    { id: 'input' }
  ];

  const outputs = [
    { id: 'output' }
  ];

  return (
    <BaseNode id={id} title="Logger" inputs={inputs} outputs={outputs}>
      <label>
        Log Level:
        <select value={logLevel} onChange={handleLevelChange}>
          <option value="info">Info</option>
          <option value="debug">Debug</option>
          <option value="warn">Warning</option>
          <option value="error">Error</option>
        </select>
      </label>
    </BaseNode>
  );
}
