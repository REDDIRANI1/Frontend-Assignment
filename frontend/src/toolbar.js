// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {
    const toolbarStyle = {
        padding: '20px',
        backgroundColor: 'white',
        borderBottom: '1px solid #e5e7eb',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)'
    };

    const containerStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '12px',
        maxWidth: '1400px',
        margin: '0 auto'
    };

    const titleStyle = {
        fontSize: '16px',
        fontWeight: 600,
        color: '#1f2937',
        marginBottom: '12px'
    };

    return (
        <div style={toolbarStyle}>
            <div style={titleStyle}>Node Palette</div>
            <div style={containerStyle}>
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />
                <DraggableNode type='math' label='Math' />
                <DraggableNode type='logger' label='Logger' />
                <DraggableNode type='delay' label='Delay' />
                <DraggableNode type='condition' label='Condition' />
                <DraggableNode type='api' label='API' />
            </div>
        </div>
    );
};
