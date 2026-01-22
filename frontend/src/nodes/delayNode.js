// delayNode.js

import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const DelayNode = ({ id, data }) => {
  const [delay, setDelay] = useState(data?.delay || '1000');

  const handleDelayChange = (e) => {
    setDelay(e.target.value);
  };

  const inputs = [
    { id: 'input' }
  ];

  const outputs = [
    { id: 'output' }
  ];

  return (
    <BaseNode id={id} title="Delay" inputs={inputs} outputs={outputs}>
      <label>
        Delay (ms):
        <input
          type="number"
          value={delay}
          onChange={handleDelayChange}
          min="0"
          step="100"
        />
      </label>
    </BaseNode>
  );
}
