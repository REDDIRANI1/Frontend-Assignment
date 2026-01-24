import { useState } from 'react';
import { useStore } from './store';

export const SubmitButton = () => {
    const { nodes, edges } = useStore();
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState(null);
    const [error, setError] = useState(null);

    const handleSubmit = async () => {
        setLoading(true);
        setError(null);
        setResults(null);

        try {
            const response = await fetch('http://localhost:8000/pipelines/parse', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nodes, edges }),
            });

            if (!response.ok) {
                throw new Error('Failed to analyze pipeline');
            }

            const data = await response.json();
            setResults(data);
        } catch (err) {
            setError(err.message || 'Failed to connect to backend');
        } finally {
            setLoading(false);
        }
    };

    const buttonStyle = {
        padding: '12px 32px',
        fontSize: '15px',
        fontWeight: 600,
        color: 'white',
        backgroundColor: loading ? '#9ca3af' : '#3b82f6',
        border: 'none',
        borderRadius: '8px',
        cursor: loading ? 'not-allowed' : 'pointer',
        boxShadow: '0 2px 4px rgba(59, 130, 246, 0.2)',
        transition: 'all 0.2s ease',
    };

    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        marginTop: '10px'
    };

    const loadingStyle = {
        marginTop: '16px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        color: '#6b7280',
        fontSize: '14px',
    };

    const spinnerStyle = {
        width: '20px',
        height: '20px',
        border: '3px solid #e5e7eb',
        borderTop: '3px solid #3b82f6',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite',
    };

    const resultsStyle = {
        marginTop: '16px',
        padding: '16px',
        backgroundColor: '#f9fafb',
        border: '1px solid #e5e7eb',
        borderRadius: '8px',
        minWidth: '300px',
    };

    const resultItemStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '8px 0',
        fontSize: '14px',
    };

    const labelStyle = {
        fontWeight: 600,
        color: '#374151',
    };

    const valueStyle = {
        color: '#6b7280',
    };

    const dagStatusStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        color: results?.is_dag ? '#10b981' : '#ef4444',
        fontWeight: 600,
    };

    const errorStyle = {
        marginTop: '16px',
        padding: '12px 16px',
        backgroundColor: '#fef2f2',
        border: '1px solid #fecaca',
        borderRadius: '8px',
        color: '#dc2626',
        fontSize: '14px',
    };

    return (
        <div style={containerStyle}>
            <style>
                {`
                    @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }
                `}
            </style>
            <button
                type="submit"
                style={buttonStyle}
                onClick={handleSubmit}
                disabled={loading}
                onMouseEnter={(e) => {
                    if (!loading) {
                        e.target.style.backgroundColor = '#2563eb';
                        e.target.style.boxShadow = '0 4px 8px rgba(59, 130, 246, 0.3)';
                    }
                }}
                onMouseLeave={(e) => {
                    if (!loading) {
                        e.target.style.backgroundColor = '#3b82f6';
                        e.target.style.boxShadow = '0 2px 4px rgba(59, 130, 246, 0.2)';
                    }
                }}
            >
                Submit
            </button>

            {loading && (
                <div style={loadingStyle}>
                    <div style={spinnerStyle}></div>
                    <span>Analyzing pipeline...</span>
                </div>
            )}

            {error && (
                <div style={errorStyle}>
                    ⚠️ {error}
                </div>
            )}

            {results && (
                <div style={resultsStyle}>
                    <div style={resultItemStyle}>
                        <span style={labelStyle}>Nodes:</span>
                        <span style={valueStyle}>{results.num_nodes}</span>
                    </div>
                    <div style={resultItemStyle}>
                        <span style={labelStyle}>Edges:</span>
                        <span style={valueStyle}>{results.num_edges}</span>
                    </div>
                    <div style={resultItemStyle}>
                        <span style={labelStyle}>Valid DAG:</span>
                        <span style={dagStatusStyle}>
                            {results.is_dag ? '✓ Yes' : '✗ No'}
                        </span>
                    </div>
                </div>
            )}
        </div>
    );
}
