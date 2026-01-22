// apiNode.js

import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const APINode = ({ id, data }) => {
  const [method, setMethod] = useState(data?.method || 'GET');
  const [url, setUrl] = useState(data?.url || '');

  const handleMethodChange = (e) => {
    setMethod(e.target.value);
  };

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  const inputs = [
    { id: 'body' }
  ];

  const outputs = [
    { id: 'response' }
  ];

  return (
    <BaseNode id={id} title="API" inputs={inputs} outputs={outputs}>
      <label>
        Method:
        <select value={method} onChange={handleMethodChange}>
          <option value="GET">GET</option>
          <option value="POST">POST</option>
          <option value="PUT">PUT</option>
          <option value="DELETE">DELETE</option>
        </select>
      </label>
      <label>
        URL:
        <input
          type="text"
          value={url}
          onChange={handleUrlChange}
          placeholder="https://api.example.com"
        />
      </label>
    </BaseNode>
  );
}
