// draggableNode.js

export const DraggableNode = ({ type, label }) => {
    const onDragStart = (event, nodeType) => {
      const appData = { nodeType }
      event.target.style.cursor = 'grabbing';
      event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
      event.dataTransfer.effectAllowed = 'move';
    };

    const baseStyle = {
      cursor: 'grab',
      minWidth: '90px',
      height: '64px',
      display: 'flex',
      alignItems: 'center',
      borderRadius: '8px',
      backgroundColor: '#1f2937',
      justifyContent: 'center',
      flexDirection: 'column',
      border: '2px solid transparent',
      transition: 'all 0.2s ease',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
    };

    const labelStyle = {
      color: '#fff',
      fontSize: '14px',
      fontWeight: 500,
      userSelect: 'none'
    };

    const handleMouseEnter = (e) => {
      e.target.style.backgroundColor = '#374151';
      e.target.style.borderColor = '#3b82f6';
      e.target.style.boxShadow = '0 4px 8px rgba(59, 130, 246, 0.2)';
    };

    const handleMouseLeave = (e) => {
      e.target.style.backgroundColor = '#1f2937';
      e.target.style.borderColor = 'transparent';
      e.target.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    };

    return (
      <div
        className={type}
        onDragStart={(event) => onDragStart(event, type)}
        onDragEnd={(event) => (event.target.style.cursor = 'grab')}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={baseStyle}
        draggable
      >
          <span style={labelStyle}>{label}</span>
      </div>
    );
  };
  