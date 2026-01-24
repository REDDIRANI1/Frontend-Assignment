// textNode.js

import { useState, useRef, useEffect } from 'react';
import { BaseNode } from './BaseNode';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const textareaRef = useRef(null);

  const resizeTextarea = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  };

  useEffect(() => {
    resizeTextarea();
  }, [currText]);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
    resizeTextarea();
  };

  const outputs = [
    { id: `${id}-output` }
  ];

  return (
    <BaseNode id={id} title="Text" outputs={outputs}>
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
