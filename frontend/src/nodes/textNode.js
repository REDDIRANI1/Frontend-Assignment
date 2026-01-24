// textNode.js

import { useState, useRef, useEffect } from 'react';
import { BaseNode } from './BaseNode';
import { extractVariables } from '../variableUtils';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [variables, setVariables] = useState([]);
  const textareaRef = useRef(null);

  const resizeTextarea = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  };

  useEffect(() => {
    resizeTextarea();

    const extractedVariables = extractVariables(currText);
    setVariables(extractedVariables);
    console.log(`[TextNode ${id}] Detected variables:`, extractedVariables);
  }, [currText, id]);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
    resizeTextarea();
  };

  const inputs = variables.map((variable, index) => ({
    id: variable,
    style: { top: `${(index + 1) * 100 / (variables.length + 1)}%` }
  }));

  const outputs = [
    { id: 'output' }
  ];

  return (
    <BaseNode id={id} title="Text" inputs={inputs} outputs={outputs}>
      <label>
        Text:
        <textarea
          ref={textareaRef}
          value={currText}
          onChange={handleTextChange}
        />
      </label>
    </BaseNode>
  );
}
