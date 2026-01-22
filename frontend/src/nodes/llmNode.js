// llmNode.js

import { BaseNode } from './BaseNode';

export const LLMNode = ({ id, data }) => {
  const inputs = [
    { id: 'system', style: { top: `${100/3}%` } },
    { id: 'prompt', style: { top: `${200/3}%` } }
  ];

  const outputs = [
    { id: 'response' }
  ];

  return (
    <BaseNode id={id} title="LLM" inputs={inputs} outputs={outputs}>
      <span>This is a LLM.</span>
    </BaseNode>
  );
}
