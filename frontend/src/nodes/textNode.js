// textNode.js

import { useState, useRef, useEffect, useCallback } from 'react';
import { useUpdateNodeInternals } from 'reactflow';
import { BaseNode } from './BaseNode';
import { extractVariables } from '../variableUtils';
import { useStore } from '../store';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [variables, setVariables] = useState([]);
  const [nodeWidth, setNodeWidth] = useState(280);
  const textareaRef = useRef(null);
  const canvasRef = useRef(null);
  const updateNodeField = useStore((state) => state.updateNodeField);
  const updateNodeInternals = useUpdateNodeInternals();

  const calculateWidth = (text) => {
    if (!canvasRef.current) {
      canvasRef.current = document.createElement('canvas');
    }
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    if (textareaRef.current) {
      const style = window.getComputedStyle(textareaRef.current);
      context.font = `${style.fontSize} ${style.fontFamily}`;
    }

    const lines = text.split('\n');
    const maxLineWidth = lines.reduce((max, line) => {
      const width = context.measureText(line).width;
      return Math.max(max, width);
    }, 0);

    const padding = 80;
    const minWidth = 280;
    const maxWidth = 600;

    const calculatedWidth = Math.min(Math.max(maxLineWidth + padding, minWidth), maxWidth);
    return calculatedWidth;
  };

  const resizeTextarea = useCallback(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  }, []);

  const updateNodeSize = useCallback(() => {
    resizeTextarea();
    const newWidth = calculateWidth(currText);
    setNodeWidth(newWidth);
  }, [currText, resizeTextarea]);

  useEffect(() => {
    updateNodeSize();

    const extractedVariables = extractVariables(currText);
    setVariables(extractedVariables);
    console.log(`[TextNode ${id}] Detected variables:`, extractedVariables);

    updateNodeInternals(id);
  }, [currText, id, updateNodeSize, updateNodeInternals]);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
    updateNodeField(id, 'text', e.target.value);
  };

  const inputs = variables.map((variable, index) => ({
    id: variable,
    style: { top: `${(index + 1) * 100 / (variables.length + 1)}%` }
  }));

  const outputs = [
    { id: 'output' }
  ];

  return (
    <BaseNode id={id} title="Text" inputs={inputs} outputs={outputs} style={{ width: `${nodeWidth}px` }}>
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
