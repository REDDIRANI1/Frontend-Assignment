import { Handle, Position } from 'reactflow';
import './BaseNode.css';

export const BaseNode = ({ id, title, inputs = [], outputs = [], children, style = {} }) => {
  return (
    <div className="base-node" style={style}>
      {inputs.map((input, index) => (
        <Handle
          key={`input-${index}`}
          type="target"
          position={Position.Left}
          id={`${id}-${input.id}`}
          style={input.style}
        />
      ))}

      <div className="base-node-header">
        <span>{title}</span>
      </div>

      <div className="base-node-content">
        {children}
      </div>

      {outputs.map((output, index) => (
        <Handle
          key={`output-${index}`}
          type="source"
          position={Position.Right}
          id={`${id}-${output.id}`}
          style={output.style}
        />
      ))}
    </div>
  );
};
