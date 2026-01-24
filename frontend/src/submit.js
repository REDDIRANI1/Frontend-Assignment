// submit.js

export const SubmitButton = () => {
    const buttonStyle = {
        padding: '12px 32px',
        fontSize: '15px',
        fontWeight: 600,
        color: 'white',
        backgroundColor: '#3b82f6',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        boxShadow: '0 2px 4px rgba(59, 130, 246, 0.2)',
        transition: 'all 0.2s ease',
    };

    const containerStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        marginTop: '10px'
    };

    return (
        <div style={containerStyle}>
            <button
                type="submit"
                style={buttonStyle}
                onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#2563eb';
                    e.target.style.boxShadow = '0 4px 8px rgba(59, 130, 246, 0.3)';
                }}
                onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#3b82f6';
                    e.target.style.boxShadow = '0 2px 4px rgba(59, 130, 246, 0.2)';
                }}
            >
                Submit
            </button>
        </div>
    );
}
