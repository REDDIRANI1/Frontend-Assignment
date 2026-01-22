// draggableNode.js

export const DraggableNode = ({ type, label }) => {
    const onDragStart = (event, nodeType) => {
      const appData = { nodeType }
       event.target.style.cursor = 'grabbing';
      event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
      event.dataTransfer.effectAllowed = 'move';
    };

    const onDragEnd = (event) => {
      event.preventDefault();
             event.target.style.cursor = 'grab');
    };

    return (
      <div
        className=`draggable-node ${type} `
        onDragStart={(event) => onDragStart(event, type)}
        onDragEnd={onDragEnd}
        draggable={true}
        style={{
          cursor:'drag'
        }}
      >
          <span>{label}</span>
      </div>
    );
  };
  